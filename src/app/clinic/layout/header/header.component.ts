import { Component, OnInit } from '@angular/core';
import { Config } from '../../../constant';
import { AdminclinicAuthService, CommonService } from '../../../_services';
import Swal from 'sweetalert2';
@Component({
  selector: 'clinic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	currentDate : Date = new Date();
	appTitle: string = Config.APP_TITLE;
	loggedInClinicDetails:any;
	profileImgPath: string = '';
	constructor( private commonService: CommonService, private adminclinicAuthService: AdminclinicAuthService ) { 
		this.loggedInClinicDetails = this.commonService.getLoggedInClinicData();
	}
  	ngOnInit(): void {
			if(this.loggedInClinicDetails.image_url) {
				this.profileImgPath = Config.PROFILE_IMG_S3_PATH+this.loggedInClinicDetails.image_url;
			} else {
				this.profileImgPath = Config.PROFILE_NO_IMG_PATH;
			}
  	}

  	logout(){
  		Swal.fire({
  			title: Config.SWAL_LOGOUT_TITLE,
  			text: Config.SWAL_LOGOUT_TEXT,
			icon: 'question',
  			showCancelButton: true,
  			confirmButtonText: Config.SWAL_LOGOUT_CONFIRM_BUTTON_TEXT,
  			allowOutsideClick: false,
  			allowEscapeKey: false,
  			allowEnterKey: false
		}).then((result) => {
  			if (result.isConfirmed) {
    			this.adminclinicAuthService.logout();
  			}
		})
  	}
}
