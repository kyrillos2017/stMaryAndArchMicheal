import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ICreateMeeting } from './../../../../shared/models/meetings';
import { MeetingsService } from './../../../../services/meetings.service';

@Component({
  selector: 'app-church-meetings-list',
  templateUrl: './church-meetings-list.component.html',
  styleUrls: ['./church-meetings-list.component.scss']
})
export class ChurchMeetingsListComponent extends BaseComponent implements OnInit {
  totalRecords :number;

  displayedColumns: string[] = ['position', 'name'];
  meetings: ICreateMeeting[]= [];
  constructor(
    injector: Injector,
    private _meeting: MeetingsService
  ) {
    super(injector)
  }


  ngOnInit(): void {
    this.getMeetings()
  }

  getMeetings(){
    this._meeting.getAll().subscribe(
      (res: ICreateMeeting[]) => {
        this.meetings = res
        this.totalRecords = res.length;
      }
    )
  }

}
