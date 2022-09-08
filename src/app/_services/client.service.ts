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
export class ClientService {
  private loggedIn = new BehaviorSubject<boolean>(false);
    get isSuperAdminLoggedIn() {
        let currentSuperAdmin = JSON.parse(localStorage.getItem('currentSuperAdmin'));
        if (currentSuperAdmin && currentSuperAdmin.id) {
            this.loggedIn.next(true);    
        }
        return this.loggedIn.asObservable();
    }

    constructor(private http: HttpClient,
        private router: Router,
        private commonService: CommonService) { 
    }
    
    getProfileById(clientId: number) {
        let requestData = {
            "userId":clientId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'client/get-profile', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    getCountries() {
         return new Promise((resolve, reject) => {
             this.http.get(Config.API_BASE_PATH+'country-list', this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
             .timeout(Config.TIMEOUT_SECONDS)
             .subscribe(res => {
                 console.log(res);
                 resolve(res);
             }, (err) => {
                 reject(err);
             });
         });
     }
     
    getStatesById(countryId: number) {
        let requestData = {
            "country_id":countryId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'state-list-by-country-id', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    getCitiesById(stateId: number) {
      let requestData = {
          "state_id":stateId
      }
      return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'city-list-by-state-id', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    
    getClients() {
         return new Promise((resolve, reject) => {
             this.http.get(Config.API_BASE_PATH+'client/list', this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
             .timeout(Config.TIMEOUT_SECONDS)
             .subscribe(res => {
                 console.log(res);
                 resolve(res);
             }, (err) => {
                 reject(err);
             });
         });
    }
    
    getMessages() {
         return new Promise((resolve, reject) => {
             this.http.get(Config.API_BASE_PATH+'client/message-list', this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
             .timeout(Config.TIMEOUT_SECONDS)
             .subscribe(res => {
                 console.log(res);
                 resolve(res);
             }, (err) => {
                 reject(err);
             });
         });
    }
    
    getarchivedClients() {
         return new Promise((resolve, reject) => {
             this.http.get(Config.API_BASE_PATH+'client/archived-list', this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
             .timeout(Config.TIMEOUT_SECONDS)
             .subscribe(res => {
                 console.log(res);
                 resolve(res);
             }, (err) => {
                 reject(err);
             });
         });
    }
    
    deleteClient(id: number) {      
      let requestData = {
          "id":id
      }      
      return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'client/delete', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              console.log(res);
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    
    updateStatus(id: number) {      
      let requestData = {
          "id":id
      }      
      return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'client/update-status', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              console.log(res);
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }

     
     clientRegister(clinicName: string, firstName: string, lastName:string,emailAddress: string, userName: string, phoneNumber:string,startDate: string, endDate: string, address:string,countryId: string, stateId: string, cityId:string, zipCode: string, keyword:string) {
        let requestData = {
            "clinic_name":clinicName,
            "first_name":firstName,
            "last_name":lastName,
            "email":emailAddress,
            "username":userName,
            "phone_number":phoneNumber,
            "start_date":startDate,
            "end_date":endDate,
            "address":address,
            "country_id":countryId,
            "state_id":stateId,
            "city_id":cityId,
            "zip_code":zipCode,
            "keyword":keyword
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'client/create', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    clientUpdate(clinicName: string, firstName: string, lastName:string,emailAddress: string, userName: string, phoneNumber:string,startDate: string, endDate: string, address:string,countryId: string, stateId: string, cityId:string, zipCode: string, keyword:string, clientId: string) { 
        let requestData = {
            "clinic_name":clinicName,
            "first_name":firstName,
            "last_name":lastName,
            "email":emailAddress,
            "username":userName,
            "phone_number":phoneNumber,
            "start_date":startDate,
            "end_date":endDate,
            "address":address,
            "country_id":countryId,
            "state_id":stateId,
            "city_id":cityId,
            "zip_code":zipCode,
            "keyword":keyword,
            "clientId":clientId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'client/edit-client', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    sendMessage(subject: string, message: string, useremail: string, fromuser: string, touser: string) {
      let requestData = {
          "subject":subject,
          "message":message,
          "useremail":useremail,
          "fromuser":fromuser,
          "touser":touser
      }
      //console.log(this.commonService.getHttpOptions(localStorage.getItem('currentClinic'),Config.API_OTHERS_KEY));
      //console.log(Config.API_OTHERS_KEY);
      return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'client/client-send-message', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    
    //getClient(id: number) {
    //     return new Promise((resolve, reject) => {
    //         this.http.get(Config.API_BASE_PATH+'client/getProfile' + id, this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY))
    //         .timeout(Config.TIMEOUT_SECONDS)
    //         .subscribe(res => {
    //             console.log(res);
    //             resolve(res);
    //         }, (err) => {
    //             reject(err);
    //         });
    //     });
    // }
    //
    //clientUpdate(client, id: number) {
    //    let requestData = {
    //        "old_password":oldPassword,
    //        "new_password":newPassword,
    //        "confirm_new_password":confirmPassword
    //    }
    //    return new Promise((resolve, reject) => {
    //        this.http.post(Config.API_BASE_PATH+'client/create' + id, JSON.stringify(client), this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY))
    //        .timeout(Config.TIMEOUT_SECONDS)
    //        .subscribe(res => {
    //            resolve(res);
    //        }, (err) => {
    //            reject(err);
    //        });
    //    });
    //}
    //
    //clientDelete(id: number) {
    //    let requestData = {
    //        "old_password":oldPassword,
    //        "new_password":newPassword,
    //        "confirm_new_password":confirmPassword
    //    }
    //    return new Promise((resolve, reject) => {
    //        this.http.delete(Config.API_BASE_PATH+'client/delete' + id, this.commonService.getHttpOptions(localStorage.getItem('currentSuperAdminToken'),Config.API_SUPERADMIN_KEY))
    //        .timeout(Config.TIMEOUT_SECONDS)
    //        .subscribe(res => {
    //            resolve(res);
    //        }, (err) => {
    //            reject(err);
    //        });
    //    });
    //}
  
}
