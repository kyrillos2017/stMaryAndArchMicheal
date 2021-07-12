import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { IMasses } from 'src/app/shared/models/masses';
import { IPaginatorEvent } from 'src/app/shared/models/pagination';
import { IPagination } from 'src/app/shared/models/response-result';
import { MassesService } from './../../../../services/masses.service';
import { IMass } from './../../../../shared/models/masses';

@Component({
  selector: 'app-dashboard-masses-list',
  templateUrl: './dashboard-masses-list.component.html',
  styleUrls: ['./dashboard-masses-list.component.scss']
})
export class DashboardMassesListComponent extends BaseComponent implements OnInit {
  masses: IMass[]= [];
  tableInit = {
    first: 1,
    globalFilter: null,
    multiSortMeta: undefined,
    rows: 3,
    sortField: undefined,
    sortOrder: 1,
  };
  totalRecords :number;
  paginatorEvent: IPaginatorEvent = {page: 1, first: 0, rows: 5, pageCount: 1}

  massSecForm: FormGroup;
  submitted = false;
  constructor(
    injector: Injector,
    private _masses: MassesService,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService
    ) {
    super(injector);
  }

  ngOnInit(): void {
    this.massSecFormInit()
  }

  massSecFormInit() {
    this.massSecForm = this.formBuilder.group(
      {
        bannerId: [true, Validators.required]

      }
    )
  }
  get f() { return this.massSecForm.controls; };

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.massSecForm.invalid) {
      return;
    }

    this._masses.createOrUpdateSec(this.massSecForm.value)
    .pipe(
        finalize(()=> {this.submitted = false})
      ).subscribe(res=> {
        // display form values on success
        this._toastr.addSingle(ToastrMessages.success, 'تم', 'تم حفظ التغيرات بنجاح')
      })

  }

  getmassSec(event: LazyLoadEvent){

    this._masses.getAll().subscribe(
      (res: IMasses) => {
        this.masses = res.masses
        this.totalRecords = res.masses.length;
      }
    )
  }

  paginate(event: any){
    this.paginatorEvent = event;
    this.getmassSec(this.tableInit)
  }

  onSelectImage(event: any){
    console.log(event.data.id)
    this.massSecForm.controls['bannerId'].patchValue(event.data.id)
  }

}
