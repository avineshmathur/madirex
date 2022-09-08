import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAuthService, CommonService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./auth.component.css']
})

export class LoginComponent implements OnInit {
	loginForm: FormGroup;
  loading = false;
  showErrors: number = 0;
    
  constructor(private formBuilder: FormBuilder,
  	private adminAuthService: AdminAuthService,
  	private toastr: ToastrService,
  	private spinner: NgxSpinnerService,
  	private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkSuperAdminLogin();
  }

	ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email ] ],
      password: ['', Validators.required]
    });
  }

  attributes = {'email': '','password' : ''};
	validationMessages = {
  	'email': {
	    'required': Config.EMAIL_REQUIRED_VALIDATION_MSG,
	    'email': Config.EMAIL_FORMAT_VALIDATION_MSG
    },
    'password': {
	    'required': Config.PASSWORD_REQUIRED_VALIDATION_MSG
  	}
	};
  submit() {
    this.loading = true;
    this.showErrors = 1;
  	const form = this.loginForm;
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
    if (this.loginForm.valid) {
      this.showErrors = 0;
      this.spinner.show();
      this.adminAuthService.login(this.loginForm.get('email').value,this.loginForm.get('password').value).then((result) => {
        this.spinner.hide();
        this.loading = false;
        this.router.navigate(['/superadmin/client']);
			},error => {
        this.spinner.hide();
        this.loading = false;
        this.loginForm.reset();
        this.toastr.error(error);
      }); 
  	}else{
      this.loading = false;
    }
	}
}