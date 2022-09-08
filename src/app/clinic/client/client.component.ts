import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAuthService, CommonService, ClientService } from '../../_services';
//import { ClientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
//import { Client } from '../../models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {
  //changePasswordForm: FormGroup;
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
    this.getUsers();
  }

  getUsers() {
    this.clientService.getClients().then((result) => {
        this.resData = result;
        this.clients = this.resData.data;
        },error => {
        this.spinner.hide();
        this.loading = false;
        //this.changePasswordForm.reset();
        this.toastr.error(error);
    });
  }
  
  
  onDelete(id: number) { 
    if (confirm('Are you sure want to delete this')) {
      this.clientService.deleteClient(+id).then((result) => {
          console.log(result);
          this.ngOnInit();
        },error => {
          this.spinner.hide();
          this.loading = false;
          //this.changePasswordForm.reset();
          this.toastr.error(error);
      });
    }
  }
  
  onUpdateStatus(id: number) { 
    if (confirm('Are you sure want to update status')) {
      this.clientService.updateStatus(+id).then((result) => {
          console.log(result);
          this.ngOnInit();
        },error => {
          this.spinner.hide();
          this.loading = false;
          //this.changePasswordForm.reset();
          this.toastr.error(error);
      });
    }
  }

}
