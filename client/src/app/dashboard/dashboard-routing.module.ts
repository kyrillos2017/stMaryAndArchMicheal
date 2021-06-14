import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLiveComponent } from './components/dashboard-live/dashboard-live.component';
import { DashboardLayoutComponent } from './shared/components/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
{
  path: '',
  component: DashboardLayoutComponent,
  children: [
    {
      path: 'live',
      component: DashboardLiveComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
