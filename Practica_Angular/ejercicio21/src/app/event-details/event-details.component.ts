import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResolveService } from '../resolve.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  reviewed: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private resolve: ResolveService) { }

  ngOnInit() {
    console.log(this.activatedRoute.data) 
    
    // this.activatedRoute.data.subscribe(({ event }) => {
    //   ;
    // })
  }

  toggleReviewed() {
    this.reviewed = !this.reviewed;
    console.log(this.reviewed);
  }

}
