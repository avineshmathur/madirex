import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAuthService, CommonService, ClientService } from '../../_services';
import { Config } from '../../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.less']
})
export class ClientRegisterComponent implements OnInit {
clientRegisterForm: FormGroup;
    loading: boolean = false;
    showErrors: number = 0;

	constructor(private formBuilder: FormBuilder,
    	private adminAuthService: AdminAuthService,
      private clientService: ClientService,      
    	private toastr: ToastrService,
    	private spinner: NgxSpinnerService,
    	private router : Router,
    	private route : ActivatedRoute,
    	private commonService : CommonService) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkSuperAdminLogin();
	}

	ngOnInit() {
//		this.clientRegisterForm = this.formBuilder.group({
//        	oldPassword: ['', Validators.required],
//    		newPassword: ['', [Validators.required , Validators.pattern(Config.PASSWORD_REGX)]],
//        	confirmPassword: ['', Validators.required]
//        },{validator: this.passwordMatchValidator});
  	}

  //	passwordMatchValidator(frm: FormGroup) {
  //    return frm.controls['newPassword'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
  //  }

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
    	const form = this.clientRegisterForm;
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
    	if (this.clientRegisterForm.valid) {
    		this.showErrors = 0;
        	this.spinner.show();
    		this.clientService.clientRegister(this.clientRegisterForm.get('oldPassword').value,this.clientRegisterForm.get('newPassword').value,this.clientRegisterForm.get('confirmPassword').value).then((result) => {
    			this.spinner.hide();
        		this.loading = false;
          		if(result['message'] && result['message'] != ''){
          			this.toastr.success(result['message']);	
          		}else{
          			this.toastr.success(Config.RESET_PASSWORD_SUCCESS_MSG);
          		}
          		this.clientRegisterForm.reset();
          	},error => {
        		this.spinner.hide();
        		this.loading = false;
        		this.clientRegisterForm.reset();
				this.toastr.error(error);
     		}); 
    	}else{
        	this.loading = false;
      	}
	}
}
