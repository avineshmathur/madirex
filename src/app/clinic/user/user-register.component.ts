import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, UserService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.less']
})
export class UserRegisterComponent implements OnInit {

  userRegisterForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;
  countries: {};
  states: {};
  cities: {};
  roles: {};
  bizLogo: any = '';
  fileSizeValidation = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  myDate: any = '';
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
      //this.croppedImage = event.base64;
      let files: FileList = event.target.files;
      var FileSize = files[0].size / 1024 / 1024; // in MB
      if (FileSize > 5) {
          this.fileSizeValidation = "File size can not exceed 5 mb";
          this.imageChangedEvent = '';
      }else{
          this.fileSizeValidation = "";
      }
  }
  
  imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
  }

  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  backClicked() {
    if(confirm("Are you sure to Back ")) {
      this._location.back();
    }
    
  }
  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private userService: UserService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService,
    private _location: Location
    ) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin();
  }

  ngOnInit() {
    this.getCountry();
    this.getRoles();
    this.getToday();
    let dte = new Date();
		this.myDate = this.formatDate(dte);
    //console.log(this.myDate);
    this.userRegisterForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      role: new FormControl('')
    });
    
    this.userRegisterForm = this.formBuilder.group({
      firstName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      lastName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      emailAddress: ['', [Validators.required , Validators.pattern(Config.EMAIL_PATTERN)]],
      phoneNumber: ['', Validators.pattern(Config.PHONE_PATTERN)],
      username:  ['', [Validators.required , Validators.pattern(Config.UNAME_PATTERN)]],
      //password: ['', Validators.required],
     // dateOfBirth: ['', Validators.required],
      role: ['', Validators.required ],
      address: ['',],
      country: [''],
      state: [''],
      city: [''],
      zipCode: [''],
      //emergencyContact: ['', [Validators.required , Validators.pattern(Config.PHONE_PATTERN)]],
      //maritalStatus: ['', Validators.required],
      bizLogo: ['',]
    });
  }
  
  getToday() {
      return new Date().toISOString().split('T')[0]
  }
  
  getRoles() {
    this.userService.getRoles().then((result) => {
        this.resData = result;
        this.roles = this.resData.data;
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
    });
  }
  
  getCountry() {
    this.userService.getCountries().then((result) => {
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
      this.userService.getStatesById(countryId).then((result) => {
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
      this.userService.getCitiesById(stateId).then((result) => {
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
  attributes = {'firstName': '','lastName': '','emailAddress': '','phoneNumber': '','username': '','role': ''};
  //attributes = {'firstName': '','lastName': '','emailAddress': '','phoneNumber': '','username': '','role': '','address': '','zipCode': '','country': '','state': '','city': ''};
	validationMessages = {
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
      'phoneNumber': {
      		//'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.PHONE_NOT_VALID_MESSAGE
  		},
      'username': {
    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
      	'pattern': Config.UNAME_NOT_VALID_MESSAGE
  		},
  //    'password': {
  //  		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  //		},
      // 'dateOfBirth': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
      'role': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
  //		'address': {
  //    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  //		},
  		// 'country': {
    	// 	'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
      // 'state': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
      // 'city': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
  		// 'zipCode': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
      //     'pattern': Config.ZIP_NOT_VALID_MESSAGE
  		// }
  //    'emergencyContact': {
  //    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
  //        'pattern': Config.PHONE_NOT_VALID_MESSAGE
  //		},
  //		'maritalStatus': {
  //    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  //		}
	};

	submit() {
  		this.loading = true;
     	this.showErrors = 1;
    	const form = this.userRegisterForm;
      console.log(form);
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
      
    	if (this.userRegisterForm.valid) { 
    		this.showErrors = 0;
        this.spinner.show();
        
        const formData: FormData = new FormData();
        formData.append('firstName', this.userRegisterForm.get('firstName').value);
        formData.append('lastName', this.userRegisterForm.get('lastName').value);
        formData.append('emailAddress', this.userRegisterForm.get('emailAddress').value);
        formData.append('phoneNumber', this.userRegisterForm.get('phoneNumber').value);
        formData.append('username', this.userRegisterForm.get('username').value);
        //formData.append('password', this.userRegisterForm.get('password').value);
       // formData.append('dateOfBirth', this.userRegisterForm.get('dateOfBirth').value);
        formData.append('role', this.userRegisterForm.get('role').value);
        formData.append('address', this.userRegisterForm.get('address').value);        
        formData.append('country', this.userRegisterForm.get('country').value);
        formData.append('state', this.userRegisterForm.get('state').value);
        formData.append('city', this.userRegisterForm.get('city').value);
        formData.append('zipCode', this.userRegisterForm.get('zipCode').value);
        //formData.append('emergencyContact', this.userRegisterForm.get('emergencyContact').value);
        //formData.append('maritalStatus', this.userRegisterForm.get('maritalStatus').value);
        
        if (this.croppedImage) {
            const fileToUpload: File = new File([this.dataURItoBlob(this.croppedImage)], 'filename.png');
            formData.append('bizLogo', fileToUpload, fileToUpload.name);
        } else {
            formData.append('bizLogo', '');
        }    
        
        this.userService.userRegister(formData).then(result => { //console.log("Three");
            this.spinner.hide();
            this.loading = false;
            if(result['message'] && result['message'] != '') {
                this.toastr.success(result['message']);
                this.router.navigate(['/clinic/user']);
               // this.userRegisterForm.reset();
            } else {
                this.toastr.success(Config.STATUS_UPDATED_SUCCESSFULLY);
            }
        }, error => { 
            this.spinner.hide();
            if (error) {
                this.toastr.error(error);
            }
        });
    	} else {
        this.loading = false;
      }
	}
  
  dataURItoBlob(dataURI): Blob {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }

}