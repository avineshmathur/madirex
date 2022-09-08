import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, RoleService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.less']
})
export class RoleUpdateComponent implements OnInit {
  roleUpdateForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;
  role: any;

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

  ngOnInit() {
    const roleId = this.route.snapshot.paramMap.get('id');
    //console.log(roleId);
      if (roleId) {
        this.roleService.getRoleById(+roleId).then((result) => {          
          this.resData = result;
          this.role = this.resData.data;
          //console.warn(this.role);
          this.roleUpdateForm.patchValue({
            roleTitle: this.role.title,
            roleDescription: this.role.description,
            roleId: roleId
          });
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });      
      } else {
        this.role = null;
      }
    
		this.roleUpdateForm = this.formBuilder.group({
      roleTitle: ['', Validators.required],
      roleDescription: ['', Validators.required],
      roleId: ['', Validators.required]
    });
  }
  
  attributes = {'roleTitle': '','roleDescription': '','roleId':''};
	validationMessages = {
      'roleTitle': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'roleDescription': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'roleId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		}
	};

	submit() {
    this.loading = true;
    this.showErrors = 1;
    const form = this.roleUpdateForm;
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
    if (this.roleUpdateForm.valid) {
      this.showErrors = 0;
        this.spinner.show();
      this.roleService.roleUpdate(this.roleUpdateForm.get('roleTitle').value,this.roleUpdateForm.get('roleDescription').value,this.roleUpdateForm.get('roleId').value).then((result) => {
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
