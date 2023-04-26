import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  constructor() {}

  @Input()
  event: any;

  @Output()
  eventClicked = new EventEmitter();

  ngOnInit(): void {}

  handleClickMe() {
    this.eventClicked.emit(this.event.name);
  }

  logFoo() {
    console.log('log Foo');
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
  }
}
