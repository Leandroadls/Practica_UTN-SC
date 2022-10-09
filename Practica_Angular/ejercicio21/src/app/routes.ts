import { Routes } from '@angular/router'

import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventDetailsActivatorService } from './event-details-activator.service'
import { ResolveService } from './resolve.service';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:eventId',
        component: EventDetailsComponent, 
        resolve: {event: ResolveService},
        canActivate: [EventDetailsActivatorService]
    },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
];

