import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/timeout';
import { BehaviorSubject } from 'rxjs';
import { Config } from  '../constant';
import { Router } from '@angular/router';
import { CommonService } from '../_services/common.service';

@Injectable({ providedIn: 'root' })
export class UserService {
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
    
    getUserById(userId: number) {
        let requestData = {
            "userId":userId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'user/get-profile', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    getUsers() {
         return new Promise((resolve, reject) => {
             this.http.get(Config.API_BASE_PATH+'user/list', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
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
             this.http.get(Config.API_BASE_PATH+'user/message-list', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
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
    
    deleteUser(id: number) {      
      let requestData = {
          "id":id
      }      
      return new Promise((resolve, reject) => {
        this.http.post(Config.API_BASE_PATH+'user/delete-user', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
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
          "userId":id
      }      
      return new Promise((resolve, reject) => {
        this.http.post(Config.API_BASE_PATH+'user/update-user-status', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
      });
    }

     
    //userRegister(firstName: string, lastName:string,emailAddress: string, phoneNumber:string,username: string, password: string, dateOfBirth: string, role: string, address:string,countryId: string, stateId: string, cityId:string, zipCode: string, emergencyContact:string, maritialStatus:string, profileImage:string) {
    //    let requestData = {
    //        "first_name":firstName,
    //        "last_name":lastName,
    //        "email":emailAddress,           
    //        "username":username,
    //        "password":password,
    //        "role_id":role,
    //        "phone_number":phoneNumber,  
    //        "address":address,
    //        "country_id":countryId,
    //        "state_id":stateId,
    //        "city_id":cityId,
    //        "zip_code":zipCode,
    //        "image_url ":profileImage,            
    //        "date_of_birth ":dateOfBirth,
    //        "emergency_contact":emergencyContact,
    //        "marital_status":maritialStatus
    //    }
    //  return new Promise((resolve, reject) => {
    //      this.http.post(Config.API_BASE_PATH+'user/add-user', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY))
    //      .timeout(Config.TIMEOUT_SECONDS)
    //      .subscribe(res => {
    //          resolve(res);
    //      }, (err) => {
    //          reject(err);
    //      });
    //  });
    //}
    
    userRegister( postData: any){
        
          return new Promise((resolve, reject) => {
              this.http.post(Config.API_BASE_PATH+'user/add-user', postData, this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN,'image'))
              .timeout(Config.TIMEOUT_SECONDS)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
          });
    
    }
    
    userUpdate( postData: any) {
        
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'user/edit-user', postData, this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN,'image'))
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
            this.http.get(Config.API_BASE_PATH+'role/list', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                console.log(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    getCountries() {
         return new Promise((resolve, reject) => {
             this.http.get(Config.API_BASE_PATH+'country-list?subdomain=sms', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
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
            this.http.post(Config.API_BASE_PATH+'state-list-by-country-id', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
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
          this.http.post(Config.API_BASE_PATH+'city-list-by-state-id', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    
    sendMessage(subject: string, message: string, useremail: string, fromuser: string, touser: string,claimNo?:string,wcabNo?:string) {
      let requestData = {
          "subject":subject,
          "message":message,
          "useremail":useremail,
          "fromuser":fromuser,
          "touser":touser,
          "claim_no":claimNo,
          "wcab_no":wcabNo
      }
      return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'user/user-send-message', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
}