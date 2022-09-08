import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.less']
})
export class ClaimDetailComponent implements OnInit {
  claimDetailForm: FormGroup;
  loading: boolean = false;
  showErrors: number = 0;
  resData: any;  
  doctors: {};
  medpros: {};
  claim: any;
  backClicked() {
    this._location.back();
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
    this.commonService.checkClinicLogin();
  }

  ngOnInit() {
    this.getDoctors();
    this.getMedpros();
    const claimId = this.route.snapshot.paramMap.get('id');
    //getProfileById(clientId: number) {
      if (claimId) {
        this.patientService.getClaimById(+claimId).then((result) => {
          
          this.resData = result;
          this.claim = this.resData.data[0];
					console.log(this.claim);
					//var countryID = this.user.country_id;
					//var stateID = this.user.state_id;
          //console.warn(countryID);
          this.claimDetailForm.patchValue({
            firstName: this.claim.first_name,
            lastName: this.claim.last_name,
            dateOfBirth: this.formatDate(this.claim.date_of_birth),
            contctInfo: this.claim.contact_info,
            claimNo: this.claim.claim_no,
            caseNo: this.claim.case_no,
            appAttorney: this.claim.applicant_attorney,
            employer: this.claim.employer,
            defAttorney: this.claim.defendant_attorney,
            doctorId: this.claim.assigned_doctor_id,            
            medproId: this.claim.assigned_medpro_id
            //croppedImage: 'https://medirecx.s3.amazonaws.com/user-avtar/'+.this.user.image_url,
            //userId: userId
          });
					//this.getStatesByCountryId(countryID);
					//this.getCitiesByStateId(stateID);
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
        });
				
      } else {
        this.claim = null;
      }
      
    this.claimDetailForm = new FormGroup({
      doctorId: new FormControl(''),
      medproId: new FormControl('')
    });
    
		this.claimDetailForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      contctInfo: ['', Validators.required ],
      claimNo: ['', Validators.required],
      caseNo: ['', Validators.required],
      appAttorney: ['', Validators.required],
      employer: ['', Validators.required],
      defAttorney: ['', Validators.required],
      doctorId: ['', Validators.required],
      medproId: ['', Validators.required]
    });
			
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

}
