import { BrowserModule } from '@angular/platform-browser' ;
import { NgModule } from '@angular/core';
import { EventsComponent } from './events/events.component';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '/', component: AppComponent },
  { path: 'events-list', component: EventsListComponent },
  { path: 'app-events', component: EventsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsComponent
  ],
  imports: [BrowserModule, [RouterModule.forRoot(appRoutes)]],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
