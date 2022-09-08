import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAuthService, CommonService, ClientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-client-archived',
  templateUrl: './client-archived.component.html',
  styleUrls: ['./client-archived.component.less']
})
export class ClientArchivedComponent implements OnInit {
  loading: boolean = false;
  showErrors: number = 0;
  clients: any;
  resData: any;

  constructor(private formBuilder: FormBuilder,
    	private adminAuthService: AdminAuthService,
      private clientService: ClientService,
    	private toastr: ToastrService,
    	private spinner: NgxSpinnerService,
    	private router : Router,
    	private route : ActivatedRoute,
    	private commonService : CommonService) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkSuperAdminLogin();
	}

   ngOnInit() {
    this.getarchivedUsers();
  }

  getarchivedUsers() {
    this.clientService.getarchivedClients().then((result) => {
        this.resData = result;
        this.clients = this.resData.data;
        },error => {
        this.spinner.hide();
        this.loading = false;
        //this.changePasswordForm.reset();
        this.toastr.error(error);
    });
  }

}
