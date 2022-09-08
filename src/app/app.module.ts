import { BrowserModule, Title} from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './_helpers';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './not-found/not-found.component';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIRouterModule, BlockUIPreventNavigation } from 'ng-block-ui/router';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { BlockElementModule } from './block-element/block-element.module';
import { BlockTemplateComponent } from './block-template/block-template.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AdminAuthGuard } from './_guards';
import { AdminclinicAuthGuard } from './_guardsclinic';
import { CommonService } from './_services';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};
@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        BlockTemplateComponent,
        SpinnerComponent
    ],
	imports: [
		CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        AppRoutingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		PerfectScrollbarModule,
		BlockElementModule,
	    BlockUIModule.forRoot({
      		message: '',
            delayStop: 3000,
      		template: BlockTemplateComponent
    	}),
        BlockUIRouterModule.forRoot(),
        BlockUIHttpModule.forRoot({
            requestFilters: []
        })
    ],
	entryComponents: [
        BlockTemplateComponent
    ],
    providers: [
		{
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        Title,
        AdminAuthGuard,
        AdminclinicAuthGuard,
        CommonService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }