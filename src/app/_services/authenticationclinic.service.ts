import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationclinicService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

     login(email: string, password: string) {
     //let headers = new HttpHeaders();
     //headers = headers.append('Content-Type', 'application/json');
     //headers = headers.append('appkey', 'bXktZW4tcHJvLWRldmVsb3BtZW50LXNlY3JldC1rZXlAMjAxOSE=');
     //    return this.http.post<any>(`${environment.apiUrl}/superadmin/login`, { email, password },{ headers })
     //        .pipe(map(user => {
     //      
     //            // store user details and jwt token in local storage to keep user logged in between page refreshes
     //            localStorage.setItem('user', JSON.stringify(user));
     //            this.userSubject.next(user);
     //            return user;
     //        }));
     }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
    // forgotPassword(email: string) {
    //  console.log(email)
    //     // remove user from local storage to log user out
    //     let headers = new HttpHeaders();
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('appkey', 'bXktZW4tcHJvLWRldmVsb3BtZW50LXNlY3JldC1rZXlAMjAxOSE=');
    //     return this.http.post<any>(`${environment.apiUrl}/superadmin/forgot-password`, { email},{ headers })
    //         .pipe(map(res => {
    //             return res;
    //         }));
       
    // }
    
    
}