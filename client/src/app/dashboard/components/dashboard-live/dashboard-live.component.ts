import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-live',
  templateUrl: './dashboard-live.component.html',
  styleUrls: ['./dashboard-live.component.scss']
})
export class DashboardLiveComponent implements OnInit {
  val:any;
  constructor() { }

  ngOnInit(): void {
  }

  handleChange(e: any) {
    let isChecked = e.checked;
    console.log(e)
}

}
