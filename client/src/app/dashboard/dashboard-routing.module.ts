import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFathersComponent } from './components/Fathers/dashboard-fathers/dashboard-fathers.component';
import { DashboardLiveComponent } from './components/dashboard-live/dashboard-live.component';
import { DashboardLayoutComponent } from './shared/components/dashboard-layout/dashboard-layout.component';
import { DashboardMassesListComponent } from './components/masses/dashboard-masses-list/dashboard-masses-list.component';
import { DashboardFatherFormComponent } from './components/fathers/dashboard-father-form/dashboard-father-form.component';
import { DashbordMassesFormComponent } from './components/masses/dashbord-masses-form/dashbord-masses-form.component';
import { DashboardAboutChurchComponent } from './components/dashboard-about-church/dashboard-about-church.component';
import { DashboardServicesListComponent } from './components/church-services/dashboard-services-list/dashboard-services-list.component';
import { DashboardServicesFormComponent } from './components/church-services/dashboard-services-form/dashboard-services-form.component';
import { ChurchMeetingsListComponent } from './components/meetings/church-meetings-list/church-meetings-list.component';
import { ChurchMeetingsFormComponent } from './components/meetings/church-meetings-form/church-meetings-form.component';

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
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
