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
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.less']
})

export class PatientComponent implements OnInit {
  loading: boolean = false;
  showErrors: number = 0;
  statusErrors:number=0;
  claims: any;
  resData: any;
  messages: any;
  message:any;
  selectClaimId:any;
  doctors: {};
  status:{};
  closeResult: string;
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
    private commonService : CommonService,
    private modalService: NgbModal
    ) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin(),this.loggedInClinicDetails = this.commonService.getLoggedInClinicData();
  }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order:[[0, 'desc']],
      columnDefs: [ { orderable: false, targets: [4] } ],
      
    };
    this.getClaims();
    this.getDoctors();
    this.getStatus();
   
    // this.patientService.getClaims(this.loggedInClinicDetails.role_id).then((result) => {
    //   this.resData = result;
    //   this.claims = this.resData.data;
    //   //dtInstance.destroy();
    //   this.dtTrigger.next();
    //   //console.log(this.claims);
    //   },error => {
    //   this.spinner.hide();
    //   this.loading = false;
    //   this.toastr.error(error);
    // });
  }

  
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getClaims() {
   this.patientService.getClaims(this.loggedInClinicDetails.role_id).then((result) => {
     this.resData = result;
     this.claims = this.resData.data;
     this.dtTrigger.next();
     },error => {
     this.spinner.hide();
     this.loading = false;
     this.toastr.error(error);
   });
  }
  getDoctors() {
    this.patientService.getDoctors().then((result) => {
        this.resData = result;
        this.doctors = this.resData.data;
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
    });
  }
  getStatus() {
    this.patientService.getStatus().then((result) => {
        this.resData = result;
        this.status = this.resData.data;
       // console.log(this.status);
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
    });
  }
  onDelete(id: number,rowIndex:number) { 
    if (confirm('Are you sure want to update claim status?')) {
      this.patientService.deleteClaim(+id).then((result) => {
          this.claims.splice(rowIndex,1);
          this.toastr.success(result['message']);	
          this.rerender();
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
      });
    }
  }
  open(content,msg) {
    this.message =Config.STATUS;
    this.modalService.open(content ,{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openStatus(content,claimId) {
    this.statusErrors=0;
    console.log(claimId);
    this.selectClaimId =claimId;
    this.modalService.open(content ,{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
 
  updateStatus(userstatus:string) {
  
    if (userstatus === "")
    {
      this.statusErrors = 1 ;
    }
    else {
     
      this.patientService.updateClaimStatusbyClaimId(this.selectClaimId,userstatus).then((result) => {
            if(result['message'] && result['message'] != ''){
              document.getElementById('statusModel').click();
              this.toastr.success(result['message']);	
            
            }else{
              this.toastr.success(Config.STATUS_UPDATED_SUCCESSFULLY);
            }
          },error => {
        	
				this.toastr.error(error);
     		}); 
    }
   
    
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  rerender() : void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  
}
