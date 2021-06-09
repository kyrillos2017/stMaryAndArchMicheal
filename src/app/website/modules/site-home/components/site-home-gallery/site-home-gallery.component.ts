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
  @Input() showMore = true;
  images: Image[] = [];
  ngOnInit(): void {
    this.getImages().then((images) => {
      console.log(images);
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
        console.log(data);
        return data;
      });
  }

}
