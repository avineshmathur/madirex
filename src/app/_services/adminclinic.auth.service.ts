import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/timeout';
import { BehaviorSubject } from 'rxjs';
import { Config } from  '../constant';
import { Router } from '@angular/router';
import { CommonService } from '../_services/common.service';
@Injectable({
  providedIn: 'root'
})
export class AdminclinicAuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    get isClinicLoggedIn() {
        let currentClinic = JSON.parse(localStorage.getItem('currentClinic'));
        if (currentClinic && currentClinic.id) {
            this.loggedIn.next(true);    
        }
        return this.loggedIn.asObservable();
    }

    constructor(private http: HttpClient,
        private router: Router,
        private commonService: CommonService) { 
    }
    
    login(username: string, password: string) { 
        let requestData = {
            'username':username,
            'password':password
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'clinic/login', JSON.stringify(requestData), this.commonService.getHttpOptions(null,Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => { //console.log(res["data"]);
                if(res["status"]==Config.SUCCESS_STATUS){
                    this.loggedIn.next(true);
                    localStorage.setItem('currentClinic', JSON.stringify(res["data"]));
                    localStorage.setItem('currentClinicToken',JSON.stringify(res["data"]["token"]));
                    resolve(res);
                }else{
                    resolve(res);
                }
            }, (err) => { 
                reject(err);
            });
        });
    }
    
    logout() {
        localStorage.removeItem('currentClinic');
        localStorage.removeItem('currentClinicToken');
        localStorage.clear();
        this.loggedIn.next(false);
        this.router.navigate(['/clinic/login']);
    }

    forgotPassword(email: string) {
        let requestData = {
            'email':email
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'clinic/forgot-password', JSON.stringify(requestData), this.commonService.getHttpOptions(null,Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    resetPassword(password: string, confirmPassword: string, resetToken:string) {
        let requestData = {
            "password":password,
            "confirm_password":confirmPassword,
            "reset_token":resetToken
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'clinic/reset-password', JSON.stringify(requestData), this.commonService.getHttpOptions(null,Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    changePassword(oldPassword: string, newPassword: string, confirmPassword:string) {
        let requestData = {
            "old_password":oldPassword,
            "new_password":newPassword,
            "confirm_new_password":confirmPassword
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'clinic/change-password', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    // refreshToken() {
    //     return new Promise((resolve, reject) => {
    //         this.http.get(Config.API_BASE_PATH+'superadmin/refresh-token', this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY))
    //         .timeout(Config.TIMEOUT_SECONDS)
    //         .subscribe(res => {
    //             console.log(res);
    //             resolve(res);
    //         }, (err) => {
    //             reject(err);
    //         });
    //     });
    // }

    // userProfile(accessToken:string) {
    //     return new Promise((resolve, reject) => {
    //         this.http.get(Config.API_BASE_PATH+'AppUsers/user-profile', this.commonService.getHttpOptions(accessToken))
    //         .timeout(Config.TIMEOUT_SECONDS)
    //         .subscribe(res => {
    //             resolve(res);
    //         }, (err) => {
    //             reject(err);
    //         });
    //     });
    // }
}