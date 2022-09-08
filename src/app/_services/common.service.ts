import { Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Config }from '../constant';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class CommonService {
	httpOptions:any;
    currentUser: any;
    returnUrl: string;
    accessToken: string;
    constructor(
        private http: HttpClient, 
        private titleService: Title,  
        private router: Router, 
        private route: ActivatedRoute) { 
    }
    setPageTitle(pageTitle){
        this.titleService.setTitle(Config.APP_TITLE+Config.TITLE_SEPRATOR+pageTitle);
    }
    // getPageUrl(url){
    // 	return '/'+url;
    // }
    getHttpOptions(accessToken=null,appKey,subDomain=null,reqType=null){
        let httpOptions:any = {};
		//console.warn(Config.SUBDOMAIN);
		//console.warn(accessToken);
        subDomain = Config.SUBDOMAIN;
        if(accessToken && accessToken.length > 0 && reqType == 'image'){
			//console.warn("inside");
            accessToken = accessToken.replace(/(^"|"$)/g, '');
            httpOptions = {
                headers: new HttpHeaders({ 
                    //'Content-Type': 'application/json; charset=utf-8',
					//'Content-Type': undefined,
                    //'Accept': 'application/json',
                    'Authorization': 'Bearer '+accessToken,
                    'appkey': appKey,
					'subDomain': subDomain
                })
            };    
            return httpOptions;
        }else  if(accessToken && accessToken.length > 0){
			//console.warn("outside");
            accessToken = accessToken.replace(/(^"|"$)/g, '');
            httpOptions = {
                headers: new HttpHeaders({ 
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
					'Authorization': 'Bearer '+accessToken,
                    'appkey': appKey,
					'subDomain' : subDomain
                })
            };    
            return httpOptions;
        }else{
            httpOptions = {
                headers: new HttpHeaders({ 
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'appKey': appKey,
					'subDomain' : subDomain
                })
            };    
            return httpOptions;
        }
	}
    // reloadUrl(returnUrl){
    //     setTimeout(()=>{
    //         this.router.navigate([returnUrl])
    //     }, Config.PAGE_RELOAD_TIMEOUT_SECONDS);
    // }
    // checkLogin(){
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     let routerUrl = this.router.url;
    //     let returnUrl = routerUrl || '/';
    //     if (currentUser && currentUser.id) {
    //         if(routerUrl.includes(Config.LOGIN_URL) || routerUrl.includes(Config.FORGOT_PASSWORD_URL) || routerUrl.includes(Config.REGISTRATION_VERIFY_URL) || routerUrl.includes(Config.RESET_PASSWORD_URL)){
    //             this.router.navigate(['/']);
    //         }else{
    //             this.router.navigate([returnUrl]);
    //         }
    //     }else{
    //         if(!routerUrl.includes(Config.FORGOT_PASSWORD_URL) && !routerUrl.includes(Config.REGISTRATION_VERIFY_URL) && !routerUrl.includes(Config.RESET_PASSWORD_URL)){
    //             this.router.navigate([returnUrl+'login']);
    //         }
    //     }
    // }
    checkSuperAdminLogin(){
        let currentSuperAdmin = JSON.parse(localStorage.getItem('currentSuperAdmin'));
        let routerUrl = this.router.url;
        let returnUrl = routerUrl || '/';
        if (currentSuperAdmin && currentSuperAdmin.id) {
            if(routerUrl.includes('login') || routerUrl.includes('forgot-password') || routerUrl.includes('reset-password')){
                this.router.navigate(['/']);
            }else{
                this.router.navigate([returnUrl]);
            }
        }else{
            if(!routerUrl.includes('forgot-password') && !routerUrl.includes('reset-password')){
                this.router.navigate([returnUrl+'login']);
            }
        }
    }

    commonSuperAdminLogout(){
        localStorage.removeItem('currentSuperAdmin');
        localStorage.removeItem('currentSuperAdminToken');
        localStorage.clear();
        return true;
    }
    
    getLoggedInSuperAdminData(){
        return JSON.parse(localStorage.getItem('currentSuperAdmin'));
    }
	
	/************************** Clinic Module Service ******************/
	
	checkClinicLogin(){
        let currentClinic = JSON.parse(localStorage.getItem('currentClinic'));
        let routerUrl = this.router.url;
        let returnUrl = routerUrl || '/';
        if (currentClinic && currentClinic.id) {
            if(routerUrl.includes('login') || routerUrl.includes('forgot-password') || routerUrl.includes('reset-password')){
                this.router.navigate(['/']);
            }else{
                this.router.navigate([returnUrl]);
            }
        }else{
            if(!routerUrl.includes('forgot-password') && !routerUrl.includes('reset-password')){
                this.router.navigate([returnUrl+'login']);
            }
        }
    }

    commonClinicLogout(){
        localStorage.removeItem('currentClinic');
        localStorage.removeItem('currentClinicToken');
        localStorage.clear();
        return true;
    }
    
    getLoggedInClinicData(){
        return JSON.parse(localStorage.getItem('currentClinic'));
    }

    // getLoggedInUserData(){
    //     return JSON.parse(localStorage.getItem('currentUserDetails'));
    // }

    

    // commonLogout(){
    //     localStorage.removeItem('currentUser');
    //     localStorage.removeItem('currentUserDetails');
    //     localStorage.clear();
    //     return true;
    // }

    // getPageSizeOptions(){
    //     const pageSizeoptions = [5, 10, 20, 50, 100];
    //     return pageSizeoptions;  
    // }

    // getDefaultPageSize(){
    //     const defaultPageSize = Config.DEFAULT_PAGE_SIZE;
    //     return defaultPageSize;  
    // }
    // validateContactFile(file:any){
    //     if(file.type != Config.UPLOAD_CONTACT_VALID_FILE_FORMAT){
    //         return Config.CONTACT_FILE_FORMAT_VALIDATION_MESSAGE;
    //     }if(parseInt(file.size) > Config.UPLOAD_CONTACT_VALID_FILE_SIZE){
    //         return Config.CONTACT_FILE_SIZE_VALIDATION_MESSAGE;
    //     }
    //     return true;
    // }
    
    // validateFile(file:any){
    //     if(parseInt(file.size) > Config.UPLOAD_CONTACT_VALID_FILE_SIZE){
    //         return Config.CONTACT_FILE_SIZE_VALIDATION_MESSAGE;
    //     }
    //     return true;
    // }

    

    // checkAdmin(){
    //     let currentUserDetails = JSON.parse(localStorage.getItem('currentUserDetails'));
    //     // if(currentUserDetails && currentUserDetails.roleInfo && currentUserDetails.roleInfo.name && currentUserDetails.roleInfo.name == Config.ADMIN_STR){
    //     //     return true;
    //     // }
    //     return false;
    // }

    /*dateFormatForGetGroupLives(date){
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }*/
}