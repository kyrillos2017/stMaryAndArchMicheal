import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { DaysEnum } from 'src/app/shared/enums/days-enum';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { MeetingsService } from './../../../../services/meetings.service';


@Component({
  selector: 'app-church-meetings-form',
  templateUrl: './church-meetings-form.component.html',
  styleUrls: ['./church-meetings-form.component.scss']
})
export class ChurchMeetingsFormComponent extends BaseComponent implements OnInit {


  meetingForm: FormGroup;
  submitted = false;
  constructor(
    injector: Injector,
    private _meeting: MeetingsService,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService
    ) {
    super(injector);
  }

  ngOnInit(): void {
    this.meetingFormInit()
  }

  meetingFormInit() {
    this.meetingForm = this.formBuilder.group(
      {
        id: [null],
        name: [null, Validators.required],
        grade: [null, Validators.required],
        displayOrder: [1000],
        day: [DaysEnum.Friday, Validators.required],
        isActive: [true],
        startTime: [null, Validators.required],
        endTime: [null, Validators.required],
        place: [null, Validators.required],
      }
    )
  }
  get f() { return this.meetingForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.meetingForm.invalid) {
      return;
    }

    this._meeting
    .createOrUpdate(this.meetingForm.value)
    .pipe(
        finalize(()=> {this.submitted = false})
      ).subscribe(res=> {
        // display form values on success
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
        this.meetingForm.reset();
      })

  }

}
