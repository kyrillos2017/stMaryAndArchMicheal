import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // bastek$: Observable<IBasket>
  // currentUser$: Observable<IUser>
  constructor(
    // private _basket: BasketService,
    // private _account: AccountService
  ) { }

  ngOnInit(): void {
    // this.bastek$ = this._basket.basket$
    // this.currentUser$ = this._account.currentUser$
  }

  logout(){
   // this._account.logout();
  }
}
