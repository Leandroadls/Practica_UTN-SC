import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() quantity: number = 0;
  squaredQuantity: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    this.squaredQuantity = Math.pow( this.quantity, 2);
  }

  constructor() { }

  ngOnInit() {
  }

}
