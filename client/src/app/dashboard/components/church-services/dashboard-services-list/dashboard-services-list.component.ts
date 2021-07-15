import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { IServiceCreate } from 'src/app/shared/models/services';
import { ChurchServicesService } from './../../../../services/church-services.service';

@Component({
  selector: 'app-dashboard-services-list',
  templateUrl: './dashboard-services-list.component.html',
  styleUrls: ['./dashboard-services-list.component.scss']
})
export class DashboardServicesListComponent extends BaseComponent implements OnInit {
  totalRecords :number;

  displayedColumns: string[] = ['position', 'name'];
  services: IServiceCreate[]= [];

  constructor(
    injector: Injector,
    private _service: ChurchServicesService,
    private formBuilder: FormBuilder,
    private _toastr: ToastrsService
    ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getmassSec()
  }

  getmassSec(){
    this._service.getAll().subscribe(
      (res: IServiceCreate[]) => {
        console.log(res)
        this.services = res
        this.totalRecords = res.length;
      }
    )
  }

}
