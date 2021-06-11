import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-church-services',
  templateUrl: './site-church-services.component.html',
  styleUrls: ['./site-church-services.component.scss']
})
export class SiteChurchServicesComponent implements OnInit {
  banner:string = 'http://boltoncopts.org/wp-content/uploads/2017/11/cropped-12779085_10153439604893951_2889210514726304878_o.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
