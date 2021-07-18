import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import {SkeletonModule} from 'primeng/skeleton';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { TranslocoConfig, TranslocoModule, TRANSLOCO_CONFIG } from '@ngneat/transloco';
import { httpLoader } from './http-loader';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    SkeletonModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    // httpLoader,
    // {
    //   provide: TRANSLOCO_CONFIG,
    //   useValue: {
    //     availableLangs: ["en", "ar"],
    //     reRenderOnLangChange: true,
    //     fallbackLang: "ar",
    //     defaultLang: "ar"
    //   } as TranslocoConfig
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
