import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFathersComponent } from './components/Fathers/dashboard-fathers/dashboard-fathers.component';
import { DashboardLiveComponent } from './components/dashboard-live/dashboard-live.component';
import { DashboardLayoutComponent } from './shared/components/dashboard-layout/dashboard-layout.component';
import { DashboardMassesListComponent } from './components/masses/dashboard-masses-list/dashboard-masses-list.component';
import { DashboardFatherFormComponent } from './components/Fathers/dashboard-father-form/dashboard-father-form.component';
import { DashbordMassesFormComponent } from './components/masses/dashbord-masses-form/dashbord-masses-form.component';
import { DashboardAboutChurchComponent } from './components/dashboard-about-church/dashboard-about-church.component';
import { DashboardServicesListComponent } from './components/church-services/dashboard-services-list/dashboard-services-list.component';
import { DashboardServicesFormComponent } from './components/church-services/dashboard-services-form/dashboard-services-form.component';
import { ChurchMeetingsListComponent } from './components/meetings/church-meetings-list/church-meetings-list.component';
import { ChurchMeetingsFormComponent } from './components/meetings/church-meetings-form/church-meetings-form.component';
import { GalleryListComponent } from './components/gallery/gallery-list/gallery-list.component';
import { GalleryFormComponent } from './components/gallery/gallery-form/gallery-form.component';
import { SectionsListComponent } from './components/sections/sections-list/sections-list.component';
import { SectionsFormComponent } from './components/sections/sections-form/sections-form.component';
import { AdsListComponent } from './components/ads/ads-list/ads-list.component';
import { AdFormComponent } from './components/ads/ad-form/ad-form.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardLiveComponent
      },
      {
        path: 'live',
        component: DashboardLiveComponent
      },
      {
        path: 'fathers',
        component: DashboardFathersComponent
      },
      {
        path: 'new-father',
        component: DashboardFatherFormComponent
      },
      {
        path: 'father/:id',
        component: DashboardFatherFormComponent
      },
      {
        path: 'masses',
        component: DashboardMassesListComponent
      },
      {
        path: 'mass-form',
        component: DashbordMassesFormComponent
      },
      {
        path: 'mass-form/:id',
        component: DashbordMassesFormComponent
      },
      {
        path: 'about-curch',
        component: DashboardAboutChurchComponent
      },
      {
        path: 'services',
        component: DashboardServicesListComponent
      },
      {
        path: 'service-form',
        component: DashboardServicesFormComponent
      },
      {
        path: 'service-form/:id',
        component: DashboardServicesFormComponent
      },
      {
        path: 'meetings',
        component: ChurchMeetingsListComponent
      },
      {
        path: 'meeting-form',
        component: ChurchMeetingsFormComponent
      },
      {
        path: 'meeting-form/:id',
        component: ChurchMeetingsFormComponent
      },
      {
        path: 'gallery',
        component: GalleryListComponent
      },
      {
        path: 'gallery-form',
        component: GalleryFormComponent
      },
      {
        path: 'gallery-form/:id',
        component: GalleryFormComponent
      },
      {
        path: 'sections',
        component: SectionsListComponent
      },
      {
        path: 'section-form',
        component: SectionsFormComponent
      },
      {
        path: 'section-form/:id',
        component: SectionsFormComponent
      },
      {
        path: 'ads',
        component: AdsListComponent
      },
      {
        path: 'ad-form',
        component: AdFormComponent
      },
      {
        path: 'ad-form/:id',
        component: AdFormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
