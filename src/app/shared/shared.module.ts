import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,

  ]
})
export class SharedModule { }
