import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'; 
import { Observable } from "rxjs/Observable";
import { AdminclinicAuthService, CommonService } from '../../_services';
@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    isClinicLoggedIn$: Observable<boolean>;
	public config: PerfectScrollbarConfigInterface = {};
    constructor(public router: Router,
        private adminclinicAuthService: AdminclinicAuthService,
        private commonService: CommonService) { 
        this.commonService.checkClinicLogin();
    }

    ngOnInit() {
        this.isClinicLoggedIn$ = this.adminclinicAuthService.isClinicLoggedIn;
    }

}
