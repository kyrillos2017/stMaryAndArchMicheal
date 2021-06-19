import { Component, OnInit } from '@angular/core';
import { LiveService } from './../../shared/services/live.service';

@Component({
  selector: 'app-dashboard-live',
  templateUrl: './dashboard-live.component.html',
  styleUrls: ['./dashboard-live.component.scss']
})
export class DashboardLiveComponent implements OnInit {
  val:any;
  constructor(
    private _live: LiveService
  ) { }

  ngOnInit(): void {
    this._live.getLive().subscribe(console.log)
  }

  handleChange(e: any) {
    let isChecked = e.checked;
    console.log(e)
}

}
