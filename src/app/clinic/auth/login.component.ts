import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService } from '../../_services';
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
	clinicDefaultLogoImgPath: string = Config.CLINIC_LOGO_DEFAULT_IMG_PATH;
	loginForm: FormGroup;
  loading = false;
  showErrors: number = 0;
	clinicName: any = '';
    
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
		var clinicNameStr = Config.SUBDOMAIN;
		var clinicNameSplit = clinicNameStr.split("medirecx_", 2);
		this.clinicName = clinicNameSplit[1];
		
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  attributes = {'username': '','password' : ''};
	validationMessages = {
  	'username': {
	    'required': Config.USERNAME_REQUIRED_VALIDATION_MSG
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
      this.adminclinicAuthService.login(this.loginForm.get('username').value,this.loginForm.get('password').value).then((result) => {
				//console.log(result['data']['role_id']);
        this.spinner.hide();
        this.loading = false;
 				if(result['data']['role_id'] == '1'){
					this.router.navigate(['/clinic/patient']);
				} else if(result['data']['role_id'] == '4') {
					this.router.navigate(['/clinic/patient']);
				} else if(result['data']['role_id'] == '5') {
					this.router.navigate(['/clinic/patient']);
				} else {
					this.router.navigate(['/clinic/dashboard']);
				}
        
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