import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, Injector, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, map, switchMap } from 'rxjs/operators';
import { ImagesPopupComponent } from 'src/app/dashboard/shared/components/images-popup/images-popup.component';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { enumToArray, PriestlyRank, ToastrMessages } from 'src/app/shared/enums/enums';
import { FathersService } from './../../../../services/fathers.service';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-father-form',
  templateUrl: './dashboard-father-form.component.html',
  styleUrls: ['./dashboard-father-form.component.scss']
})
export class DashboardFatherFormComponent extends BaseComponent implements OnInit {
  // @ViewChild('imagesPopup') imagesPopup: ImagesPopupComponent;
  fatherForm: FormGroup;
  submitted = false;
  errors: string[];
  priestlyRankEnum = PriestlyRank
  priestlyRank: any[] = []

  constructor(
    injector: Injector,
    private formBuilder: FormBuilder,
    private _father: FathersService,
    private _toastr: ToastrsService,
    private _router: Router
    ) {
    super(injector)
    this.priestlyRank = enumToArray(this.priestlyRankEnum)
  }

  ngOnInit(): void {
    this.fatherFormInit()
    // this.getImg()
    // this.fatherForm.controls['firstName'].valueChanges.subscribe(console.log)
  }

  fatherFormInit() {
    this.fatherForm = this.formBuilder.group(
      {
        isActive: [true, Validators.required],
        name: [null, [Validators.required]],
        priestlyRank: [PriestlyRank.keseseia, [Validators.required]],
        priestlyDate: [null, [Validators.required]],
        isDead: [false],
        deathDate: [null],
        about: [''],
        imageId: [null, [Validators.required]],
        bannerId: [null],
        displayOrder: [1000],

      }
    )
  }
  get f() { return this.fatherForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.fatherForm.invalid) {
      return;
    }

    this._father.createFather(this.fatherForm.value)
    .pipe(
        finalize(()=> {this.submitted = false})
      ).subscribe(res=> {
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
        this._router.navigate(['/dashboard/fathers'])
      })

  }



  onReset() {
    this.submitted = false;
    this.fatherForm.reset();
  }

  onSelectImage(event: any, type: number) {
    switch (type) {
      case 1:
        this.fatherForm.controls['imageId'].patchValue(event.data.id)
        break;

      case 2:
        this.fatherForm.controls['bannerId'].patchValue(event.data.id)
        break;

      default:
        break;
    }
    // this.imagesPopup.hide();
  }

  // selectImage(event: Event) {
  //   this.imagesPopup.show(event)
  // }
}
