import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLandingComponent } from './components/site-landing/site-landing.component';
import { SiteHomeRoutingModule } from './site-home-routing.module';



@NgModule({
  declarations: [
    SiteLandingComponent
  ],
  imports: [
    CommonModule,
    SiteHomeRoutingModule
  ]
})
export class SiteHomeModule { }
