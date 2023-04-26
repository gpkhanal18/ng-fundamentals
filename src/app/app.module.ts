import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EventsAppComponent} from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
