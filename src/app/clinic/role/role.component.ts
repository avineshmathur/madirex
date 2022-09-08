import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, RoleService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less']
})
export class RoleComponent implements OnInit {
  loading: boolean = false;
  showErrors: number = 0;
  roles: any;
  resData: any;  
  
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private roleService: RoleService,
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
    
    this.getRoles();    
    
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
  getRoles() {
    this.roleService.getRoles().then((result) => {
        this.resData = result;
        this.roles = this.resData.data;        
        this.dtTrigger.next();
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
    });
  }
  
  onDelete(id: number) { 
    if (confirm('Are you sure want to delete this')) {
      this.roleService.deleteRole(+id).then((result) => {
          this.toastr.success(result['message']);	
          this.ngOnInit();
        },error => {
          this.spinner.hide();
          this.loading = false;
          this.toastr.error(error);
      });
    }
  }
  
  onUpdateStatus(id: number,rowIndex:number) { 
    if (confirm('Are you sure want to update status?')) {
      this.roleService.updateStatus(+id).then((result) => {
          this.roles.splice(rowIndex,1);
          this.toastr.success(result['message']);	
          this.rerender();
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
