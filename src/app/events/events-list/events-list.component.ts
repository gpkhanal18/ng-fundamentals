import { Component, OnInit } from '@angular/core';
import { EVENT } from 'src/app/constants/constants';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  event1 = EVENT; // from app constants.

  constructor() {}

  ngOnInit(): void {}

  handleEventClicked(data) {
    console.log(data);
  }
}
