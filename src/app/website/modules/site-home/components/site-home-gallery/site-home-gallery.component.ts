import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

interface Image {
  previewImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}
@Component({
  selector: 'app-site-home-gallery',
  templateUrl: './site-home-gallery.component.html',
  styleUrls: ['./site-home-gallery.component.scss'],
})
export class SiteHomeGalleryComponent implements OnInit {
  constructor(private http: HttpClient) {}
  @Input() showMore = false;
  banner:string = 'http://boltoncopts.org/wp-content/uploads/2017/11/cropped-12779085_10153439604893951_2889210514726304878_o.jpg';
  images: Image[] = [];
  ngOnInit(): void {
    this.getImages().then((images) => {
      this.images = images;
    });
  }
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  getImages() {
    return this.http
      .get<any>('/assets/images.json')
      .toPromise()
      .then((res) => <Image[]>res.data)
      .then((data) => {
        return data;
      });
  }

}
