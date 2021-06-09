import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-site-videos-carousel',
  templateUrl: './site-videos-carousel.component.html',
  styleUrls: ['./site-videos-carousel.component.scss']
})
export class SiteVideosCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videos = [
    {path: "https://youtu.be/sy1pWAC-JoI"},
    {path: "https://youtu.be/sy1pWAC-JoI"},
  ]

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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
    nav: true
  }

}
