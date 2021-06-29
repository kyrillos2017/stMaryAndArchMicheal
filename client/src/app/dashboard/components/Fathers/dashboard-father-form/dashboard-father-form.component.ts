import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { ImageAssetsService } from './../../../../services/image-assets.service';

@Component({
  selector: 'app-dashboard-father-form',
  templateUrl: './dashboard-father-form.component.html',
  styleUrls: ['./dashboard-father-form.component.scss']
})
export class DashboardFatherFormComponent implements OnInit {

  fatherForm: FormGroup;
  submitted = false;
  errors: string[];

  constructor(private formBuilder: FormBuilder, private _img: ImageAssetsService) { }

  ngOnInit(): void {
    this.fatherFormInit()
    this.getImg()
    // this.fatherForm.controls['firstName'].valueChanges.subscribe(console.log)
  }

  fatherFormInit(){
    this.fatherForm = this.formBuilder.group(
      {
        // isActive:  [false, Validators.required],
        firstName: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
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

    // this._live.updateLive(this.liveForm.value).pipe(
    //   finalize(()=> {this.submitted = false})
    // ).subscribe(res=> {
    //   console.log(res)
    //   this.getVideo()
    //   // display form values on success
    //   this._toast.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
    //})

}

public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
public uploadFile = (files:any) => {
  if (files.length === 0) {
    return;
  }
  let fileToUpload = <File>files[0];
  const formData = new FormData();

  formData.set('file', fileToUpload, fileToUpload.name);
  // console.log(fileToUpload)
  console.log(formData)
  this._img.upload(formData)
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / (event.total?event.total: 0));
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
}



onReset() {
    this.submitted = false;
    this.fatherForm.reset();
}

img: any;
getImg(){
  this._img.getImg(1).subscribe(res => {
    this.img = res
    console.log(res)
  })
}

}
