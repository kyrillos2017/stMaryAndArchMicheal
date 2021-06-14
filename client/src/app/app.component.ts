import { AfterViewInit, Component } from '@angular/core';
import { BusyService } from './core/services/busy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'stMaryAndArchMichael';
  constructor(private _busyService: BusyService){
   this._busyService.busy();
  }
  ngAfterViewInit(): void {
    this._busyService.idle()
  }
}
