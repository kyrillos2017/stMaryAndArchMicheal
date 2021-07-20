import { Component, Injector, Input, OnInit } from '@angular/core';
import { MassesService } from 'src/app/services/masses.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { IMasses } from 'src/app/shared/models/masses';

@Component({
  selector: 'app-site-mass-calender',
  templateUrl: './site-mass-calender.component.html',
  styleUrls: ['./site-mass-calender.component.scss'],
})
export class SiteMassCalenderComponent extends BaseComponent implements OnInit {
  @Input() showMore = false;
  @Input() isWhite = false;

  banner:string
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
  constructor(
    injector: Injector,
    private _mass: MassesService
  ) {
    super(injector)

  }

  ngOnInit(): void {
    this.getMasses()
  }

  masses: any
  getMasses(){
    this._mass.getAll().subscribe((res: IMasses) => {
      this.banner = res.banner.imgUrl;
      this.masses = this.groupBy(res.mass, 'massRepetationType')
      console.log(this.masses)
    })
  }
}
