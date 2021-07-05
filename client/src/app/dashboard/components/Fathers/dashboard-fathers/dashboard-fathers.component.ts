import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { IFather, IFatherParams } from 'src/app/shared/models/father';
import { IPaginatorEvent } from 'src/app/shared/models/pagination';
import { IPagination } from 'src/app/shared/models/response-result';
import { FathersService } from './../../../../services/fathers.service';

@Component({
  selector: 'app-dashboard-fathers',
  templateUrl: './dashboard-fathers.component.html',
  styleUrls: ['./dashboard-fathers.component.scss']
})
export class DashboardFathersComponent implements OnInit {
  fathers: IFather[]= [];
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
  constructor(
    private _fathersService: FathersService
  ){}
  ngOnInit(): void {
  }

  getFather(event: LazyLoadEvent){
    let params: IFatherParams = {
      PageIndex: this.paginatorEvent.page? this.paginatorEvent.page +1: 1,
      PageSize: 3,
      Sort: event.sortField,
      Search: event.globalFilter,
    }
    this._fathersService.getFathers(params).subscribe(
      (res: IPagination<IFather>) => {
        this.fathers = res.result
        this.totalRecords = res.count;
      }
    )
  }

  paginate(event: any){
    console.log(event)
    this.paginatorEvent = event;
    this.getFather(this.tableInit)
  }

}
