import { Component, OnInit } from '@angular/core';

import { CustomerService } from './customer.services';
import { EventService } from './events.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    events = [];
    customers = [];

    constructor(private eventService: EventService, private customerService: CustomerService) {}

    ngOnInit() {
        this.events = this.eventService.events;
        this.customers = this.customerService.customers;
    }
}
