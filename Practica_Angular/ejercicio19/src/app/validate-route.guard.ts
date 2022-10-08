import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';


@Injectable({
  providedIn: 'root'
})
export class ValidateRouteGuard implements CanActivate {
  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute
    ){ }
  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    return !(!this.eventService.getEvent(+next.paramMap.get('eventId')))
  }
}
