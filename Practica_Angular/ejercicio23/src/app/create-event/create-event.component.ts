import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private ef: FormBuilder, private eventService: EventService, private router: Router) { }

  eventForm = this.ef.group({
  name : ['', Validators.required],
  date : ['', Validators.required] ,
  time : ['', Validators.required] ,
  location : this.ef.group({
    address : ['', Validators.required],
    city : ['', Validators.required],
    country : ['', Validators.required],
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

  validField(field: string) {
    return this.eventForm.get(field)?.invalid
    && this.eventForm.get(field)?.touched
  
}
}
