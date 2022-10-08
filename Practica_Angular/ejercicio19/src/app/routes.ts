import { Routes } from '@angular/router'

import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ValidateRouteGuard } from './validate-route.guard';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:eventId', component: EventDetailsComponent, canActivate: [ValidateRouteGuard] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];
