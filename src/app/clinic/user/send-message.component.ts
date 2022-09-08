import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, UserService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Location} from '@angular/common';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.less']
})

export class SendMessageComponent implements OnInit {
  sendMessageForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;
  user: any;  
  name:any;

  loggedInClinicDetails:any;
  claimId:any;
  WcabNo:any;
  calimsId:any;
  roleId:any;
  senderName:any;
  reciverName:any;
  backClicked() {
    this._location.back();
  }
  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private userService: UserService,
    private patientService: PatientService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService,
    private _location: Location
    ) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin(),this.loggedInClinicDetails = this.commonService.getLoggedInClinicData();
      
  }
  
  ngOnInit(): void {
    console.log(this.loggedInClinicDetails);
    this.senderName=this.loggedInClinicDetails.first_name + ' '+ this.loggedInClinicDetails.last_name;
    const userId = this.route.snapshot.paramMap.get('id');
     this.roleId = this.route.snapshot.paramMap.get('type');
   
    //console.log(roleId);
    //getProfileById(clientId: number) {
    if (userId && this.roleId =='user') {     
      
      this.userService.getUserById(+userId).then((result) => {
        
        this.resData = result;
        this.user = this.resData.data;
        this.reciverName = this.user.first_name + ' ' + this.user.last_name;
        this.sendMessageForm.patchValue({
          useremail: this.user.email,
          fromuser: this.loggedInClinicDetails.id,
          touser: this.user.id
        });
      },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
      });
    } else if (userId && this.roleId =='claim'){
      this.patientService.getClaimById(+userId).then((result) => {        
        this.resData = result;
        this.user = this.resData.data[0];
        
       
        this. claimId = this.user.claim_no;
        this.WcabNo= this.user.case_no;
        this.name = this.user.first_name + ' ' + this.user.last_name;
      
        this.calimsId=this.user.id;
        this.userService.getUserById(+this.user.assigned_medpro_id).then((result) => {
          this.resData = result;
          this.user = this.resData.data;
          this.reciverName = this.user.first_name + ' ' + this.user.last_name;
        
          this.sendMessageForm.patchValue({
            useremail: this.user.email,
            fromuser: this.loggedInClinicDetails.id,
            touser: this.user.id
          });
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
        //console.log(this.user.status);
        
      },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
      });
    } else if (userId && this.roleId =='medpro'){
      this.patientService.getClaimById(+userId).then((result) => {        
        this.resData = result;
        this.user = this.resData.data[0];
        
        console.log(this.user);
        this. claimId = this.user.claim_no;
        this.WcabNo= this.user.case_no;
        this.name = this.user.first_name + ' ' + this.user.last_name;
       
        this.calimsId=this.user.id;
        this.userService.getUserById(+this.user.assigned_medpro_id).then((result) => {
          this.resData = result;
          this.user = this.resData.data;
          this.reciverName = this.user.first_name + ' ' + this.user.last_name;
          this.sendMessageForm.patchValue({
            useremail: this.user.email,
            fromuser: this.loggedInClinicDetails.id,
            touser: this.user.id
          });
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
        //console.log(this.user.status);
        
      },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
      });
    } 
    
    else {
      this.user = null;
    }  
    
    this.sendMessageForm = this.formBuilder.group({
      subject:  ['', Validators.required],
      message: ['', Validators.required],      
      useremail: ['', Validators.required],
      fromuser: ['', Validators.required],
      touser: ['', Validators.required]
    });

   
  }
  
  attributes = {'subject': '','message': '','useremail': '','fromuser': '','touser': ''};
	validationMessages = {
      'subject': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'message': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'useremail': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'fromuser': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'touser': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		}
	};
  
  submit() {
    //console.log(this.attributes);
  		this.loading = true;
     	this.showErrors = 1;
    	const form = this.sendMessageForm;
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
    	if (this.sendMessageForm.valid) {
    		this.showErrors = 0;
        this.spinner.show();
    		this.userService.sendMessage(this.sendMessageForm.get('subject').value,this.sendMessageForm.get('message').value,this.sendMessageForm.get('useremail').value,this.sendMessageForm.get('fromuser').value,this.sendMessageForm.get('touser').value,this.claimId,this.WcabNo).then((result) => {
    			this.spinner.hide();
        		this.loading = false;
          		if(result['message'] && result['message'] != ''){
          			this.toastr.success(result['message']);	
          		}else{
          			this.toastr.success(Config.MESSAGE_SEND_SUCCESSFULLY);
              }
              this.router.navigate(['/clinic/messages']);
          		//this.sendMessageForm.reset();
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
