import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./auth.component.css']
})

export class ResetPasswordComponent implements OnInit {
	resetPasswordForm: FormGroup;
    loading: boolean = false;
    showErrors: number = 0;
    resetToken: string;
	constructor(private formBuilder: FormBuilder,
    	private adminclinicAuthService: AdminclinicAuthService,
    	private toastr: ToastrService,
    	private spinner: NgxSpinnerService,
    	private router : Router,
    	private route : ActivatedRoute,
      	private commonService : CommonService) {
		this.resetToken = this.route.snapshot.queryParams.resetToken;
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
		this.commonService.checkClinicLogin();
	}
	ngOnInit() {
		this.resetPasswordForm = this.formBuilder.group({
        	password: ['', [Validators.required , Validators.pattern(Config.PASSWORD_REGX)]],
        	confirmPassword: ['', Validators.required]
        },{validator: this.passwordMatchValidator});
	}
	passwordMatchValidator(frm: FormGroup) {
      return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
    }
    
    attributes = {'password': '','confirmPassword': ''};
	validationMessages = {
  		'password': {
      		'required': Config.PASSWORD_REQUIRED_VALIDATION_MSG,
      		'pattern': Config.PASSWORD_NOT_VALID_VALIDATION_MSG
  		},
  		'confirmPassword': {
    		'required': Config.CONFIRM_PASSWORD_REQUIRED_VALIDATION_MSG,
    		'mismatch' : Config.PASSWORD_MISMATCH_VALIDATION_MSG
  		}
	};
	submit() {
  		this.loading = true;
     	this.showErrors = 1;
    	const form = this.resetPasswordForm;
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
    	if (this.resetPasswordForm.valid) {
    		this.showErrors = 0;
        	this.spinner.show();
    		this.adminclinicAuthService.resetPassword(this.resetPasswordForm.get('password').value,this.resetPasswordForm.get('confirmPassword').value,this.resetToken).then((result) => {
    			this.spinner.hide();
        		this.loading = false;
          		if(result['message'] && result['message'] != ''){
          			this.toastr.success(result['message']);	
          		}else{
          			this.toastr.success(Config.RESET_PASSWORD_SUCCESS_MSG);
          		}
          		this.router.navigate(['/clinic/login']);
  			},error => {
        		this.spinner.hide();
        		this.loading = false;
        		this.resetPasswordForm.reset();
				this.toastr.error(error);
     		}); 
    	}else{
        	this.loading = false;
      	}
	}
}