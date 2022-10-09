import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router/src/interfaces';
import { Observable } from 'rxjs';
import { EventService } from './event.service';


@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any> {
  constructor(private service: EventService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.service.getEvent(+route.paramMap.get('id'));
    }
}
