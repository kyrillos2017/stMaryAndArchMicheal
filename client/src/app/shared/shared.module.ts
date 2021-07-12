import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GalleriaModule } from 'primeng/galleria';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { TextInputComponent } from './components/text-input/text-input.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {TableModule} from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import {EditorModule} from 'primeng/editor';


// materials
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    TextInputComponent,
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
    MatInputModule,
    OverlayPanelModule,
    TableModule,
    PaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule,
    MatTabsModule
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
    MatInputModule,
    TextInputComponent,
    OverlayPanelModule,
    TableModule,
    PaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    EditorModule,
    MatTabsModule
  ],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextInputComponent), multi: true },
    MatDatepicker]
})
export class SharedModule { }
