import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./auth.component.css']
})

export class ForgotPasswordComponent implements OnInit {
	forgotPasswordForm: FormGroup;
    loading: boolean = false;
    showErrors: number = 0;
	constructor(private formBuilder: FormBuilder,
    	private adminclinicAuthService: AdminclinicAuthService,
    	private toastr: ToastrService,
    	private spinner: NgxSpinnerService,
    	private router : Router,
      private route: ActivatedRoute,
      	private commonService : CommonService) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
		this.commonService.checkClinicLogin();
	}
	ngOnInit() {
		this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [Validators.required,Validators.email ] ]
        });
	}
	attributes = {'email': ''};
  	validationMessages = {
    	'email': {
      		'required': Config.EMAIL_REQUIRED_VALIDATION_MSG,
      		'email': Config.EMAIL_FORMAT_VALIDATION_MSG
	  	}
  	};
  	submit() {
  		this.loading = true;
     	this.showErrors = 1;
    	const form = this.forgotPasswordForm;
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
    	if (this.forgotPasswordForm.valid) {
    		this.showErrors = 0;
        	this.spinner.show();
    		this.adminclinicAuthService.forgotPassword(this.forgotPasswordForm.get('email').value).then((result) => {
    			this.spinner.hide();
        		this.loading = false;
          		if(result['message'] && result['message'] != ''){
          			this.toastr.success(result['message']);	
          		}else{
          			this.toastr.success(Config.FORGOT_PASSWORD_SUCCESS_MSG);
          		}
          		this.router.navigate(['/clinic/login']);
  			},error => {
        		this.spinner.hide();
        		this.loading = false;
        		this.forgotPasswordForm.reset();
				this.toastr.error(error);
     		}); 
    	}else{
        	this.loading = false;
      	}
	}
}