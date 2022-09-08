import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, UserService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-clinic-message',
  templateUrl: './clinic-message.component.html',
  styleUrls: ['./clinic-message.component.less']
})
export class ClinicMessageComponent implements OnInit {
  sendMessageForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;
  user: any;  
  users: any;
  loggedInClinicDetails:any;
  senderName:any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService
  ) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin(),this.loggedInClinicDetails = this.commonService.getLoggedInClinicData();
  }

  ngOnInit(): void {
    console.log(this.loggedInClinicDetails);
    this.senderName=this.loggedInClinicDetails.first_name + ' '+ this.loggedInClinicDetails.last_name;
    this.sendMessageForm = this.formBuilder.group({
      subject:  ['', Validators.required],
      message: ['', Validators.required],    
       useremail: [''],
      fromuser: [''],
      touser: [''],  
      // useremail: ['', Validators.required],
      // fromuser: ['', Validators.required],
      // touser: ['', Validators.required],
      user:['',Validators.required]
    });
    this.getUsers();
   
  }
  attributes = {'subject': '','message': '','user': ''};
  //attributes = {'subject': '','message': '','useremail': '','fromuser': '','touser': ''};
	validationMessages = {
      'subject': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'message': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      // 'useremail': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
      // 'fromuser': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
      // 'touser': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
      // },
      'user': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
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
    		this.userService.sendMessage(this.sendMessageForm.get('subject').value,this.sendMessageForm.get('message').value,this.sendMessageForm.get('useremail').value,this.sendMessageForm.get('fromuser').value,this.sendMessageForm.get('touser').value).then((result) => {
    			this.spinner.hide();
        		this.loading = false;
          		if(result['message'] && result['message'] != ''){
                this.toastr.success(result['message']);	
                this.router.navigate(['/clinic/messages']);
          		}else{
          			this.toastr.success(Config.MESSAGE_SEND_SUCCESSFULLY);
          		}
          		this.sendMessageForm.reset();
          	},error => {
        		this.spinner.hide();
        		this.loading = false;
				this.toastr.error(error);
     		}); 
    	} else {
        this.loading = false;
      }
	}
  getUsers() {
    this.userService.getUsers().then((result) => {
        this.resData = result;
        this.users = this.resData.data;
        console.log(this.users);
        },error => {
        // this.spinner.hide();
        // this.loading = false;
        this.toastr.error(error);
    });
  }
      
  onChangeUser(userId: number) {
    
    if (userId) {     
      
      this.userService.getUserById(+userId).then((result) => {
        
        this.resData = result;
        this.user = this.resData.data;
       
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
    } 
    else {
      this.user = null;
    }  
  }
}
