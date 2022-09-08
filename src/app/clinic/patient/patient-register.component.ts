import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import {Location} from '@angular/common';
import { formatDate } from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',  
  styleUrls: ['./patient-register.component.less']
})
export class PatientRegisterComponent implements OnInit { 
  
  patientRegisterForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;
  doctors: {};
  medpros: {};
  myDate: any = '';

  backClicked() {
    if(confirm("Are you sure to Back ")) {
      this._location.back();
    }
    
  }
  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private patientService: PatientService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService,
    private _location: Location,
    private modalService: NgbModal
    ) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin();
    //this.patientRegisterForm = this.formBuilder.group({
    //  img: [null]
    //})
  }

  ngOnInit() {
    this.getToday();
    this.getDoctors();
    this.getMedpros();
    let dte = new Date();
		this.myDate = this.formatDate(dte);
    this.patientRegisterForm = this.formBuilder.group({
      firstName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      lastName: ['', [Validators.required , Validators.pattern(Config.NAME_PATTERN)]],
      dateOfBirth: [''],
      contctInfo: ['', [Validators.pattern(Config.PHONE_PATTERN)]],
      wcabNo: ['', Validators.required],
      claimNo: ['', Validators.required],
      appAttorney: [''],
      employer: [''],
      defAttorney: [''],
      doctorId: ['', Validators.required ],
      medproId: ['', Validators.required],
      dateOfInjury: [''],
      empCity: [''],
      empState: [''],
      empzipcode: [''],
      empStreetAdd: [''],
      panelNo: [''],
      employerName: [''],
      employerCity: [''],
      employerState: [''],
      employerStreetadd: [''],
      employerZipcode: [''],
      adminName: [''],
      adminCompany: [''],
      adminPhoneNo: [''],
      adminState: [''],
      adminStreetAdd: [''],
      adminCity: [''],
      adminZipcode: [''],
      appoinDate: [''],
      appoinCall: [''],
      appoinTime: [''],
      examiAdd: [''],
      examiCity: [''],
      examiZipdode: [''],
      appoinAddress: [''],
      appoinCity: [''],
      appoinZipcode: [''],
      qmeName: [''],
      qmeCity: [''],
      qmeState: [''],
      qmeAdd: [''],
      qmeZipcode: [''],
      dateSigned: [''],
      service1: [''],
      service1Person: [''],
      service1Add: [''],
      service1City: [''],
      service1State: [''],
      service1Zipcode: [''],
      service2: [''],
      service2Person: [''],
      service2Add: [''],
      service2City: [''],
      service2State: [''],
      service2Zipcode: [''],
      service3: [''],
      service3Person: [''],
      service3Add: [''],
      service3City: [''],
      service3State: [''],
      service3Zipcode: [''],
      service4: [''],
      service4Person: [''],
      service4Add: [''],
      service4City: [''],
      service4State: [''],
      service4Zipcode: [''],
    });
  }
    
  getToday() {
  
      return new Date().toISOString().split('T')[0]
  } 
    
  getDoctors() {
    this.patientService.getDoctors().then((result) => {
        this.resData = result;
        this.doctors = this.resData.data;
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
    });
  }
  
  getMedpros() {
    this.patientService.getMedpros().then((result) => {
        this.resData = result;
        this.medpros = this.resData.data;
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
    });
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
  
  //attributes = {'firstName': '','lastName': '','dateOfBirth': '','contctInfo': '','wcabNo': '','claimNo': '','appAttorney': '','employer': '','defAttorney': '','doctorId': '','medproId': ''};
  attributes = {'firstName': '','lastName': '','wcabNo': '','claimNo': '','doctorId': '','medproId': ''};

  validationMessages = {
      'firstName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.NAME_NOT_VALID_MESSAGE
  		},
      'lastName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.NAME_NOT_VALID_MESSAGE
  		},
      // 'dateOfBirth': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
  		// 'contctInfo': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
      //     'pattern': Config.PHONE_NOT_VALID_MESSAGE
  		// },
  		'wcabNo': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'claimNo': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      // 'appAttorney': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
      // 'employer': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
      // 'defAttorney': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// },
      'doctorId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'medproId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		}
	};

	submit() {
  		this.loading = true;
     	this.showErrors = 1;
    	const form = this.patientRegisterForm;
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
    
    	if (this.patientRegisterForm.valid) {
    		this.showErrors = 0;
        this.spinner.show();

        //formData.append("img", this.imageform.get('img').value);
    	//	this.patientService.patientRegister(this.patientRegisterForm.get('firstName').value,this.patientRegisterForm.get('lastName').value,this.patientRegisterForm.get('dateOfBirth').value,this.patientRegisterForm.get('contctInfo').value,this.patientRegisterForm.get('wcabNo').value,this.patientRegisterForm.get('claimNo').value,this.patientRegisterForm.get('appAttorney').value,this.patientRegisterForm.get('employer').value,this.patientRegisterForm.get('defAttorney').value,this.patientRegisterForm.get('doctorId').value,this.patientRegisterForm.get('medproId').value,'').then((result) => {
        
       
        const formData: FormData = new FormData();      
      
        formData.append('first_name', this.patientRegisterForm.get('firstName').value);
        formData.append('last_name', this.patientRegisterForm.get('lastName').value);
        formData.append('date_of_birth', this.patientRegisterForm.get('dateOfBirth').value);
        formData.append('contact_info', this.patientRegisterForm.get('contctInfo').value);
        formData.append('case_no', this.patientRegisterForm.get('wcabNo').value);
        formData.append('claim_no', this.patientRegisterForm.get('claimNo').value);
        // formData.append('appAttorney', this.patientRegisterForm.get('appAttorney').value);
        // formData.append('employer', this.patientRegisterForm.get('employer').value);
        // formData.append('defAttorney', this.patientRegisterForm.get('defAttorney').value);
        formData.append('doctor_id', this.patientRegisterForm.get('doctorId').value);
        formData.append('medpro_id', this.patientRegisterForm.get('medproId').value);    
       // formData.append('supplementaryWcabno', this.patientRegisterForm.get('supplementaryWcabno').value);
        formData.append('dateOfInjury', this.patientRegisterForm.get('dateOfInjury').value);
        formData.append('empCity', this.patientRegisterForm.get('empCity').value);
        formData.append('empState', this.patientRegisterForm.get('empState').value);
        formData.append('empzipcode', this.patientRegisterForm.get('empzipcode').value);        
        formData.append('empStreetAdd', this.patientRegisterForm.get('empStreetAdd').value);
        // formData.append('panelNo', this.patientRegisterForm.get('panelNo').value);
        // formData.append('claimNo', this.patientRegisterForm.get('claimNo').value);
        formData.append('employerName', this.patientRegisterForm.get('employerName').value);
        formData.append('employerCity', this.patientRegisterForm.get('employerCity').value);        
        formData.append('employerState', this.patientRegisterForm.get('employerState').value);
        formData.append('employerStreetadd', this.patientRegisterForm.get('employerStreetadd').value);
        formData.append('employerZipcode', this.patientRegisterForm.get('employerZipcode').value);
        formData.append('adminName', this.patientRegisterForm.get('adminName').value);
        formData.append('adminCompany', this.patientRegisterForm.get('adminCompany').value);
        formData.append('adminPhoneNo', this.patientRegisterForm.get('adminPhoneNo').value);
        formData.append('adminState', this.patientRegisterForm.get('adminState').value);
        formData.append('adminStreetAdd', this.patientRegisterForm.get('adminStreetAdd').value);
        formData.append('adminCity', this.patientRegisterForm.get('adminCity').value);
        formData.append('adminZipcode', this.patientRegisterForm.get('adminZipcode').value);
        formData.append('appoinDate', this.patientRegisterForm.get('appoinDate').value);
        formData.append('appoinCall', this.patientRegisterForm.get('appoinCall').value);
        formData.append('appoinTime', this.patientRegisterForm.get('appoinTime').value);
        formData.append('examiAdd', this.patientRegisterForm.get('examiAdd').value);
        formData.append('examiCity', this.patientRegisterForm.get('examiCity').value);
        formData.append('examiZipdode', this.patientRegisterForm.get('examiZipdode').value);        
        formData.append('appoinAddress', this.patientRegisterForm.get('appoinAddress').value);
        formData.append('appoinCity', this.patientRegisterForm.get('appoinCity').value);
        formData.append('appoinZipcode', this.patientRegisterForm.get('appoinZipcode').value);
        formData.append('qmeName', this.patientRegisterForm.get('qmeName').value);
        formData.append('qmeCity', this.patientRegisterForm.get('qmeCity').value);
        formData.append('qmeState', this.patientRegisterForm.get('qmeState').value);
        formData.append('qmeAdd', this.patientRegisterForm.get('qmeAdd').value);
        formData.append('qmeZipcode', this.patientRegisterForm.get('qmeZipcode').value);
        formData.append('dateSigned', this.patientRegisterForm.get('dateSigned').value);
        formData.append('service1', this.patientRegisterForm.get('service1').value);
        formData.append('service1Person', this.patientRegisterForm.get('service1Person').value);
        formData.append('service1Add', this.patientRegisterForm.get('service1Add').value);
        formData.append('service1City', this.patientRegisterForm.get('service1City').value);
        formData.append('service1State', this.patientRegisterForm.get('service1State').value);
        formData.append('service1Zipcode', this.patientRegisterForm.get('service1Zipcode').value);
        formData.append('service2', this.patientRegisterForm.get('service2').value);
        formData.append('service2Person', this.patientRegisterForm.get('service2Person').value);
        formData.append('service2Add', this.patientRegisterForm.get('service2Add').value);
        formData.append('service2City', this.patientRegisterForm.get('service2City').value);
        formData.append('service2State', this.patientRegisterForm.get('service2State').value);
        formData.append('service2Zipcode', this.patientRegisterForm.get('service2Zipcode').value);
        formData.append('service3', this.patientRegisterForm.get('service3').value);
        formData.append('service3Person', this.patientRegisterForm.get('service3Person').value);
        formData.append('service3Add', this.patientRegisterForm.get('service3Add').value);
        formData.append('service3City', this.patientRegisterForm.get('service3City').value);
        formData.append('service3State', this.patientRegisterForm.get('service3State').value);
        formData.append('service3Zipcode', this.patientRegisterForm.get('service3Zipcode').value);
        formData.append('service4', this.patientRegisterForm.get('service4').value);
        formData.append('service4Person', this.patientRegisterForm.get('service4Person').value);
        formData.append('service4Add', this.patientRegisterForm.get('service4Add').value);
        formData.append('service4City', this.patientRegisterForm.get('service4City').value);
        formData.append('service4State', this.patientRegisterForm.get('service4State').value);
        formData.append('service4Zipcode', this.patientRegisterForm.get('service4Zipcode').value);const form = this.patientRegisterForm;
       this.patientService.patientRegisternew(formData).then((result) => {
      this.spinner.hide();
        		this.loading = false;
          		if(result['message'] && result['message'] != ''){
          			this.toastr.success(result['message']);	
          		}else{
          			this.toastr.success(Config.STATUS_UPDATED_SUCCESSFULLY);
              }
              this.router.navigate(['clinic/patient']);
             
          		this.patientRegisterForm.reset();
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