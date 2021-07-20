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
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardLiveComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'live',
        component: DashboardLiveComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'fathers',
        component: DashboardFathersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new-father',
        component: DashboardFatherFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'father/:id',
        component: DashboardFatherFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'masses',
        component: DashboardMassesListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'mass-form',
        component: DashbordMassesFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'mass-form/:id',
        component: DashbordMassesFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'about-curch',
        component: DashboardAboutChurchComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'services',
        component: DashboardServicesListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'service-form',
        component: DashboardServicesFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'service-form/:id',
        component: DashboardServicesFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'meetings',
        component: ChurchMeetingsListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'meeting-form',
        component: ChurchMeetingsFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'meeting-form/:id',
        component: ChurchMeetingsFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'gallery',
        component: GalleryListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'gallery-form',
        component: GalleryFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'gallery-form/:id',
        component: GalleryFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'sections',
        component: SectionsListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'section-form',
        component: SectionsFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'section-form/:id',
        component: SectionsFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'ads',
        component: AdsListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'ad-form',
        component: AdFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'ad-form/:id',
        component: AdFormComponent,
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
