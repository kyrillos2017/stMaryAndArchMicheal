import { Injectable, Injector } from '@angular/core';
import { ILive } from 'src/app/shared/models/live';
import { ApiUrls } from 'src/app/shared/models/services-urls';
import { BaseService } from './../../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class LiveService extends BaseService {

  constructor(injector: Injector) {
    super(injector)
   }

   getLive(){
     const url = ApiUrls.LIVE.LIVE;
     return this.get<ILive>(url)
   }
}
