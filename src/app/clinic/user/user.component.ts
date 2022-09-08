import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, UserService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  loading: boolean = false;
  showErrors: number = 0;
  users: any;
  resData: any;    
  
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private userService: UserService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin();
  }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    this.getUsers();
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getUsers() {
    this.userService.getUsers().then((result) => {
        this.resData = result;
        this.users = this.resData.data;
        this.dtTrigger.next();
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
    });
  }
  
  onDelete(id: number,rowIndex:number) { 
    if (confirm('Are you sure want to delete this?')) {
      this.userService.deleteUser(+id).then((result) => {
          this.users.splice(rowIndex,1);
          this.toastr.success(result['message']);	
          this.rerender();
          //this.toastr.success(result['message']);	
          //this.ngOnInit();
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
      });
    }
  }
  
  onUpdateStatus(id: number,rowIndex:number) { 
    if (confirm('Are you sure want to update status?')) {
      this.userService.updateStatus(+id).then((result) => {
          this.users.splice(rowIndex,1);
          this.toastr.success(result['message']);	
          this.rerender();
          //this.toastr.success(result['message']);	
          //this.ngOnInit();
        },error => {
          this.spinner.hide();
          this.loading = false;
          //this.changePasswordForm.reset();
          this.toastr.error(error);
      });
    }
  }
  
  rerender() : void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

}
