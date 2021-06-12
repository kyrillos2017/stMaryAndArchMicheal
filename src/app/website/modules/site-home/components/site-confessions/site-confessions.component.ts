import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-confessions',
  templateUrl: './site-confessions.component.html',
  styleUrls: ['./site-confessions.component.scss']
})
export class SiteConfessionsComponent implements OnInit {

  banner:string = 'http://boltoncopts.org/wp-content/uploads/2017/11/cropped-12779085_10153439604893951_2889210514726304878_o.jpg';
  constructor() { }

  ngOnInit(): void {
  }
  father= {
    name: 'بيشوي بسطا',
    priestlyRank: 'قمص',
    priestlyDate: '01-02-1111',
    deathDate : '',
    img: 'https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Priests/02-Beh-B-P/bbhg/www-st-takla-org--fr-bishoy-basta.jpg',
    events: {
      confession : [
        {
          day: 'الأحد',
          calender: [
            {
              startTime: '01:00 pm',
              endTime: '04:00 pm',
              place: 'المكتب',
              isActive: true
            },
            {
              startTime: '01:00 pm',
              endTime: '04:00 pm',
              place: 'المكتب',
              isActive: true
            }
          ]
        },
        {
          day: 'الأحد',
          calender: [
            {
              startTime: '01:00 pm',
              endTime: '04:00 pm',
              place: 'المكتب',
              isActive: true
            },
            {
              startTime: '01:00 pm',
              endTime: '04:00 pm',
              place: 'المكتب',
              isActive: true
            }
          ]
        }
      ]
    }
  }
}
