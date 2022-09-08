import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminAuthService } from '@app/_services';
import { AdminclinicAuthService } from '@app/_services';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private adminAuthService: AdminAuthService,
                private adminclinicAuthService: AdminclinicAuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                if(request["url"].indexOf('superadmin') !== -1){
                    this.adminAuthService.logout();
                }else if(request["url"].indexOf('clinic') !== -1){
                    this.adminclinicAuthService.logout();
                }else{
                    //this.authenticationService.logout();    
                }
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}