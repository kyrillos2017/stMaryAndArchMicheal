import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-site-events-carousel',
  templateUrl: './site-events-carousel.component.html',
  styleUrls: ['./site-events-carousel.component.scss']
})
export class SiteEventsCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banners = [
    {
      src: 'https://egyptianstreets.com/wp-content/uploads/2019/02/church.v1.jpg'
    },
    {
      src: 'https://i.ytimg.com/vi/HjqDIHaW-tI/maxresdefault.jpg'
    }
  ];
  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

}
