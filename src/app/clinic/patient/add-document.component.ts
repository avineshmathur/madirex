import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.less']
})
export class AddDocumentComponent implements OnInit {

  documentRegisterForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;
  claimIdUrl:any;
  //docFile: any = '';
  docFile: any [] = [];
  fileSizeValidation = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  claim: any;
	file: any = '';
	fileExt: any = '';
	myDate: any = '';
	origFileName: any = '';
  path:any='';
  myFiles:string [] = [];
	loggedInClinicDetails:any;
  chooseFileType:string ='folder';
  disabled: boolean =false;
  
  backClicked() {
    if(confirm("Are you sure to Back ")) {
      this._location.back();
    }
    
  }
  radioChangeEvent(event:any):void{
    console.log(event.target.value);
    if (event.target.value=='file')
    {
      this.chooseFileType='file';
    }
    else 
    {
      this.chooseFileType='folder';
    }
  }
	fileChangeEvent(event: any): void  {
			if(event.target.files ) {
        var FileSize=0;
       
        //event.target.files.size; // in MB
        console.log(event.target.files);
        for (let i = 0; i < event.target.files.length; i++) {
          FileSize = FileSize + event.target.files[i].size
          this.myFiles.push(event.target.files[i]);
         }
       
			    if (FileSize/1024/1024 > 50 ) {
            this.myFiles=[];
            console.log(FileSize/1024/1024 + ' MB');
            this.fileSizeValidation = "File size can not exceed 50 mb";
            this.disabled=true;
           
          } 
          else{
            this.fileSizeValidation ="";
            this.disabled=false;
          }
        
				
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
    private _location: Location
    ) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin(),this.loggedInClinicDetails = this.commonService.getLoggedInClinicData();
      
  }

  ngOnInit() {
		
		let dte = new Date();
		this.myDate = this.formatDate(dte);
		
    const claimId = this.route.snapshot.paramMap.get('id');
    this.claimIdUrl= claimId;
    //getProfileById(clientId: number) {
      if (claimId) {
        this.patientService.getClaimById(+claimId).then((result) => {
          
          this.resData = result;
          this.claim = this.resData.data;
          this.documentRegisterForm.patchValue({
            userId: this.loggedInClinicDetails.id,
            claimId: claimId
          });
					
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
				
				
      } else {
        this.claim = null;
      }
			
    this.documentRegisterForm = new FormGroup({
      //country: new FormControl(''),
      //state: new FormControl(''),
      //city: new FormControl(''),      
      //role: new FormControl('')
    });
    
		this.documentRegisterForm = this.formBuilder.group({
      documentNote: ['', Validators.required],
      expectedDate: ['', Validators.required],
      claimId: ['', Validators.required],
      userId: ['', Validators.required],
      docFile: ['', Validators.required]
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
  
  attributes = {'documentNote': '','expectedDate': '','claimId': '','userId': '','docFile': ''};
	validationMessages = {
      'documentNote': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
      'expectedDate': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
  		'claimId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
  		'userId': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		},
  		'docFile': {
      		'required': Config.PLEASE_FILL_REQUIRED_FIELD_MSG
  		}
	};

	submit() { //console.log(this.documentRegisterForm);
  		this.loading = true;
     	this.showErrors = 1;
    	const form = this.documentRegisterForm;
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
      
    	if (this.documentRegisterForm.valid) { 
    		this.showErrors = 0;
        this.spinner.show();
        
        const formData: FormData = new FormData();
        formData.append('documentNote', this.documentRegisterForm.get('documentNote').value);
        formData.append('expectedDate', this.documentRegisterForm.get('expectedDate').value);
        formData.append('claimId', this.documentRegisterForm.get('claimId').value);
        formData.append('userId', this.documentRegisterForm.get('userId').value);
        //console.log(this.fileExt);
        // if (this.croppedImage) {
        //     const fileToUpload: File = new File([this.dataURItoBlob(this.croppedImage)], this.origFileName+'.'+this.fileExt);
        //     formData.append('docFile', fileToUpload, fileToUpload.name);
        // } else {
        //     formData.append('docFile', '');
        // }    
       // console.log( this.myFiles); return false;
       if (this.myFiles.length > 0) {
        for (var i = 0; i < this.myFiles.length; i++) { 

          formData.append("docFile", this.myFiles[i]);
    
        }
      } else {
            formData.append('docFile', '');
            this.toastr.error("File size can not exceed 50 mb");
           
            //this.documentRegisterForm.controls['docFile']).patchValue('');
           // this.router.navigate(['/clinic/document-list/'+ this.claimIdUrl]);
        }    
       // console.log(this.docFile); return false;
        this.patientService.addDocument(formData).then(result => {
            this.spinner.hide();
            this.loading = false;
            console.log(result)
            if(result['message'] && result['message'] != '') {
                this.toastr.success(result['message']);
               //this.documentRegisterForm.reset();
               this.router.navigate(['/clinic/document-list/'+ this.claimIdUrl]);
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
	
//	private formatDate() { 
//    const d = new Date();
//    let month = '' + (d.getMonth() + 1);
//    let day = '' + d.getDate();
//    const year = d.getFullYear();
//    if (month.length < 2) month = '0' + month;
//    if (day.length < 2) day = '0' + day;
//    return [year, month, day].join('-');
//  }

}
