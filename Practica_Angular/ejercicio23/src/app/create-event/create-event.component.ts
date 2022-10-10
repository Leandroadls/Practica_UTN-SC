import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private ef: FormBuilder, private eventService: EventService, private router: Router) { }

  eventForm = this.ef.group({
  name : [''],
  date : [''] ,
  time : [''] ,
  location : this.ef.group({
    address : [''],
    city : [''],
    country : [''],
    })
  }); 
  
  ngOnInit(): void {
   
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  onSubmit(){
    this.eventService.saveEvent(this.eventForm.value);
    this.router.navigate(["/events"]);
  }
}
