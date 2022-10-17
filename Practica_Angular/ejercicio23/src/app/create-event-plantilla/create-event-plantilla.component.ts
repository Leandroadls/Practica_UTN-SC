import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-event-plantilla',
  templateUrl: './create-event-plantilla.component.html',
  styleUrls: ['./create-event-plantilla.component.css']
})
export class CreateEventPlantillaComponent implements OnInit {
  
  myForm = {
		name: "",
		date: "",
		time: "",
		location: {
			address: "",
			city: "",
			country: "",
		},
	};

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(): void {
		this.eventService.saveEvent(this.myForm);
		this.router.navigate(["/events"]);
	}
	cancel() {
		this.router.navigate(["/events"]);
	}
}
