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
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.less']
})
export class UserUpdateComponent implements OnInit {
  
  userUpdateForm: FormGroup;
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
  user: any;
  backClicked() {
    this._location.back();
  }
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
    const userId = this.route.snapshot.paramMap.get('id');
    //getProfileById(clientId: number) {
      if (userId) {
        this.userService.getUserById(+userId).then((result) => {
          
          this.resData = result;
          this.user = this.resData.data;
					//console.log(this.user);
					var countryID = this.user.country_id;
					var stateID = this.user.state_id;
          //console.warn(countryID);
          this.userUpdateForm.patchValue({
            firstName: this.user.first_name,
            lastName: this.user.last_name,
            emailAddress: this.user.email,
            userName: this.user.username,
            phoneNumber: this.user.phone_number,
          //  dateOfBirth: this.formatDate(this.user.date_of_birth),
            role: this.user.role_id,
            address: this.user.address,
            country: this.user.country_id,
            state: this.user.state_id,
            city: this.user.city_id,
            zipCode: this.user.zip_code,
            emergencyContact: this.user.emergency_contact,
            maritalStatus: this.user.marital_status,
            //croppedImage: 'https://medirecx.s3.amazonaws.com/user-avtar/'+.this.user.image_url,
            userId: userId
          });
					this.getStatesByCountryId(countryID);
					this.getCitiesByStateId(stateID);
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
				
				
      } else {
        this.user = null;
      }
						
    //}
		
		
    
    //console.warn(clientId);
    
    this.userUpdateForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),      
      role: new FormControl('')
    });
    
		this.userUpdateForm = this.formBuilder.group({
      firstName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      lastName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      emailAddress: ['', [Validators.required , Validators.pattern(Config.EMAIL_PATTERN)]],
      phoneNumber: ['', Validators.pattern(Config.PHONE_PATTERN)],
      userName:  ['', [Validators.required , Validators.pattern(Config.UNAME_PATTERN)]],
      //password: ['', Validators.required],
      //dateOfBirth: ['', Validators.required],
      role: ['', Validators.required ],
      address: ['', ],
      country: [''],
      state: [''],
      city: [''],
      zipCode: [''],
      //emergencyContact: ['', [Validators.required , Validators.pattern(Config.PHONE_PATTERN)]],
      //maritalStatus: ['', Validators.required],
      userId: ['', Validators.required],
      bizLogo: ['',]
    });

  }
  
  //getProfileById(clientId: number) {
  //  if (clientId) {
  //    this.userService.getProfileById(clientId).then((result) => {
  //      this.resData = result;
  //      this.states = this.resData.data;
  //      this.cities = null;
  //    },error => {
  //      this.spinner.hide();
  //      this.loading = false;
  //      this.toastr.error(error);
  //    });      
  //  } else {
  //    this.states = null;
  //    this.cities = null;
  //  }
  //}
  
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
	
	getStatesByCountryId(countryId: number) {
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

	getCitiesByStateId(stateId: number) {
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
  
 // attributes = {'firstName': '','lastName': '','emailAddress': '','phoneNumber': '','username': '','dateOfBirth': '','role': '','address': '','zipCode': '','country': '','state': '','city': '','clientId':''};
 attributes = {'firstName': '','lastName': '','emailAddress': '','phoneNumber': '','username': '','role': '','address': '','clientId':''}; 
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
  		// },
  //    'emergencyContact': {
  //    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
  //        'pattern': Config.PHONE_NOT_VALID_MESSAGE
  //		},
  //		'maritalStatus': {
  //    		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  //		},
  		'clientId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		}
	};

	submit() { //console.log(this.userUpdateForm);
  		this.loading = true;
     	this.showErrors = 1;
    	const form = this.userUpdateForm;
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
      
    	if (this.userUpdateForm.valid) { 
    		this.showErrors = 0;
        this.spinner.show();
        
        const formData: FormData = new FormData();
        formData.append('firstName', this.userUpdateForm.get('firstName').value);
        formData.append('lastName', this.userUpdateForm.get('lastName').value);
        formData.append('emailAddress', this.userUpdateForm.get('emailAddress').value);
        formData.append('phoneNumber', this.userUpdateForm.get('phoneNumber').value);
        formData.append('userName', this.userUpdateForm.get('userName').value);
        //formData.append('password', this.userUpdateForm.get('password').value);
       // formData.append('dateOfBirth', this.userUpdateForm.get('dateOfBirth').value);
        formData.append('role', this.userUpdateForm.get('role').value);
        formData.append('address', this.userUpdateForm.get('address').value);        
        formData.append('country', this.userUpdateForm.get('country').value);
        formData.append('state', this.userUpdateForm.get('state').value);
        formData.append('city', this.userUpdateForm.get('city').value);
        formData.append('zipCode', this.userUpdateForm.get('zipCode').value);
        //formData.append('emergencyContact', this.userUpdateForm.get('emergencyContact').value);
        //formData.append('maritalStatus', this.userUpdateForm.get('maritalStatus').value);
        formData.append('userId', this.userUpdateForm.get('userId').value);
        
        if (this.croppedImage) {
            const fileToUpload: File = new File([this.dataURItoBlob(this.croppedImage)], 'filename.png');
            formData.append('bizLogo', fileToUpload, fileToUpload.name);
        } else {
            formData.append('bizLogo', '');
        }    
        
        this.userService.userUpdate(formData).then(result => { //console.log("Three");
            this.spinner.hide();
            this.loading = false;
            if(result['message'] && result['message'] != '') {
                this.toastr.success(result['message']);
                this.router.navigate(['/clinic/user']);
              //  this.userUpdateForm.reset();
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
