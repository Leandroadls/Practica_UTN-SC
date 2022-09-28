import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events;

  constructor(private service: EventService) {
    this.events = service.getEvents();
  }

  ngOnInit() {
  }

}
