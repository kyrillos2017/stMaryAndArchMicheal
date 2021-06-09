import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLandingComponent } from './components/site-landing/site-landing.component';
import { SiteHomeRoutingModule } from './site-home-routing.module';
import { SiteIntroComponent } from './components/site-intro/site-intro.component';
import { SiteMassCalenderComponent } from './components/site-mass-calender/site-mass-calender.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SiteVideosCarouselComponent } from './components/site-videos-carousel/site-videos-carousel.component';
import { SiteChurchFathersComponent } from './components/site-church-fathers/site-church-fathers.component';
import { SiteAboutChurchComponent } from './components/site-about-church/site-about-church.component';



@NgModule({
  declarations: [
    SiteLandingComponent,
    SiteIntroComponent,
    SiteMassCalenderComponent,
    SiteVideosCarouselComponent,
    SiteChurchFathersComponent,
    SiteAboutChurchComponent
  ],
  imports: [
    CommonModule,
    SiteHomeRoutingModule,
    SharedModule
  ]
})
export class SiteHomeModule { }
