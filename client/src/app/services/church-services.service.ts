import { Injectable, Injector } from '@angular/core';
import { IServiceCreate, IServiceDto } from '../shared/models/services';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ChurchServicesService extends BaseService {

  constructor(
    injector: Injector
  ) {
    super(injector)
   }

   getAll(){
    const url = ApiUrls.CHURCH_SERVICES.MAIN
    return this.get<IServiceCreate[]>(url)
   }

   createOrUpdate(service: IServiceCreate){
    const url = ApiUrls.CHURCH_SERVICES.MAIN
    return this.post<number>(url, service)
   }

   getById(id : number){
     const url = ApiUrls.CHURCH_SERVICES.GET_BY_ID + `?id=${id}`
     return this.get<IServiceCreate>(url);
   }
   delete(id: number){
    const url = ApiUrls.CHURCH_SERVICES.MAIN + `?id=${id}`
    return this.remove<IServiceDto>(url);
   }

}
