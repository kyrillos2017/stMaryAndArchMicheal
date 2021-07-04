import { Injectable, Injector } from '@angular/core';
import { IFather, IFatherParams } from '../shared/models/father';
import { IPagination } from '../shared/models/response-result';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class FathersService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector)
  }

  getFathers(fatherParams?: IFatherParams){
    let url = ApiUrls.FATHERS.MAIN;
    if(fatherParams){
      let params = this.toQueryString(fatherParams)
      url += `?${params}`
    }
    return this.get<IPagination<IFather>>(url);
  }
}
