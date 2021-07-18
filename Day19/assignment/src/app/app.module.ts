import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { NewEventComponent } from './new-event/new-event.component';

import { EventService } from './events.service';
import { CustomerService } from './customer.services';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
