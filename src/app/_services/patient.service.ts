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
export class PatientService {
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
  
    getDoctors() {
      return new Promise((resolve, reject) => {
          this.http.get(Config.API_BASE_PATH+'patient/list-doctors', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              //console.log(res);
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    getStatus() {
        return new Promise((resolve, reject) => {
            this.http.get(Config.API_BASE_PATH+'patient/list-status', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                //console.log(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
      }
    
    getMedpros() {
      return new Promise((resolve, reject) => {
          this.http.get(Config.API_BASE_PATH+'patient/list-medpros', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              //console.log(res);
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    
    patientRegister(firstName: string, lastName:string, dateOfBirth: string, contctInfo: string,wcabNo: string,claimNo:string,appAttorney: string,employer: string,defAttorney: string, doctorId:string,medproId: string,supplementaryWcabno:string | null) {
        let requestData = {
            "first_name":firstName,
            "last_name":lastName,
            "date_of_birth":dateOfBirth,
            "contact_info":contctInfo,
            "case_no":wcabNo,
            "claim_no":claimNo,
            "applicant_attorney":appAttorney,
            "employer":employer,
            "defendant_attorney":defAttorney,
            "doctor_id":doctorId,
            "medpro_id":medproId,
            "supplementary_wcabno":supplementaryWcabno
        }
        //console.warn(requestData);
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'patient/add-patient', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
              console.log(res);
                resolve(res);
            }, (err) => {
              console.log(err);
                reject(err);
            });
        });
    }
    patientRegisternew( postData: any) {
       
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'patient/add-patient', postData, this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN,'image'))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
              console.log(res);
                resolve(res);
            }, (err) => {
              console.log(err);
                reject(err);
            });
        });
    }
    saveQmrData( postData: any) {
        
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'add-qmr', postData, this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN,'image'))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    getQmrByClaimId(claimId: number) {
        let requestData = {
            "claimId":claimId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'get-qmr-detail', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
   
    getClaims(roleId: number) {
      let requestData = {
            "roleId":roleId
        }
       // console.log(roleId);
      return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'patient/list-claims', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              //console.log(res);
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    
    getArchivedClaims() {  //console.log(Config.SUBDOMAIN); 
      return new Promise((resolve, reject) => {
          this.http.get(Config.API_BASE_PATH+'patient/list-archived-claims', this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              //console.log(res);
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    
    getClaimById(claimId: number) {
        let requestData = {
            "claimId":claimId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'patient/get-claim-detail', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    addDocument( postData: any) {
      //console.log(postData);
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'patient/add-document', postData, this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN,'image'))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    getDocumentsByClaimId(claimId: number) {
        let requestData = {
            "claimId":claimId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'patient/list-document', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    claimUpdate(firstName: string, lastName: string, contactInfo: string, appAttorney: string, employer: string, defAttorney: string, patientId: string,dateOfBirth:string) {
      let requestData = {
          "firstName":firstName,
          "lastName":lastName,
          "contactInfo":contactInfo,
          "appAttorney":appAttorney,
          "employer":employer,
          "defAttorney":defAttorney,
          "patientId":patientId,
          "date_of_birth":dateOfBirth
      }
      //console.log(requestData);
      return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'patient/edit-patient', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
      });
    }
    
    deleteClaim(id: number) {      
      let requestData = {
          "id":id
      }      
      return new Promise((resolve, reject) => {
        this.http.post(Config.API_BASE_PATH+'patient/delete-claim', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
      });
    }
    
    updateClaimStatus(id: number, roleId: number, claimId: number) {      
      let requestData = {
          "userId":id,
          "roleId":roleId,
          "claimId":claimId
      }      
      return new Promise((resolve, reject) => {
        this.http.post(Config.API_BASE_PATH+'patient/update-claim-status', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
      });
    }
    updateClaimStatusbyClaimId(claimId: number,Status:string) {      
        let requestData = {
            "status":Status,
            "claimId":claimId
        }      
        return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'patient/update-status-claimId', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
        });
      }
    deleteDocument(id: number) {      
      let requestData = {
          "id":id
      }      
      return new Promise((resolve, reject) => {
        this.http.post(Config.API_BASE_PATH+'patient/delete-document', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
      });
    }
    
    getDocumentById(documentId: number) {
        let requestData = {
            "documentId":documentId
        }
        return new Promise((resolve, reject) => {
            this.http.post(Config.API_BASE_PATH+'patient/get-document-detail', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
            .timeout(Config.TIMEOUT_SECONDS)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    
    documentUpdate(documentNote: string, expectedDate: string, documentId: string) {
      let requestData = {
          "documentNote":documentNote,
          "expectedDate":expectedDate,
          "documentId":documentId
      }
      //console.log(requestData);
      return new Promise((resolve, reject) => {
          this.http.post(Config.API_BASE_PATH+'patient/edit-document', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
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
          "documentId":id
      }      
      return new Promise((resolve, reject) => {
        this.http.post(Config.API_BASE_PATH+'patient/update-document-status', JSON.stringify(requestData), this.commonService.getHttpOptions(localStorage.getItem('currentClinicToken'),Config.API_OTHERS_KEY,Config.SUBDOMAIN))
          .timeout(Config.TIMEOUT_SECONDS)
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
      });
    }
    
    
}
