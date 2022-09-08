import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
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
import html2canvas from 'html2canvas';
//declare var jsPDF: any;
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-qmr',
  templateUrl: './qmr.component.html',
  styleUrls: ['./qmr.component.less']
})
export class QmrComponent implements OnInit {
  patientRegisterForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;
  qmr: any;
  claimId:any;
  doctors: {};
  medpros: {};
  myDate: any = '';
  @ViewChild('pdfTable') pdfTable: ElementRef;
  backClicked() {
    if(confirm("Are you sure to Back ")) {
      this._location.back();
    }
    
  }
  constructor(
    private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private patientService: PatientService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService,
    private _location: Location,
   // private  jspdf:jspdf,
    private modalService: NgbModal
  ) {
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin();
   }

   ngOnInit() {
    this.getToday();
    let dte = new Date();
    this.myDate = this.formatDate(dte);
     this.claimId = this.route.snapshot.paramMap.get('id');
    //getProfileById(clientId: number) {
      if (this.claimId) {
        this.patientService.getQmrByClaimId(+this.claimId).then((result) => {
          
          this.resData = result;
          this.qmr = this.resData.data[0];
          console.log(this.qmr);
          if(this.qmr) {
          }
          else{

          }
			
          this.patientRegisterForm.patchValue({
            empName: this.qmr.emp_name,
            empPhone: this.qmr.emp_phone,
            empCity: this.qmr.emp_city,
            empState: this.qmr.emp_state,
            empzipcode: this.qmr.emp_zipcode,
            empStreetAdd: this.qmr.emp_streetadd,
            dateOfInjury: this.formatDate(this.qmr.date_of_injury),
            panelNo: this.qmr.panel_no,
            claimNo: this.qmr.claim_no,
            employerName: this.qmr.employer_name,
            employerCity: this.qmr.employer_city,
            employerState: this.qmr.employer_state,
            employerStreetadd: this.qmr.employer_streetadd,
            employerZipcode: this.qmr.employer_zipcode,
            adminName: this.qmr.admin_name,
            adminCompany: this.qmr.admin_company,
            adminPhoneNo: this.qmr.admin_phone_no,
            adminCity: this.qmr.admin_city,
            adminState: this.qmr.admin_state,
            adminZipcode: this.qmr.admin_zipcode,
            adminStreetAdd: this.qmr.admin_streetadd,
            appoinDate: this.formatDate(this.qmr.appoin_date),
            appoinCall: this.formatDate(this.qmr.appoin_call),
            appoinTime: this.qmr.appoin_time,
            examiAdd: this.qmr.exami_add,
            examiCity: this.qmr.exami_city,
            examiState: this.qmr.exami_state,
            examiZipdode: this.qmr.exami_zipdode,
            appoinAddress: this.qmr.appoin_address,
            appoinCity: this.qmr.appoin_city,
            appoinZipcode: this.qmr.appoin_zipcode,
            certifiedInterpre: this.qmr.certified_interpre,
            indicateLanguage: this.qmr.indicate_language,
            qmeName: this.qmr.qme_name,
            qmeAdd: this.qmr.qme_add,
            qmeCity: this.qmr.qme_city,
            qmeState: this.qmr.qme_state,
            qmeZipcode: this.qmr.qme_zipcode,
            dateSigned: this.formatDate(this.qmr.date_signed),
            service1: this.qmr.service1,
            service1Add: this.qmr.service1_add,
            service1City: this.qmr.service1_city,
            service1State: this.qmr.service1_state,
            service1Zipcode: this.qmr.service1_zipcode,
            service1Person: this.qmr.service1_person,
            service2: this.qmr.service2,
            service2Add: this.qmr.service2_add,
            service2City: this.qmr.service2_city,
            service2State: this.qmr.service2_state,
            service2Zipcode: this.qmr.service2_zipcode,
            service2Person: this.qmr.service2_person,
            service3: this.qmr.service3,
            service3Add: this.qmr.service3_add,
            service3City: this.qmr.service3_city,
            service3State: this.qmr.service3_state,
            service3Zipcode: this.qmr.service3_zipcode,
            service3Person: this.qmr.service3_person,
            service4: this.qmr.service4,
            service4Add: this.qmr.service4_add,
            service4City: this.qmr.service4_city,
            service4State: this.qmr.service4_state,
            service4Zipcode: this.qmr.service4_zipcode,
            service4Person: this.qmr.service4_person,
          
          });
			
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
				
      } else {
        this.qmr = null;
      }

    this.patientRegisterForm = this.formBuilder.group({
      empName: ['', [Validators.required ]],
      empPhone: ['', [Validators.required ]],
      dateOfInjury: ['', [Validators.required]],
      empCity: ['', [Validators.required]],
      empState: ['', [Validators.required]],
      empzipcode: ['', [Validators.required]],
      empStreetAdd: ['', [Validators.required]],
      panelNo: ['', [Validators.required]],
      claimNo: ['', [Validators.required]],
      employerName: ['', [Validators.required]],
      employerCity: ['', [Validators.required]],
      employerState: ['', [Validators.required]],
      employerStreetadd: ['', [Validators.required]],
      employerZipcode: ['', [Validators.required]],
      adminName: ['', [Validators.required]],
      adminCompany: ['', [Validators.required]],
      adminPhoneNo: ['', [Validators.required]],
      adminState: ['', [Validators.required]],
      adminStreetAdd: ['', [Validators.required]],
      adminCity: ['', [Validators.required]],
      adminZipcode: ['', [Validators.required]],
      appoinDate: ['', [Validators.required]],
      appoinCall: ['', [Validators.required ]],
      appoinTime: ['', [Validators.required]],
      examiAdd: ['', [Validators.required]],
      examiCity: ['', [Validators.required]],
      examiZipdode: ['', [Validators.required]],
      appoinAddress: ['', [Validators.required]],
      appoinCity: ['', [Validators.required]],
      appoinZipcode: ['', [Validators.required]],
      certifiedInterpre: ['', [Validators.required]],
      indicateLanguage: ['', [Validators.required]],
      qmeName: ['', [Validators.required]],
      qmeCity: ['', [Validators.required]],
      qmeState: ['', [Validators.required]],
      qmeAdd: ['', [Validators.required]],
      qmeZipcode: ['', [Validators.required]],
      dateSigned: ['', [Validators.required]],
      service1: ['', [Validators.required]],
      service1Person: ['', [Validators.required]],
      service1Add: ['', [Validators.required]],
      service1City: ['', [Validators.required]],
      service1State: ['', [Validators.required]],
      service1Zipcode: ['', [Validators.required ]],
      service2: ['', [Validators.required]],
      service2Person: ['', [Validators.required]],
      service2Add: ['', [Validators.required]],
      service2City: ['', [Validators.required]],
      service2State: ['', [Validators.required]],
      service2Zipcode: ['', [Validators.required ]],
      service3: ['', [Validators.required]],
      service3Person: ['', [Validators.required]],
      service3Add: ['', [Validators.required]],
      service3City: ['', [Validators.required]],
      service3State: ['', [Validators.required]],
      service3Zipcode: ['', [Validators.required ]],
      service4: ['', [Validators.required]],
      service4Person: ['', [Validators.required]],
      service4Add: ['', [Validators.required]],
      service4City: ['', [Validators.required]],
      service4State: ['', [Validators.required]],
      service4Zipcode: ['', [Validators.required ]],
      
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
 
  public downloadPDF(){

		var HTML_Width = $("#pdfTable").width();
		var HTML_Height = $("#pdfTable").height();
		var top_left_margin = 15;
		var PDF_Width = HTML_Width+(top_left_margin*2);
		var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
		var canvas_image_width = HTML_Width;
		var canvas_image_height = HTML_Height;
		
		var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
		

		html2canvas($("#pdfTable")[0],{allowTaint:true}).then(function(canvas) {
			canvas.getContext('2d');
			
			console.log(canvas.height+"  "+canvas.width);
			
			
			var imgData = canvas.toDataURL("image/jpeg", 1.0);
			var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
		    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
			
			
			for (var i = 1; i <= totalPDFPages; i++) { 
				pdf.addPage();
				pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
			}
			let r = (Math.random() + 1).toString(36).substring(7);
        let pdfName='Qmr'+'_'+r+'.pdf' 
        console.log(pdfName);
		    pdf.save(pdfName);
        });
	};
  
  
  attributes = {
  'empName':'',
  'empPhone':'',
  'dateOfInjury':'',
  'empCity': '',
  'empState': '',
  'empzipcode': '',
  'empStreetAdd': '',
  'panelNo': '',
  'claimNo': '',
   'employerName': '',
  'employerCity': '',
  'employerState': '',
 'employerStreetadd': '',
   'employerZipcode': '',
   'adminName': '',
  'adminCompany': '',
   'adminPhoneNo': '',
  'adminState': '',
  'adminStreetAdd': '',
 'adminCity': '',
   'adminZipcode': '',
   'appoinDate': '',
   'appoinCall': '',
   'appoinTime': '',
  'examiAdd': '',
    'examiCity': '',
    'examiZipdode': '',
   'appoinAddress': '',
    'appoinCity': '',
   'appoinZipcode': '',
   'certifiedInterpre': '',
  'indicateLanguage': '',
    'qmeName': '',
    'qmeCity': '',
  'qmeState': '',
  'qmeAdd': '',
 'qmeZipcode': '',
   'dateSigned': '',
   'service1': '',
  'service1Person': '',
   'service1Add': '',
  'service1City': '',
  'service1State': '',
 'service1Zipcode': '',
 'service2': '',
  'service2Person': '',
   'service2Add': '',
  'service2City': '',
  'service2State': '',
 'service2Zipcode': '',
 'service3': '',
 'service3Person': '',
 'service3Add': '',
'service3City': '',
'service3State': '',
'service3Zipcode': '',
'service4': '',
'service4Person': '',
'service4Add': '',
'service4City': '',
'service4State': '',
'service4Zipcode': '',

};

  validationMessages = {
      'empName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.NAME_NOT_VALID_MESSAGE
  		},
      'empPhone': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.NAME_NOT_VALID_MESSAGE
  		},
      'dateOfInjury': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
      },
      'empCity': {
        'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
    },
    'empState': {
      'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  },
  'empzipcode': {
    'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
},
'empStreetAdd': {
  'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
},
'panelNo': {
  'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
},
'claimNo': {
  'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
},
  		'employerName': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG,        
          'pattern': Config.PHONE_NOT_VALID_MESSAGE
  		},
  		'employerCity': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
     
      'employerStreetadd': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'employerZipcode': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'employerState': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      // 'medproId': {
      // 		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		// }
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
        const form = this.patientRegisterForm;
        const formData: FormData = new FormData();      
        formData.append('empName', this.patientRegisterForm.get('empName').value);
        formData.append('empPhone', this.patientRegisterForm.get('empPhone').value);
        formData.append('dateOfInjury', this.patientRegisterForm.get('dateOfInjury').value);
        formData.append('empCity', this.patientRegisterForm.get('empCity').value);
        formData.append('empState', this.patientRegisterForm.get('empState').value);
        formData.append('empzipcode', this.patientRegisterForm.get('empzipcode').value);        
        formData.append('empStreetAdd', this.patientRegisterForm.get('empStreetAdd').value);
        formData.append('panelNo', this.patientRegisterForm.get('panelNo').value);
        formData.append('claimNo', this.patientRegisterForm.get('claimNo').value);
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
        formData.append('certifiedInterpre', this.patientRegisterForm.get('certifiedInterpre').value);
        formData.append('indicateLanguage', this.patientRegisterForm.get('indicateLanguage').value);        
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
        formData.append('service4Zipcode', this.patientRegisterForm.get('service4Zipcode').value);
        formData.append('claimId', this.claimId);
        
    		this.patientService.saveQmrData(formData).then((result) => {
    			this.spinner.hide();
        		this.loading = false;
          		if(result['message'] && result['message'] != ''){
          			this.toastr.success(result['message']);	
          		}else{
          			this.toastr.success(Config.STATUS_UPDATED_SUCCESSFULLY);
              }
              this.downloadPDF();
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
