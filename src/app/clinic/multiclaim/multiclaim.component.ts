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
  selector: 'app-multiclaim',
  templateUrl: './multiclaim.component.html',
  styleUrls: ['./multiclaim.component.less']
})
export class MulticlaimComponent implements OnInit {
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
  constructor(
    private formBuilder: FormBuilder,
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
            contctInfo: this.claim.contact_info,
            wcabNo: this.claim.case_no,
          });
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
      supplementaryWcabno: ['', Validators.required],
      wcabNo: ['', Validators.required],
      appAttorney: [''],
      employer: [''],
      defAttorney: [''],
      doctorId: ['', Validators.required ],
      medproId: ['', Validators.required]
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
  
  attributes = {'firstName': '','lastName': '','wcabNo': '','claimNo': '','doctorId': '','medproId': '','supplementaryWcabno':''};
  validationMessages = {
    'firstName': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
        'pattern': Config.NAME_NOT_VALID_MESSAGE
    },
    'lastName': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
        'pattern': Config.NAME_NOT_VALID_MESSAGE
    },
    // 'dateOfBirth': {
    // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    // },
    // 'contctInfo': {
    // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
    //     'pattern': Config.PHONE_NOT_VALID_MESSAGE
    // },
    'wcabNo': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'claimNo': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'supplementaryWcabno': {
    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    // 'employer': {
    // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    // },
    // 'defAttorney': {
    // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    // },
    'doctorId': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'medproId': {
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
      this.patientService.patientRegister(this.claimUpdateForm.get('firstName').value,this.claimUpdateForm.get('lastName').value,this.claimUpdateForm.get('dateOfBirth').value,this.claimUpdateForm.get('contctInfo').value,this.claimUpdateForm.get('wcabNo').value,this.claimUpdateForm.get('claimNo').value,this.claimUpdateForm.get('appAttorney').value,this.claimUpdateForm.get('employer').value,this.claimUpdateForm.get('defAttorney').value,this.claimUpdateForm.get('doctorId').value,this.claimUpdateForm.get('medproId').value,this.claimUpdateForm.get('supplementaryWcabno').value).then((result) => {
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
