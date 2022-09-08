import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/timeout';
import { BehaviorSubject } from 'rxjs';
import { Config } from  '../constant';
import { Router } from '@angular/router';
import { CommonService } from '../_services/common.service';
//import { Client } from '../_models/client';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
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
    
    getRoleById(roleId: number) {
        let requestData = {
            "roleId":roleId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'role/get-role', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    getRoles() {
         return new Promise((resolve, reject) => {
             this.http.get(Config.API_BASE_PATH+'role/list?domain="clinic"', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
             .timeout(Config.TIMEOUT_SECONDS)
             .subscribe(res => {
                 console.log(res);
                 resolve(res);
             }, (err) => {
                 reject(err);
             });
         });
    }
    
    //getarchivedClients() {
    //     return new Promise((resolve, reject) => {
    //         this.http.get(Config.API_BASE_PATH+'client/archivedlist', this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY))
    //         .timeout(Config.TIMEOUT_SECONDS)
    //         .subscribe(res => {
    //             console.log(res);
    //             resolve(res);
    //         }, (err) => {
    //             reject(err);
    //         });
    //     });
    //}
    
    deleteRole(id: number) {      
      let requestData = {
          "id":id
      }      
      return new Promise((resolve, reject) => {
        this.http.post(Config.API_BASE_PATH+'role/delete-role', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
      });
    }
    
    updateStatus(id: number) {      
      let requestData = {
          "roleId":id
      }      
      return new Promise((resolve, reject) => {
        this.http.post(Config.API_BASE_PATH+'role/update-role-status', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
      });
    }

     
    roleRegister(title: string, description: string) {
      let requestData = {
          "title":title,
          "description":description
      }
      console.log(this.commonService.getHttpOptions(localStorage.getItem('currentClinic'),Config.API_OTHERS_KEY));
      //console.log(Config.API_OTHERS_KEY);
      return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'role/add-role', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    
    roleUpdate(title: string, description: string, roleId: string) {
        let requestData = {
            "title":title,
            "description":description,
            "id":roleId
        }
        //console.log(requestData);
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'role/edit-role', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
}
