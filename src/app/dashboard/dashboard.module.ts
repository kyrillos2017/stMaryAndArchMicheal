import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './shared/components/dashboard-layout/dashboard-layout.component';
import { DashboardSidebarComponent } from './shared/components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './shared/components/dashboard-navbar/dashboard-navbar.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardSidebarComponent,
    DashboardNavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
