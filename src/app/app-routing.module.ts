import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Config } from './constant';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuperAdminComponent } from './superadmin/superadmin.component';
import { ClinicComponent } from './clinic/clinic.component';
import { BlockUIPreventNavigation } from 'ng-block-ui/router';
const fullURL = (window.location.host).split('.');

var subDomain = '';
// console.log(`Full URL : ${fullURL}`);
// console.log(`Length of Full URL : ${fullURL.length}`);
// if(fullURL.length == 3){
//     subDomain = fullURL[0];
//     Config.SUBDOMAIN = 'medirecx_'+subDomain;
// }
//console.log(`Subdomain :${subDomain}`);
var subDomain = 'yashveer';
Config.SUBDOMAIN = 'medirecx_'+subDomain;

var routes: Routes = [];
if(subDomain !== ''){
    console.log('if');
    //routes.push({
    //    path: '404', 
    //    component: NotFoundComponent,
    //    canActivateChild: [BlockUIPreventNavigation],
    //    data: {
    //        title:Config.NOT_FOUND_TITLE
    //    }
    //});
    //routes.push({
    //    path: '**', 
    //    redirectTo: '/404'
    //});
    
    routes.push({
        path: '',
        redirectTo: '/clinic',
        pathMatch: 'full'
    });
    routes.push({
        path: 'clinic',
        loadChildren: () => import('./clinic/clinic.module').then(m => m.ClinicModule),
        data: { 
            title: Config.CLINIC_TITLE
        },
        canActivateChild: [BlockUIPreventNavigation],
    });
    routes.push({
        path: '404', 
        component: NotFoundComponent,
        canActivateChild: [BlockUIPreventNavigation],
        data: {
            title:Config.NOT_FOUND_TITLE
        }
    });
    routes.push({
        path: '**', 
        redirectTo: '404'
    });
}else{
    console.log('else');
    routes.push({
        path: '',
        redirectTo: '/superadmin',
        pathMatch: 'full'
    });
    routes.push({
        path: 'superadmin',
        loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperAdminModule),
        data: { 
            title: Config.SUPERADMIN_TITLE
        },
        canActivateChild: [BlockUIPreventNavigation],
    });
    routes.push({
        path: '404', 
        component: NotFoundComponent,
        canActivateChild: [BlockUIPreventNavigation],
        data: {
            title:Config.NOT_FOUND_TITLE
        }
    });
    routes.push({
        path: '**', 
        redirectTo: '/404'
    });
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
