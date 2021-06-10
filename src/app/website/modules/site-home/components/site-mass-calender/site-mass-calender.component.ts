import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-mass-calender',
  templateUrl: './site-mass-calender.component.html',
  styleUrls: ['./site-mass-calender.component.scss'],
})
export class SiteMassCalenderComponent implements OnInit {
  @Input() showMore = false;

  banner:string = 'http://boltoncopts.org/wp-content/uploads/2017/11/cropped-12779085_10153439604893951_2889210514726304878_o.jpg';
  repeatedMasses = [
    {
      day: 'الأحد',
      events: [
        {
          name: 'القداس الأول',
          type: 'قداس',
          startTime: '8:00 am',
          endTime:'10:00 am',
          place: 'الدور الأرضي',
          isActive: true
        },
        {
          name: 'القداس الثاني',
          type: 'قداس',
          startTime: '9:00 am',
          endTime:'11:00 am',
          place: 'الدور الأول',
          isActive: true
        },
      ],
    },
    {
      day: 'الإثنين',
      events: [
        {
          name: 'عشية',
          type: 'عشية',
          startTime: '7:00 pm',
          endTime:'8:00 pm',
          place: 'الدور الأرضي',
          isActive: true
        },
      ],
    },

  ];

  nonRepeatedMasses = [
    {
      day: 'الأحد',
      order: 'الرابع',
      events: [
        {
          name: 'القداس الأول',
          type: 'قداس',
          startTime: '8:00 am',
          endTime:'10:00 am',
          place: 'الدور الأرضي',
          isActive: true
        },
      ],
    },
  ]

  specialDays = [
    {
      day: 'الأحد',
      date: '01-01-2022',
      events: [
        {
          name: 'القداس رأس السنة',
          type: 'قداس',
          startTime: '8:00 am',
          endTime:'10:00 am',
          place: 'الدور الأرضي',
          isActive: true
        },
      ],
    },
  ]
  constructor() {}

  ngOnInit(): void {}
}
