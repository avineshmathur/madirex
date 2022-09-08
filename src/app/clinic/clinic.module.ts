import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
//import { SuperAdminComponent } from './superadmin.component';
import { ClinicComponent } from './clinic.component';
import { LoginComponent } from './auth/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password.component';
import { ChangePasswordComponent } from './auth/change-password.component';
import { Config } from '../constant';
//import { AdminAuthGuard } from '../_guards';
import { AdminclinicAuthGuard } from '../_guardsclinic';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { BlockUIPreventNavigation } from 'ng-block-ui/router';
//import { ClientComponent } from './client/client.component';
//import { ClientRegisterComponent } from './client/client-register.component';
//import { ClientUpdateComponent } from './client/client-update.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { PatientComponent } from './patient/patient.component';
import { ClaimDetailComponent } from './patient/claim-detail.component';
import { PatientDetailComponent } from './patient/patient-detail.component';
import { PatientRegisterComponent } from './patient/patient-register.component';
import { PatientUpdateComponent } from './patient/patient-update.component';

import { DocumentListComponent } from './patient/document-list.component';
import { MedproComponent } from './medpro/medpro.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RoleRegisterComponent } from './role/role-register.component';
import { RoleUpdateComponent } from './role/role-update.component';
import { UserRegisterComponent } from './user/user-register.component';
import { UserUpdateComponent } from './user/user-update.component';
import { BusinessSetupComponent } from './business-setup/business-setup.component';
import { AddDocumentComponent } from './patient/add-document.component';
import { ArchivedClaimComponent } from './patient/archived-claim.component';
import { SendMessageComponent } from './user/send-message.component';
import { UpdateDocumentComponent } from './patient/update-document.component';
import { MessagesComponent } from './user/messages.component';
//import { DataTablesModule } from "angular-datatables";

import {DataTablesModule} from 'angular-datatables';
import { CKEditorModule } from 'ckeditor4-angular';
import { ClinicMessageComponent } from './clinic-message/clinic-message.component';
import { StriphtmlPipe } from './striphtml.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MulticlaimComponent } from './multiclaim/multiclaim.component';
import { QmrComponent } from './qmr/qmr.component';
const clinicLoginTitle = Config.CLINIC_TITLE+Config.TITLE_SEPRATOR+Config.LOGIN_TITLE;
const clinicForgotPasswordTitle = Config.CLINIC_TITLE+Config.TITLE_SEPRATOR+Config.FORGOT_PASSWORD_TITLE;
const clinicResetPasswordTitle = Config.CLINIC_TITLE+Config.TITLE_SEPRATOR+Config.RESET_PASSWORD_TITLE;
const clinicChangePasswordTitle = Config.CLINIC_TITLE+Config.TITLE_SEPRATOR+Config.CHANGE_PASSWORD_TITLE;

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [BlockUIPreventNavigation],
    children: [
      {
        path: '',
        component: ClinicComponent,
        data: {
          title: Config.CLINIC_TITLE,
          urls: [{title: Config.CLINIC_TITLE,url: '/clinic'},{title: Config.CLINIC_TITLE}]
        },
        canActivate: [AdminclinicAuthGuard]
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/change-password'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'role',
        component: RoleComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/role'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'role-register',
        component: RoleRegisterComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/role-register'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'role-update/:id',
        component: RoleUpdateComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/role-update'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/user'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'user-register',
        component: UserRegisterComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/user-register'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'user-update/:id',
        component: UserUpdateComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/user-update'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'send-message/:id/:type',
        component: SendMessageComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/send-message'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'clinic-message',
        component: ClinicMessageComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/clinic-message'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      
      {
        path: 'messages',
        component: MessagesComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/messages'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      //{
      //  path: 'client',
      //  component: ClientComponent,
      //  data: {
      //    title: clinicChangePasswordTitle,
      //    urls: [{title: clinicChangePasswordTitle,url: '/clinic/client'},{title: clinicChangePasswordTitle}]
      //  },
      //  canActivate: [AdminclinicAuthGuard],
      //},
      //{
      //  path: 'client-register',
      //  component: ClientRegisterComponent,
      //  data: {
      //    title: clinicChangePasswordTitle,
      //    urls: [{title: clinicChangePasswordTitle,url: '/clinic/client-register'},{title: clinicChangePasswordTitle}]
      //  },
      //  canActivate: [AdminclinicAuthGuard],
      //},
      //{
      //  path: 'client-update/:id',
      //  component: ClientUpdateComponent,
      //  data: {
      //    title: clinicChangePasswordTitle,
      //    urls: [{title: clinicChangePasswordTitle,url: '/clinic/client-update'},{title: clinicChangePasswordTitle}]
      //  },
      //  canActivate: [AdminclinicAuthGuard],
      //},
      {
        path: 'patient',
        component: PatientComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/patient'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'patient-archived',
        component: ArchivedClaimComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/patient-archived'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'patient-register',
        component: PatientRegisterComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/patient-register'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'patient-update/:id',
        component: PatientUpdateComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/patient-update'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'patient-detail',
        component: PatientDetailComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/patient-detail'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'claim-detail/:id',
        component: ClaimDetailComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/claim-detail'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'document-list/:id',
        component: DocumentListComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/document-list'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'medpro',
        component: MedproComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/medpro'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'doctor',
        component: DoctorComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/clinic/doctor'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'business-setup/:id',
        component: BusinessSetupComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/business-setup'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'add-document/:id',
        component: AddDocumentComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/add-document'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'update-document/:id',
        component: UpdateDocumentComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/update-document'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'multiclaim/:id',
        component: MulticlaimComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/multiclaim'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
      },
      {
        path: 'qmr/:id',
        component: QmrComponent,
        data: {
          title: clinicChangePasswordTitle,
          urls: [{title: clinicChangePasswordTitle,url: '/qmr'},{title: clinicChangePasswordTitle}]
        },
        canActivate: [AdminclinicAuthGuard],
        
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: clinicLoginTitle,
          urls: [{title: clinicLoginTitle,url: '/clinic/login'},{title: clinicLoginTitle}]
        }
      } 
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: {
          title: clinicForgotPasswordTitle,
          urls: [{title: clinicForgotPasswordTitle,url: '/clinic/forgot-password'},{title: clinicForgotPasswordTitle}]
        }
      } 
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        data: {
          title: clinicResetPasswordTitle,
          urls: [{title: clinicResetPasswordTitle,url: '/clinic/reset-password'},{title: clinicResetPasswordTitle}]
        }
      } 
    ]
  },
  {
    path:'**',
    redirectTo:'/clinic'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    DataTablesModule,
    CKEditorModule,
    NgbModule
  ],
  declarations: [LayoutComponent,ClinicComponent,LoginComponent,ForgotPasswordComponent,ResetPasswordComponent,ChangePasswordComponent,SidebarComponent,FooterComponent,HeaderComponent, RoleComponent, UserComponent, PatientComponent, ClaimDetailComponent, PatientDetailComponent, PatientRegisterComponent, PatientUpdateComponent, DocumentListComponent, MedproComponent, DoctorComponent, RoleRegisterComponent, RoleUpdateComponent, UserRegisterComponent, UserUpdateComponent, BusinessSetupComponent, AddDocumentComponent, ArchivedClaimComponent, SendMessageComponent, UpdateDocumentComponent, MessagesComponent, ClinicMessageComponent, StriphtmlPipe, MulticlaimComponent, QmrComponent],
  providers: [
    
  ],
})
export class ClinicModule { }