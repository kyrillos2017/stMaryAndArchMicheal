import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageAssetsService {

  constructor(private http: HttpClient){}


  upload(file: any){
    const url = "https://localhost:5001/api/ImageAssets";
    console.log("s")
    return this.http.post(url, file, {reportProgress: true, observe: 'events'})
  }
}
