import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LiveService } from './../../../../../dashboard/shared/services/live.service';

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

  constructor(private _liveService: LiveService) { }
  ngAfterViewInit(): void {
    this.getVideo()
  }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  getVideo() {

    this._liveService.getLive().subscribe(res => {
      if (res) {
        this.isActive = res.isActive
        let vid: string = res.videoId
        if (vid.includes('http')) {
          vid = vid.split("?v=")[1]
          if (vid.includes("&list")) {
            vid = vid.split("&list")[0]
          }
        }
        this.url = this.baseurl + vid;
        document.getElementsByTagName('iframe')[0].setAttribute('src', this.url)
      }
    })
=======
  getVideo(){
    this.url = this.baseurl + this.videoId;
    document.getElementsByTagName('iframe')[0].setAttribute('src', this.url)
    // this._liveService.getLive().subscribe(res => {
    //   if(res) {
    //     this.isActive = res.isActive
    //     this.url = this.baseurl + res.videoId;
    //     document.getElementsByTagName('iframe')[0].setAttribute('src', this.url)
    //   }
    // })
    // return url + this.videoId
>>>>>>> master
  }
}
