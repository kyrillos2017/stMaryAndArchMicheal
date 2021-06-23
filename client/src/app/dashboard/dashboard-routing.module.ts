import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardFathersComponent } from './components/Fathers/dashboard-fathers/dashboard-fathers.component';
import { DashboardLiveComponent } from './components/dashboard-live/dashboard-live.component';
import { DashboardLayoutComponent } from './shared/components/dashboard-layout/dashboard-layout.component';
import { DashboardFatherFormComponent } from './components/fathers/dashboard-father-form/dashboard-father-form.component';

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
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
