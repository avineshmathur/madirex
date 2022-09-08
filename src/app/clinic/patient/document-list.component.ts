import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import {Location} from '@angular/common';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.less']
})
export class DocumentListComponent implements OnInit {

  loading: boolean = false;
  showErrors: number = 0;
  documents: any;
  claimidurl: any = '';
  resData: any;  
  loggedInClinicDetails:any;
  claimStatus: any = '';
  docs3Path: string = '';
  docCount: string = '';
  claimId:any;
  WcabNo:any;
  calimsId:any;
  name:any;

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  backClicked() {
    this._location.back();
  }
  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private patientService: PatientService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService,
    private _location: Location
    ) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin(),this.loggedInClinicDetails = this.commonService.getLoggedInClinicData();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    const claimId = this.route.snapshot.paramMap.get('id');
    this.docs3Path = Config.DOC_IMG_S3_PATH;
    this.claimidurl = claimId;
    //getProfileById(clientId: number) {
      if (claimId) {
        this.patientService.getDocumentsByClaimId(+claimId).then((result) => {
        this.resData = result;
        this.documents = this.resData.data;
        this.docCount = this.documents.length;
        this.dtTrigger.next();
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
        
        this.patientService.getClaimById(+claimId).then((result) => {
        this.resData = result;
        console.log(this.resData);
        this. claimId = this.resData.data[0].claim_no;
        this.WcabNo= this.resData.data[0].case_no;
        this.name = this.resData.data[0].first_name + ' ' + this.resData.data[0].last_name;
        this.calimsId=this.resData.data[0].id;
        this.claimStatus = this.resData.data[0].status;
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
      }
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
  onUpdateClaimStatus(id: number, roleId: number, ClaimId: number,rowIndex:number) {
    if (confirm('Are you sure want to update claim status?')) {
      this.patientService.updateClaimStatus(id, roleId, ClaimId).then((result) => {
          //this.documents.splice(rowIndex,1);
          this.toastr.success(result['message']);
          setTimeout(function() {
              location.reload();
          }, 3000);
          //this.rerender();
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
      });
    }
  }
  
  onDelete(id: number,rowIndex:number) { 
    if (confirm('Are you sure want to delete this?')) {
      this.patientService.deleteDocument(+id).then((result) => {
          //this.documents.splice(rowIndex,1);
          this.toastr.success(result['message']);	
          //this.rerender();
          setTimeout(function() {
              location.reload();
          }, 3000);
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
      });
    }
  }
  
  rerender() : void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
    
  //onUpdateStatus(id: number) { 
  //  if (confirm('Are you sure want to update document status')) {
  //    this.patientService.updateStatus(+id).then((result) => {
  //        this.toastr.success(result['message']);	
  //        this.ngOnInit();
  //      },error => {
  //        this.spinner.hide();
  //        this.loading = false;
  //        //this.changePasswordForm.reset();
  //        this.toastr.error(error);
  //    });
  //  }
  //}
  
}