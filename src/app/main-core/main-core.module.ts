import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ServerErrorComponent } from './components/errors/server-error/server-error.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';


@NgModule({
  declarations: [NavbarComponent, ServerErrorComponent, NotFoundComponent],
  imports: [
CommonModule,
    RouterModule,

  ],
  providers:[],
  exports: [
    NavbarComponent
  ]
})
export class MainCoreModule { }
