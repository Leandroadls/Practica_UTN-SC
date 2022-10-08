import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventService } from './event.service';



@Injectable({
  providedIn: 'root'
})
export class ValidateRouteGuard implements CanActivate, CanDeactivate<EventDetailsComponent> {

  constructor(private eventService: EventService) { }

  canDeactivate
  (
    component: EventDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.reviewed;

      throw new Error('Method not implemented.');

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !(!this.eventService.getEvent(+next.paramMap.get('eventId')));
  }
}



