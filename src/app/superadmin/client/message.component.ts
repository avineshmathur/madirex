import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAuthService, CommonService, ClientService } from '../../_services';
//import { ClientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {
  loading: boolean = false;
  showErrors: number = 0;
  messages: any;
  resData: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

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
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    this.getMessages();
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getMessages() {
    this.clientService.getMessages().then((result) => {
        this.resData = result;
        this.messages = this.resData.data;
        this.dtTrigger.next();
        },error => {
        this.spinner.hide();
        this.loading = false;
        //this.changePasswordForm.reset();
        this.toastr.error(error);
    });
  }

}
