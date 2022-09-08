import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'; 
import { Observable } from "rxjs/Observable";
import { AdminAuthService, CommonService } from '../../_services';
@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    isSuperAdminLoggedIn$: Observable<boolean>;
	public config: PerfectScrollbarConfigInterface = {};
    constructor(public router: Router,
        private adminAuthService: AdminAuthService,
        private commonService: CommonService) { 
        this.commonService.checkSuperAdminLogin();
    }

    ngOnInit() {
        this.isSuperAdminLoggedIn$ = this.adminAuthService.isSuperAdminLoggedIn;
    }

}
