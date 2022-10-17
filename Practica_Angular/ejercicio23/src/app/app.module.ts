import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEventPlantillaComponent } from './create-event-plantilla/create-event-plantilla.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent,
    CreateEventPlantillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
