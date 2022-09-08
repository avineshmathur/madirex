import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from './../constant';
import { CommonService } from '../_services';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})

export class SuperAdminComponent implements OnInit {
  underConstructionImgPath: string = Config.UNDER_CONSTRUCTION_IMG_PATH;
	constructor(
		  private route: ActivatedRoute,
    	private commonService : CommonService) { 
      this.commonService.setPageTitle(this.route.snapshot.data['title']);
	}
	ngOnInit() {

  	}
}