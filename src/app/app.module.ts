import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {InterceptorInterceptor} from "./shared/interceptor.interceptor";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true

  },
    {provide: MAT_DATE_LOCALE, useValue: 'en-IN'},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
