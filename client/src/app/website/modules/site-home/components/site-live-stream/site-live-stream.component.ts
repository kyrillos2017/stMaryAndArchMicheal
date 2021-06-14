import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-live-stream',
  templateUrl: './site-live-stream.component.html',
  styleUrls: ['./site-live-stream.component.scss']
})
export class SiteLiveStreamComponent implements OnInit, AfterViewInit {

  isActive = true;
  baseurl = 'https://www.youtube.com/embed/';
  videoId: string = 'kQobPqE0T5M';
  url: string;

  constructor() { }
  ngAfterViewInit(): void {
    this.getVideo()
  }

  ngOnInit(): void {
    
  }

  getVideo(){
    this.url = this.baseurl + this.videoId;
   document.getElementsByTagName('iframe')[0].setAttribute('src', this.url)
    // return url + this.videoId
  }
}
