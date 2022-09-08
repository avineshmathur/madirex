import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, RoleService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-role-register',
  templateUrl: './role-register.component.html',
  styleUrls: ['./role-register.component.less']
})
export class RoleRegisterComponent implements OnInit {
  roleRegisterForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;

  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private roleService: RoleService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin();
  }

  ngOnInit(): void {
    
    this.roleRegisterForm = this.formBuilder.group({
      roleTitle:  ['', Validators.required],
      roleDescription: ['', Validators.required]
    });
  }
  
  attributes = {'title': '','description': ''};
	validationMessages = {
      'roleTitle': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'roleDescription': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		}
	};
  
  submit() {
  		this.loading = true;
     	this.showErrors = 1;
    	const form = this.roleRegisterForm;
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
    	if (this.roleRegisterForm.valid) {
    		this.showErrors = 0;
        this.spinner.show();
    		this.roleService.roleRegister(this.roleRegisterForm.get('roleTitle').value,this.roleRegisterForm.get('roleDescription').value).then((result) => {
    			this.spinner.hide();
        		this.loading = false;
          		if(result['message'] && result['message'] != ''){
          			this.toastr.success(result['message']);	
          		}else{
          			this.toastr.success(Config.STATUS_UPDATED_SUCCESSFULLY);
          		}
          		this.roleRegisterForm.reset();
          	},error => {
        		this.spinner.hide();
        		this.loading = false;
				this.toastr.error(error);
     		}); 
    	} else {
        this.loading = false;
      }
	}

}
