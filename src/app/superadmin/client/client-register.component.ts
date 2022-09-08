import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAuthService, CommonService, ClientService } from '../../_services';
import { Config } from './../../constant';
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
  resData: any;
  countries: {};
  states: {};
  cities: {};	
	myDate: any = '';

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
    this.getCountry();
    let dte = new Date();
		this.myDate = this.formatDate(dte);
    this.clientRegisterForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    });
    
		this.clientRegisterForm = this.formBuilder.group({
      clinicName: ['', [Validators.required , Validators.pattern(Config.CLNAME_PATTERN)]],
      firstName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      lastName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      emailAddress: ['', [Validators.required , Validators.pattern(Config.EMAIL_PATTERN)]],
      userName:  ['', [Validators.required , Validators.pattern(Config.UNAME_PATTERN)]],
      phoneNumber: ['', [Validators.required , Validators.pattern(Config.PHONE_PATTERN)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      address: ['', Validators.required ],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', [Validators.required , Validators.pattern(Config.ZIP_PATTERN)]],
      keyword: ['', [Validators.required , Validators.pattern(Config.KEYWORD_PATTERN)]],
    });

  }
  
  getCountry() {
    this.clientService.getCountries().then((result) => {
        this.resData = result;
        this.countries = this.resData.data;
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
    });
  }
  
  onChangeCountry(countryId: number) {
    if (countryId) {
      this.clientService.getStatesById(countryId).then((result) => {
        this.resData = result;
        this.states = this.resData.data.stateList;
        this.cities = null;
      },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
      });      
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: number) {
    if (stateId) {
      this.clientService.getCitiesById(stateId).then((result) => {
        this.resData = result;
        this.cities = this.resData.data.cityList;
      },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
      });      
    } else {
      this.cities = null;
    }
  }
	
	private formatDate(date) { 
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  
  attributes = {'clinicName': '','firstName': '','lastName': '','emailAddress': '','userName': '','phoneNumber': '','startDate': '','endDate': '','address': '','country': '','state': '','city': '','zipCode': '','keyword': ''};
	validationMessages = {
      'clinicName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.CLNAME_NOT_VALID_MESSAGE
  		},
      'firstName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.NAME_NOT_VALID_MESSAGE
  		},
      'lastName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.NAME_NOT_VALID_MESSAGE
  		},
  		'emailAddress': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.EMAIL_NOT_VALID_MESSAGE
  		},
  		'userName': {
    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
      	'pattern': Config.UNAME_NOT_VALID_MESSAGE
  		},
      'phoneNumber': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.PHONE_NOT_VALID_MESSAGE
  		},
      'startDate': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'endDate': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
  		'address': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
  		'country': {
    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'state': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'city': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
  		'zipCode': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.ZIP_NOT_VALID_MESSAGE
  		},
  		'keyword': {
    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
      	'pattern': Config.KEYWORD_NOT_VALID_MESSAGE
  		}
	};

	submit() { //console.log(this.clientRegisterForm);
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
    		this.clientService.clientRegister(this.clientRegisterForm.get('clinicName').value,this.clientRegisterForm.get('firstName').value,this.clientRegisterForm.get('lastName').value,this.clientRegisterForm.get('emailAddress').value,this.clientRegisterForm.get('userName').value,this.clientRegisterForm.get('phoneNumber').value,this.clientRegisterForm.get('startDate').value,this.clientRegisterForm.get('endDate').value,this.clientRegisterForm.get('address').value,this.clientRegisterForm.get('country').value,this.clientRegisterForm.get('state').value,this.clientRegisterForm.get('city').value,this.clientRegisterForm.get('zipCode').value,this.clientRegisterForm.get('keyword').value).then((result) => {
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
        		//this.clientRegisterForm.reset();
				this.toastr.error(error);
     		}); 
    	}else{
        	this.loading = false;
      	}
	}
	
	onBlurEvent(event: any){
		console.log(event.target.value); 
	}
}
