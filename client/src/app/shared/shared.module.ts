import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleriaModule } from 'primeng/galleria';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { TextInputComponent } from './components/text-input/text-input.component';
import { InputSwitchModule } from 'primeng/inputswitch';

// materials
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    TextInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgImageFullscreenViewModule,
    SkeletonModule,
    ButtonModule,
    InputSwitchModule,
    MatSliderModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    GalleriaModule,
    NgImageFullscreenViewModule,
    SkeletonModule,
    ButtonModule,
    InputSwitchModule,
    MatSliderModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule
  ]
})
export class SharedModule { }
