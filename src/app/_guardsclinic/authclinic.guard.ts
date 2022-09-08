import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationclinicService } from '../_services/authenticationclinic.service';
import { Config } from '../constant';
@Injectable()
export class AuthclinicGuard implements CanActivate {
    constructor(
        private authclinicService: AuthenticationclinicService,
        private router: Router
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url: string): boolean {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser || !currentUser.id) {
            this.router.navigate(['/login']);
            return false; 
        }
        return true;
    }
}