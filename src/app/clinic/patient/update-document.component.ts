import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.less']
})
export class UpdateDocumentComponent implements OnInit {

  documentUpdateForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;  
  document: any;
	myDate: any = '';
	adminstatuses: any = '';
	medprostatuses: any = '';

  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private patientService: PatientService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin();
  }

  ngOnInit() {
    let dte = new Date();
    this.myDate = this.formatDate(dte);
    const documentId = this.route.snapshot.paramMap.get('id');
    //getProfileById(clientId: number) {
      if (documentId) {
        this.patientService.getDocumentById(+documentId).then((result) => {
          
          this.resData = result;
          //console.log(this.resData.data); return false;
          this.document = this.resData.data;
					console.log(this.document);
          this.documentUpdateForm.patchValue({
            documentNote: this.document.document_notes,
            expectedDate: this.formatDate(this.document.expected_date),
            documentId: this.document.id,  
          });
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
				
      } else {
        this.document = null;
      }
			
			//let adminStatusList: number[] = [
			//	{'uploaded' : 'uploaded' },
			//	{'sent_to_medpro' : 'sent_to_medpro' },
			//	{'medpro_report_received' : 'medpro_report_received' }
			//];
			//
			//let medproStatusList: number[] = [
			//	{'received_from_admin' : 'received_from_admin' },
			//	{'under_review' : 'under_review' },
			//	{'report_submitted' : 'report_submitted' }
			//];
			//
			//this.medprostatuses = medproStatusList;
			//this.adminstatuses = adminStatusList;
      
		this.documentUpdateForm = this.formBuilder.group({
      documentNote: ['', Validators.required],
      expectedDate: ['', Validators.required],
      documentId: ['', Validators.required]
    });
			
  }
  
  private formatDate(date) { 
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  
  attributes = {'documentNote': '','expectedDate':'', 'documentId':''};
	validationMessages = {
      'documentNote': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'expectedDate': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'documentId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		}
	};

	submit() {
    this.loading = true;
    this.showErrors = 1;
    const form = this.documentUpdateForm;
    for (const field in this.attributes) {
        this.attributes[field] = '';
        const control = form.get(field);
        if (control && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
              if (this.attributes[field] == '') {
                  this.attributes[field] += messages[key] + ' ';
              }
          }
        }
    }
    if (this.documentUpdateForm.valid) {
      this.showErrors = 0;
      this.spinner.show();
      this.patientService.documentUpdate(this.documentUpdateForm.get('documentNote').value,this.documentUpdateForm.get('expectedDate').value,this.documentUpdateForm.get('documentId').value).then((result) => {
        this.spinner.hide();
          this.loading = false;
            if(result['message'] && result['message'] != ''){
              this.toastr.success(result['message']);	
            }else{
              this.toastr.success(Config.RESET_PASSWORD_SUCCESS_MSG);
            }
          },error => {
          this.spinner.hide();
          this.loading = false;
      this.toastr.error(error);
      }); 
    }else{
      this.loading = false;
    }
	}

}
