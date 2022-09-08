import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, BusinessService, UserService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-business-setup',
  templateUrl: './business-setup.component.html',
  styleUrls: ['./business-setup.component.less']
})
export class BusinessSetupComponent implements OnInit {
  businessSetupForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;
  countries: {};
  states: {};
  cities: {};
  clinicLogo: any = '';
  fileSizeValidation = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  business: any;
  
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
    private businessService: BusinessService,   
    private userService: UserService,   
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService) { 
      this.commonService.setPageTitle(this.route.snapshot.data['title']);
      this.commonService.checkClinicLogin();
    }

  ngOnInit() {
    this.getCountry();
    const businessId = this.route.snapshot.paramMap.get('id');
      if (businessId) {
        this.businessService.getBusinessById(+businessId).then((result) => {          
          this.resData = result;
          this.business = this.resData.data;
          var countryID = this.business.country_id;
					var stateID = this.business.state_id;
          this.businessSetupForm.patchValue({
            clinicName: this.business.clinic_name,
            firstName: this.business.first_name,
            lastName: this.business.last_name,
            emailAddress: this.business.email,
            phoneNumber: this.business.phone_number,
            address: this.business.address,
            country: this.business.country_id,
            state: this.business.state_id,
            city: this.business.city_id,
            zipCode: this.business.zip_code,
            businessId: businessId
          });
          this.getStatesByCountryId(countryID);
					this.getCitiesByStateId(stateID);
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });      
      } else {
        this.business = null;
      }
    
    this.businessSetupForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    });
    
		this.businessSetupForm = this.formBuilder.group({
      clinicName: ['', Validators.required],
      firstName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      lastName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      emailAddress: ['', [Validators.required , Validators.pattern(Config.EMAIL_PATTERN)]],
      phoneNumber: ['', [Validators.required , Validators.pattern(Config.PHONE_PATTERN)]],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', [Validators.required , Validators.pattern(Config.ZIP_PATTERN)]],
      businessId: ['', Validators.required],
      clinicLogo: ['',]
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
  
  attributes = {'clinicName': '','firstName': '','lastName':'','emailAddress': '','phoneNumber':'','address': '','country': '','state': '','city': '','zipCode':'','businessId':''};
	validationMessages = {
      'clinicName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
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
      'phoneNumber': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.PHONE_NOT_VALID_MESSAGE
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
      'businessId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		}
	};

	submit() {
    this.loading = true;
    this.showErrors = 1;
    const form = this.businessSetupForm;
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
    if (this.businessSetupForm.valid) {
      this.showErrors = 0;
      this.spinner.show();
      
      const formData: FormData = new FormData();      
      formData.append('clinicName', this.businessSetupForm.get('clinicName').value);
      formData.append('firstName', this.businessSetupForm.get('firstName').value);
      formData.append('lastName', this.businessSetupForm.get('lastName').value);
      formData.append('emailAddress', this.businessSetupForm.get('emailAddress').value);
      formData.append('phoneNumber', this.businessSetupForm.get('phoneNumber').value);
      formData.append('address', this.businessSetupForm.get('address').value);        
      formData.append('country', this.businessSetupForm.get('country').value);
      formData.append('state', this.businessSetupForm.get('state').value);
      formData.append('city', this.businessSetupForm.get('city').value);
      formData.append('zipCode', this.businessSetupForm.get('zipCode').value);
      formData.append('businessId', this.businessSetupForm.get('businessId').value);
      
      if (this.croppedImage) {
          const fileToUpload: File = new File([this.dataURItoBlob(this.croppedImage)], 'filename.png');
          formData.append('clinicLogo', fileToUpload, fileToUpload.name);
      } else {
          formData.append('clinicLogo', '');
      }    
      this.businessService.businessUpdate(formData).then(result => {
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