import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-church-fathers',
  templateUrl: './site-church-fathers.component.html',
  styleUrls: ['./site-church-fathers.component.scss']
})
export class SiteChurchFathersComponent implements OnInit {

  constructor() { }

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
      deathDate : null,
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    },
    {
      name: 'بيشوي بسطا',
      priestlyRank: 'قمص',
      priestlyDate: '01-02-1111',
      deathDate : null,
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    },
    {
      name: 'بيشوي بسطا',
      priestlyRank: 'قمص',
      priestlyDate: '01-02-1111',
      deathDate : null,
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    },
    {
      name: 'بيشوي بسطا',
      priestlyRank: 'قمص',
      priestlyDate: '01-02-1111',
      deathDate : null,
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    },
    {
      name: 'بيشوي بسطا',
      priestlyRank: 'قمص',
      priestlyDate: '01-02-1111',
      deathDate : null,
      img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg'
    }
  ]

}
