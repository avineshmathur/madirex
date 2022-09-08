import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-archived-claim',
  templateUrl: './archived-claim.component.html',
  styleUrls: ['./archived-claim.component.less']
})
export class ArchivedClaimComponent implements OnInit {

  loading: boolean = false;
  showErrors: number = 0;
  archiveds: any;
  resData: any;
  loggedInClinicDetails:any;
  
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private patientService: PatientService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin(),this.loggedInClinicDetails = this.commonService.getLoggedInClinicData();
  }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    this.getArchivedClaims();
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
   //ngAfterViewInit(): void {
   // this.dtTrigger.next();
   //}

  
  getArchivedClaims() {
    this.patientService.getArchivedClaims().then((result) => {
      this.resData = result;
      this.archiveds = this.resData.data;
      this.dtTrigger.next();
      //console.log(this.archiveds);
      },error => {
      this.spinner.hide();
      this.loading = false;
      this.toastr.error(error);
    });
  }
  
  onDelete(id: number,rowIndex:number) { 
    if (confirm('Are you sure want to update claim status?')) {
      this.patientService.deleteClaim(+id).then((result) => {
          this.archiveds.splice(rowIndex,1);
          this.toastr.success(result['message']);	
          this.rerender();
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

}
