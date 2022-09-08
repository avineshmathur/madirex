import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminclinicAuthService, CommonService, UserService, PatientService } from '../../_services';
import { Config } from './../../constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  loading: boolean = false;
  showErrors: number = 0;
  messages: any;
  resData: any; 
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  message:any;
  constructor(private formBuilder: FormBuilder,
    private adminclinicAuthService: AdminclinicAuthService,
    private userService: UserService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router : Router,
    private route : ActivatedRoute,
    private commonService : CommonService,
    private modalService: NgbModal
    ) { 
    this.commonService.setPageTitle(this.route.snapshot.data['title']);
    this.commonService.checkClinicLogin();
  }
  closeResult: string;
  ngOnInit(): void {
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
    this.userService.getMessages().then((result) => {
        this.resData = result;
        this.messages = this.resData.data;
        this.dtTrigger.next();
        },error => {
        this.spinner.hide();
        this.loading = false;
        this.toastr.error(error);
    });
  }
  open(content,msg) {
    this.message = msg;
    this.modalService.open(content ,{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  //onDelete(id: number) { 
  //  if (confirm('Are you sure want to delete this')) {
  //    this.userService.deleteUser(+id).then((result) => {
  //        this.toastr.success(result['message']);	
  //        this.ngOnInit();
  //      },error => {
  //        this.spinner.hide();
  //        this.loading = false;
  //        this.toastr.error(error);
  //    });
  //  }
  //}
  //
  //onUpdateStatus(id: number) { 
  //  if (confirm('Are you sure want to update status')) {
  //    this.userService.updateStatus(+id).then((result) => {
  //        this.toastr.success(result['message']);	
  //        this.ngOnInit();
  //      },error => {
  //        this.spinner.hide();
  //        this.loading = false;
  //        //this.changePasswordForm.reset();
  //        this.toastr.error(error);
  //    });
  //  }
  //}

}