import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../_services';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private route : ActivatedRoute, private commonService : CommonService) { 
  	this.commonService.setPageTitle(this.route.snapshot.data['title']);
  }

  ngOnInit() {
  }

}
