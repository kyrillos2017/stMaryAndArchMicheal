import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from '../../shared/components/site-layout/site-layout.component';
import { SiteAboutChurchComponent } from './components/site-about-church/site-about-church.component';
import { SiteChurchServicesComponent } from './components/site-church-services/site-church-services.component';
import { SiteConfessionsComponent } from './components/site-confessions/site-confessions.component';
import { SiteHomeGalleryComponent } from './components/site-home-gallery/site-home-gallery.component';
import { SiteLandingComponent } from './components/site-landing/site-landing.component';
import { SiteMassCalenderComponent } from './components/site-mass-calender/site-mass-calender.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        component: SiteLandingComponent
      },
      {
        path: 'masses',
        component: SiteMassCalenderComponent
      },
      {
        path: 'about-church',
        component: SiteAboutChurchComponent
      },
      {
        path: 'gallery',
        component: SiteHomeGalleryComponent
      },
      {
        path: 'confession/:id',
        component: SiteConfessionsComponent
      },
      {
        path: 'church-service/:id',
        component: SiteChurchServicesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteHomeRoutingModule { }
