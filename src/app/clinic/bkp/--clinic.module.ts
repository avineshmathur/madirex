import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicComponent } from './clinic.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login.component';
import { ChangePasswordComponent } from './auth/change-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';



@NgModule({
  declarations: [ClinicComponent, AuthComponent, LoginComponent, ChangePasswordComponent, ForgotPasswordComponent, ResetPasswordComponent, LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class ClinicModule { }
