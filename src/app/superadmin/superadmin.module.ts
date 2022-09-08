import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './superadmin.component';
import { LoginComponent } from './auth/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password.component';
import { ChangePasswordComponent } from './auth/change-password.component';
import { Config } from '../constant';
import { AdminAuthGuard } from '../_guards';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { BlockUIPreventNavigation } from 'ng-block-ui/router';
import { ClientComponent } from './client/client.component';
import { ClientRegisterComponent } from './client/client-register.component';
import { ClientUpdateComponent } from './client/client-update.component';
import { ClientArchivedComponent } from './client/client-archived.component';
import { formatDate } from '@angular/common';
import { ClientSendMessageComponent } from './client/client-send-message.component';
//import {MatDatepickerModule} from '@angular/material/datepicker'

import {DataTablesModule} from 'angular-datatables';
import { MessageComponent } from './client/message.component';

const superAdminLoginTitle = Config.SUPERADMIN_TITLE+Config.TITLE_SEPRATOR+Config.LOGIN_TITLE;
const superAdminForgotPasswordTitle = Config.SUPERADMIN_TITLE+Config.TITLE_SEPRATOR+Config.FORGOT_PASSWORD_TITLE;
const superAdminResetPasswordTitle = Config.SUPERADMIN_TITLE+Config.TITLE_SEPRATOR+Config.RESET_PASSWORD_TITLE;
const superAdminChangePasswordTitle = Config.SUPERADMIN_TITLE+Config.TITLE_SEPRATOR+Config.CHANGE_PASSWORD_TITLE;

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [BlockUIPreventNavigation],
    children: [
      {
        path: '',
        component: SuperAdminComponent,
        data: {
          title: Config.SUPERADMIN_TITLE,
          urls: [{title: Config.SUPERADMIN_TITLE,url: '/superadmin'},{title: Config.SUPERADMIN_TITLE}]
        },
        canActivate: [AdminAuthGuard]
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        data: {
          title: superAdminChangePasswordTitle,
          urls: [{title: superAdminChangePasswordTitle,url: '/superadmin/change-password'},{title: superAdminChangePasswordTitle}]
        },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'client',
        component: ClientComponent,
        data: {
          title: superAdminChangePasswordTitle,
          urls: [{title: superAdminChangePasswordTitle,url: '/superadmin/client'},{title: superAdminChangePasswordTitle}]
        },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'client-archived',
        component: ClientArchivedComponent,
        data: {
          title: superAdminChangePasswordTitle,
          urls: [{title: superAdminChangePasswordTitle,url: '/superadmin/client-archived'},{title: superAdminChangePasswordTitle}]
        },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'client-register',
        component: ClientRegisterComponent,
        data: {
          title: superAdminChangePasswordTitle,
          urls: [{title: superAdminChangePasswordTitle,url: '/superadmin/client-register'},{title: superAdminChangePasswordTitle}]
        },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'client-update/:id',
        component: ClientUpdateComponent,
        data: {
          title: superAdminChangePasswordTitle,
          urls: [{title: superAdminChangePasswordTitle,url: '/superadmin/client-update'},{title: superAdminChangePasswordTitle}]
        },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'send-message/:id',
        component: ClientSendMessageComponent,
        data: {
          title: superAdminChangePasswordTitle,
          urls: [{title: superAdminChangePasswordTitle,url: '/superadmin/send-message'},{title: superAdminChangePasswordTitle}]
        },
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'messages',
        component: MessageComponent,
        data: {
          title: superAdminChangePasswordTitle,
          urls: [{title: superAdminChangePasswordTitle,url: '/superadmin/messages'},{title: superAdminChangePasswordTitle}]
        },
        canActivate: [AdminAuthGuard],
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
          title: superAdminLoginTitle,
          urls: [{title: superAdminLoginTitle,url: '/superadmin/login'},{title: superAdminLoginTitle}]
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
          title: superAdminForgotPasswordTitle,
          urls: [{title: superAdminForgotPasswordTitle,url: '/superadmin/forgot-password'},{title: superAdminForgotPasswordTitle}]
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
          title: superAdminResetPasswordTitle,
          urls: [{title: superAdminResetPasswordTitle,url: '/superadmin/reset-password'},{title: superAdminResetPasswordTitle}]
        }
      } 
    ]
  },
  {
    path:'**',
    redirectTo:'/superadmin'
  }
];
@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    FormsModule,
   // MatDatepickerModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  declarations: [LayoutComponent,SuperAdminComponent,LoginComponent,ForgotPasswordComponent,ResetPasswordComponent,ChangePasswordComponent,SidebarComponent,FooterComponent,HeaderComponent, ClientComponent, ClientRegisterComponent, ClientUpdateComponent, ClientArchivedComponent, ClientSendMessageComponent, MessageComponent],
  providers: [
    
  ],
})
export class SuperAdminModule { }