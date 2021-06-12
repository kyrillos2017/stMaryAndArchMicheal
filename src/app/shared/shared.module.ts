import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {GalleriaModule} from 'primeng/galleria';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { SkeletonModule } from 'primeng/skeleton';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgImageFullscreenViewModule,
    SkeletonModule,
    ButtonModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    GalleriaModule,
    NgImageFullscreenViewModule,
    SkeletonModule,
    ButtonModule
  ]
})
export class SharedModule { }
