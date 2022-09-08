import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from './../constant';
import { CommonService } from '../_services';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})

export class ClinicComponent implements OnInit {
  underConstructionImgPath: string = Config.CLINIC_UNDER_CONSTRUCTION_IMG_PATH;
	constructor(
		  private route: ActivatedRoute,
    	private commonService : CommonService) { 
      this.commonService.setPageTitle(this.route.snapshot.data['title']);
	}
	ngOnInit() {

  	}
}