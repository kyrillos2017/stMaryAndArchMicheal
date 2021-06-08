import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SiteLayoutComponent } from './shared/components/site-layout/site-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SiteLayoutComponent],
  imports: [CommonModule, WebsiteRoutingModule, SharedModule],
})
export class WebsiteModule {}
