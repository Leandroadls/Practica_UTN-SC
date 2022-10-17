import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateEventPlantillaComponent } from './create-event-plantilla/create-event-plantilla.component';

const appRoutes:Routes = [                                               
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/newPlantilla', component: CreateEventPlantillaComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
