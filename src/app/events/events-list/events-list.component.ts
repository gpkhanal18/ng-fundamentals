import { Component, OnInit } from '@angular/core';
import { EVENTS } from 'src/app/constants/constants';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  events = EVENTS; // from app constants.

  constructor() {}

  ngOnInit(): void {}

  handleEventClicked(data) {
    console.log(data);
  }
}
