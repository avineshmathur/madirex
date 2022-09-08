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
export class BusinessService {
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
    
    getBusinessById(businessId: number) {
        let requestData = {
            "businessId":businessId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'business/get-business', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    businessUpdate( postData: any) {
        
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'business/edit-business', postData, this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN,'image'))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
        
    //businessUpdate(clinicname: string, firstname: string, lastname: string, emailaddress: string, phonenumber: string, address: string, zip: string, businessId: string) {
    //  let requestData = {
    //      "clinicname":clinicname,
    //      "firstname":firstname,
    //      "lastname":lastname,
    //      "emailaddress":emailaddress,
    //      "phonenumber":phonenumber,
    //      "address":address,
    //      "zip":zip,
    //      "businessid":businessId
    //  }
    //  //console.log(requestData);
    //  return new Promise((resolve, reject) => {
    //      this.http.post(Config.API_BASE_PATH+'business/edit-business', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
    //      .timeout(Config.TIMEOUT_SECONDS)
    //      .subscribe(res => {
    //          resolve(res);
    //      }, (err) => {
    //          reject(err);
    //      });
    //  });
    //}
    
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
    
}
