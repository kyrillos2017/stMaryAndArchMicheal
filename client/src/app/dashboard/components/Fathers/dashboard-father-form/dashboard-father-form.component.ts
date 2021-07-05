import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, Injector, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { ImagesPopupComponent } from 'src/app/dashboard/shared/components/images-popup/images-popup.component';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { enumToArray, PriestlyRank } from 'src/app/shared/enums/enums';
import { ImageAssetsService } from './../../../../services/image-assets.service';

@Component({
  selector: 'app-dashboard-father-form',
  templateUrl: './dashboard-father-form.component.html',
  styleUrls: ['./dashboard-father-form.component.scss']
})
export class DashboardFatherFormComponent extends BaseComponent implements OnInit {
  @ViewChild('imagesPopup') imagesPopup: ImagesPopupComponent;

  fatherForm: FormGroup;
  submitted = false;
  errors: string[];
  priestlyRankEnum = PriestlyRank
  priestlyRank: any[] = []

  constructor(injector: Injector,private formBuilder: FormBuilder) {
    super(injector)
    this.priestlyRank = enumToArray(this.priestlyRankEnum)
    console.log(this.priestlyRank)
   }

  ngOnInit(): void {
    this.fatherFormInit()
    // this.getImg()
    // this.fatherForm.controls['firstName'].valueChanges.subscribe(console.log)
  }

  fatherFormInit() {
    this.fatherForm = this.formBuilder.group(
      {
        isActive:  [false, Validators.required],
        name: [null, [Validators.required]],
        priestlyRank : [1, [Validators.required]],
        priestlyDate: [null, [Validators.required]],
        isDead: [false],
        deathDate: [null],
        about: [''],
        imgId: [null, [Validators.required]],
        bannerId: [null],
        displayOrder: [1000],

      }
    )
  }
  get f() { return this.fatherForm.controls; };

  onSubmit() {
    this.submitted = true;
    console.log(this.fatherForm.value)
    // stop here if form is invalid
    if (this.fatherForm.invalid) {
      return;
    }

    // this._live.updateLive(this.liveForm.value).pipe(
    //   finalize(()=> {this.submitted = false})
    // ).subscribe(res=> {
    //   console.log(res)
    //   this.getVideo()
    //   // display form values on success
    //   this._toast.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
    //})

  }



  onReset() {
    this.submitted = false;
    this.fatherForm.reset();
  }

  onSelectImage(event : any, type: number){
    console.log(event)
    switch (type) {
      case 1:
        this.fatherForm.controls['imgId'].patchValue(event.data.id)
        break;

        case 2:
        this.fatherForm.controls['bannerId'].patchValue(event.data.id)
        break;

      default:
        break;
    }
  }

  selectImage(event: Event){
    this.imagesPopup.show(event)
  }
}
