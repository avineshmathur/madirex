import { Component, OnInit } from '@angular/core';
import { Config } from '../../../constant';
import { AdminAuthService, CommonService } from '../../../_services';
import Swal from 'sweetalert2';
@Component({
  selector: 'superadmin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	currentDate : Date = new Date();
	appTitle: string = Config.APP_TITLE;
	loggedInSuperAdminDetails:any;
	profileImgPath: string = Config.PROFILE_NO_IMG_PATH;
	constructor( private commonService: CommonService, private adminAuthService: AdminAuthService ) { 
		this.loggedInSuperAdminDetails = this.commonService.getLoggedInSuperAdminData();
	}
  	ngOnInit(): void {
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
    			this.adminAuthService.logout();
  			}
		})
  	}
}
