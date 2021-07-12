import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './shared/components/dashboard-layout/dashboard-layout.component';
import { DashboardSidebarComponent } from './shared/components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './shared/components/dashboard-navbar/dashboard-navbar.component';
import { DashboardLiveComponent } from './components/dashboard-live/dashboard-live.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardFathersComponent } from './components/Fathers/dashboard-fathers/dashboard-fathers.component';
import { DashboardFatherFormComponent } from './components/fathers/dashboard-father-form/dashboard-father-form.component';
import { ImagesPopupComponent } from './shared/components/images-popup/images-popup.component';
import { DashbordMassesFormComponent } from './components/masses/dashbord-masses-form/dashbord-masses-form.component';
import { DashboardMassesListComponent } from './components/masses/dashboard-masses-list/dashboard-masses-list.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardSidebarComponent,
    DashboardNavbarComponent,
    DashboardLiveComponent,
    DashboardFathersComponent,
    DashboardFatherFormComponent,
    ImagesPopupComponent,
    DashbordMassesFormComponent,
    DashboardMassesListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
