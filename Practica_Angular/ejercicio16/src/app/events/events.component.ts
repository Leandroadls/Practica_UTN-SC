import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = this.eventService.getEvents();
  
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

}
