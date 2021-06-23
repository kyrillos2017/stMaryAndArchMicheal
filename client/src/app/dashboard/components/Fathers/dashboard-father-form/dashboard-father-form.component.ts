import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-father-form',
  templateUrl: './dashboard-father-form.component.html',
  styleUrls: ['./dashboard-father-form.component.scss']
})
export class DashboardFatherFormComponent implements OnInit {

  fatherForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fatherFormInit()
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

onReset() {
    this.submitted = false;
    this.fatherForm.reset();
}

}
