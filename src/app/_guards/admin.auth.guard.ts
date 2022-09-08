import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Config } from '../constant';
@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url: string): boolean {
        let currentSuperAdmin = JSON.parse(localStorage.getItem('currentSuperAdmin'));
        if (!currentSuperAdmin || !currentSuperAdmin.id) {
            this.router.navigate(['/superadmin/login']);
            return false;
        }
        return true;
    }
}