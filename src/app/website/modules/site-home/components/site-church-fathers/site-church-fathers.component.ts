import { AfterContentInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SiteConfessionsComponent } from './../site-confessions/site-confessions.component';

@Component({
  selector: 'app-site-church-fathers',
  templateUrl: './site-church-fathers.component.html',
  styleUrls: ['./site-church-fathers.component.scss']
})
export class SiteChurchFathersComponent implements OnInit {
  @Input() showMore = false;

  banner:string = 'http://boltoncopts.org/wp-content/uploads/2017/11/cropped-12779085_10153439604893951_2889210514726304878_o.jpg';
  constructor(
    private _router: Router,

  ) { }


  ngOnInit(): void {

  }

  bishop = {
    name: 'أنبا أنجيلوس',
    bishopType: "أسقف عام قطاع شبرا الشمالية",
    monasticDate: '01-02-1111',
    ordinationDate: '01-02-1111',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSMu47mafyh-hlHynd13Xmxp51ebRDhT11Q&usqp=CAU'
  }

  fathers = [
    {
      name: 'بيشوي بسطا',
      priestlyRank: 'قمص',
      priestlyDate: '01-02-1111',
      deathDate : '',
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    },
    {
      name: 'بيشوي بسطا',
      priestlyRank: 'قمص',
      priestlyDate: '01-02-1111',
      deathDate : '01:01:1223',
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    },
    {
      name: 'بيشوي بسطا',
      priestlyRank: 'قمص',
      priestlyDate: '01-02-1111',
      deathDate : undefined,
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    },
    {
      name: 'بيشوي بسطا',
      priestlyRank: 'قمص',
      priestlyDate: '01-02-1111',
      deathDate : undefined,
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    },
    {
      name: 'بيشوي بسطا',
      priestlyRank: 'قمص',
      priestlyDate: '01-02-1111',
      deathDate : undefined,
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    }
  ]


}
