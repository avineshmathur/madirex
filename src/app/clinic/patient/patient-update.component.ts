import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.less']
})
export class PatientUpdateComponent implements OnInit {
  claimUpdateForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;  
  doctors: {};
  medpros: {};
  claim: any;
  backClicked() {
    if(confirm("Are you sure to Back ")) {
      this._location.back();
    }
    
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
    this.commonService.checkClinicLogin();
  }

  ngOnInit() {
    this.getDoctors();
    this.getMedpros();
    const claimId = this.route.snapshot.paramMap.get('id');
    //getProfileById(clientId: number) {
      if (claimId) {
        this.patientService.getClaimById(+claimId).then((result) => {
          
          this.resData = result;
          this.claim = this.resData.data[0];
					console.log(this.claim);
					//var countryID = this.user.country_id;
					//var stateID = this.user.state_id;
          //console.warn(countryID);
          this.claimUpdateForm.patchValue({
            firstName: this.claim.first_name,
            lastName: this.claim.last_name,
            dateOfBirth: this.claim.date_of_birth,
            //dateOfBirth: this.formatDate(this.claim.date_of_birth),
            contctInfo: this.claim.contact_info,
            claimNo: this.claim.claim_no,
            caseNo: this.claim.case_no,
            appAttorney: this.claim.applicant_attorney,
            employer: this.claim.employer,
            defAttorney: this.claim.defendant_attorney,
            doctorId: this.claim.assigned_doctor_id,            
            medproId: this.claim.assigned_medpro_id,
            //croppedImage: 'https://medirecx.s3.amazonaws.com/user-avtar/'+.this.user.image_url,
            patientId: this.claim.patient_id,
            supplementaryWcabno:this.claim.supplementary_wcabno
          });
					//this.getStatesByCountryId(countryID);
					//this.getCitiesByStateId(stateID);
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
				
      } else {
        this.claim = null;
      }
      
		this.claimUpdateForm = this.formBuilder.group({
      firstName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      lastName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      dateOfBirth: [''],
      contctInfo: ['', [ Validators.pattern(Config.PHONE_PATTERN)]],
      claimNo: ['', Validators.required],
      caseNo: ['', Validators.required],
      appAttorney: [''],
      employer: [''],
      defAttorney: [''],
      doctorId: ['', Validators.required],
      medproId: ['', Validators.required],
      patientId: ['', Validators.required],
      supplementaryWcabno: [''],
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
  
  getMedpros() {
    this.patientService.getMedpros().then((result) => {
        this.resData = result;
        this.medpros = this.resData.data;
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
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
  
  attributes = {'firstName': '','lastName': '','claimNo': '','caseNo': '','doctorId': '','medproId': '','patientId':''};
	validationMessages = {
      'firstName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.NAME_NOT_VALID_MESSAGE
  		},
      'lastName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.NAME_NOT_VALID_MESSAGE
  		},
      'dateOfBirth': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'contctInfo': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.PHONE_NOT_VALID_MESSAGE
  		},
      'claimNo': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'caseNo': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'appAttorney': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'employer': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'defAttorney': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'doctorId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'medproId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'patientId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		}
	};

	submit() {
    this.loading = true;
    this.showErrors = 1;
    const form = this.claimUpdateForm;
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
   
    if (this.claimUpdateForm.valid) {
      
      this.showErrors = 0;
      this.spinner.show();
      this.patientService.claimUpdate(this.claimUpdateForm.get('firstName').value,this.claimUpdateForm.get('lastName').value,this.claimUpdateForm.get('contctInfo').value,this.claimUpdateForm.get('appAttorney').value,this.claimUpdateForm.get('employer').value,this.claimUpdateForm.get('defAttorney').value,this.claimUpdateForm.get('patientId').value,this.claimUpdateForm.get('dateOfBirth').value).then((result) => {
        this.spinner.hide();
          this.loading = false;
            if(result['message'] && result['message'] != ''){
              this.toastr.success(result['message']);	
              this.router.navigate(['clinic/patient']);
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
