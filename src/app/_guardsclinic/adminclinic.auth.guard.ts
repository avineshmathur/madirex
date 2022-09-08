import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Config } from '../constant';
@Injectable()
export class AdminclinicAuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url: string): boolean {
        let currentClinic = JSON.parse(localStorage.getItem('currentClinic'));
        if (!currentClinic || !currentClinic.id) {
            this.router.navigate(['/clinic/login']);
            return false;
        }
        return true;
    }
}