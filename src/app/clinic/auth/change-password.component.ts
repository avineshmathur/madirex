import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./auth.component.css']
})
export class ChangePasswordComponent implements OnInit {
	changePasswordForm: FormGroup;
    loading: boolean = false;
    showErrors: number = 0;

	constructor(private formBuilder: FormBuilder,
    	private adminclinicAuthService: AdminclinicAuthService,
    	private toastr: ToastrService,
    	private spinner: NgxSpinnerService,
    	private router : Router,
    	private route : ActivatedRoute,
    	private commonService : CommonService) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin();
	}

	ngOnInit() {
		this.changePasswordForm = this.formBuilder.group({
        	oldPassword: ['', Validators.required],
    		newPassword: ['', [Validators.required , Validators.pattern(Config.PASSWORD_REGX)]],
        	confirmPassword: ['', Validators.required]
        },{validator: this.passwordMatchValidator});
  	}

  	passwordMatchValidator(frm: FormGroup) {
      return frm.controls['newPassword'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
    }

    attributes = {'oldPassword': '','newPassword': '','confirmPassword': ''};
	validationMessages = {
		'oldPassword': {
      		'required': Config.OLD_PASSWORD_REQUIRED_VALIDATION_MSG
  		},
  		'newPassword': {
      		'required': Config.NEW_PASSWORD_REQUIRED_VALIDATION_MSG,
      		'pattern': Config.NEW_PASSWORD_NOT_VALID_VALIDATION_MSG
  		},
  		'confirmPassword': {
    		'required': Config.CONFIRM_PASSWORD_REQUIRED_VALIDATION_MSG,
    		'mismatch' : Config.NEW_PASSWORD_MISMATCH_VALIDATION_MSG
  		}
	};

	submit() {
  		this.loading = true;
     	this.showErrors = 1;
    	const form = this.changePasswordForm;
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
    	if (this.changePasswordForm.valid) {
    		this.showErrors = 0;
        	this.spinner.show();
    		this.adminclinicAuthService.changePassword(this.changePasswordForm.get('oldPassword').value,this.changePasswordForm.get('newPassword').value,this.changePasswordForm.get('confirmPassword').value).then((result) => {
    			this.spinner.hide();
        		this.loading = false;
          		if(result['message'] && result['message'] != ''){
          			this.toastr.success(result['message']);	
          		}else{
          			this.toastr.success(Config.RESET_PASSWORD_SUCCESS_MSG);
          		}
          		this.changePasswordForm.reset();
          	},error => {
        		this.spinner.hide();
        		this.loading = false;
        		this.changePasswordForm.reset();
				this.toastr.error(error);
     		}); 
    	}else{
        	this.loading = false;
      	}
	}
}