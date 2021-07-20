import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiUrls } from '../shared/models/services-urls';
import { BaseService } from './../shared/services/base.service';
import { IUser } from './../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  private currentUserSource = new ReplaySubject<IUser | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  private isAuthSource = new ReplaySubject<boolean>(1);
  isAuth$ = this.isAuthSource.asObservable();

  constructor(
    injector : Injector,
    private router: Router
  ) {
    super(injector)
   }


   loadCurrentUser(token: string){
    if(token === null){
      this.currentUserSource.next(null)
      return of(null)
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.get<IUser>(ApiUrls.ACCOUNT.ACCOUNT, headers).pipe(
       map((user:IUser) => {
         if(user){
           localStorage.setItem('token', user.token);
           this.currentUserSource.next(user);
         }
       })
    )
  }

  login(value: any){
   const url = ApiUrls.ACCOUNT.LOGIN
   return this.post<IUser>(url, value).pipe(
     map((user:IUser) => {
       if(user){
         localStorage.setItem('token', user.token);
         this.currentUserSource.next(user);
         if(user.token){
           this.isAuthSource.next(true)
         }else {
           this.isAuthSource.next(false)
         }
       }
     })
   )
  }

  // register(value: any){
  //   const url = ApiUrls.ACCOUNT.REGISTER
  //    return this.post<IUser>(url, value).pipe(
  //     map(user=> {
  //      if(user){
  //        localStorage.setItem('token', user.token);
  //        this.currentUserSource.next(user);
  //      }
  //     })
  //   )
  // }

  logout(){
   localStorage.removeItem('token');
   this.currentUserSource.next(null);
   this.router.navigateByUrl('/')
  }

  checkEmailExists(email: string) {
   let url = ApiUrls.ACCOUNT.CHECK_EMAIL
   let params = this.toQueryString({email})
   url += `?${params}`
   return this.get<boolean>(url);
 }

//  isAuth() {
//   let user: any
//   return this.currentUser$.pipe(map(res => {
//     if(res?.token){
//       return true
//     }
//     else{
//       return false
//     }
//   })).toPromise().then(res => console.log(res));

//   // console.log(user)
//   // return (user) ? true: false;
//  }
}
