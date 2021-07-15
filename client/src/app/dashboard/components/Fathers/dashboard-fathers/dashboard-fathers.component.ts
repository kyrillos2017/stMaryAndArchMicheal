import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { IFather, IFatherParams } from 'src/app/shared/models/father';
import { IMaterialsPagination } from 'src/app/shared/models/pagination';
import { IPagination } from 'src/app/shared/models/response-result';
import { FathersService } from './../../../../services/fathers.service';
import { ToastrsService } from 'src/app/core/services/toastrs.service';
import { ToastrMessages } from 'src/app/shared/enums/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-fathers',
  templateUrl: './dashboard-fathers.component.html',
  styleUrls: ['./dashboard-fathers.component.scss']
})
export class DashboardFathersComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'active' , 'actions'];

  fathers: IFather[]= [];
  tableInit = {
    first: 1,
    globalFilter: null,
    multiSortMeta: undefined,
    rows: 5,
    sortField: undefined,
    sortOrder: 1,
  };
  totalRecords :number;
  paginatorEvent: IMaterialsPagination = {
    length: 0,
    pageIndex: 1,
    pageSize: 5,
    previousPageIndex: 0}
  constructor(
    private _fathersService: FathersService,
    private confirmationService: ConfirmationService,
    private _toastr: ToastrsService,
    private _router: Router
  ){}
  ngOnInit(): void {
    this.getFather();
  }

  getFather(){
    let params: IFatherParams = {
      PageIndex: this.paginatorEvent.pageIndex,
      PageSize: this.paginatorEvent.pageSize
    }
    this._fathersService.getFathers(params).subscribe(
      (res: IPagination<IFather>) => {
        this.fathers = res.result
        this.totalRecords = res.count;
      }
    )
  }

  paginate(event: IMaterialsPagination){
    event.pageIndex += 1
    this.paginatorEvent = event;
    this.getFather()
  }

  delete(father: IFather){
    this.confirmationService.confirm({
      message: `هل تريد مسح ال${father.priestlyRank + ' ' + father.name}`,
      header: `تأكيد`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if(father.id)
        this._fathersService.delete(father.id).subscribe(()=> {
          this.getFather()
          this._toastr.addSingle(ToastrMessages.success,'تم الحذف', `تم حذال${father.priestlyRank + ' ' + father.name}`)
        },
        err => {
          this._toastr.addSingle(ToastrMessages.error,'خطأ داخلي', 'حدث خطأ بالنظام')
        })
      },
      reject: () => {
       // this.loading = false
      }
    });
  }

}
