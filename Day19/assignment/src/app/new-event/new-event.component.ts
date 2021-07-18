import { Component, OnInit } from '@angular/core';

import { EventService } from '../events.service';

@Component({
    selector: 'app-new-event',
    templateUrl: './new-event.component.html',
    styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
    constructor(private eventService: EventService) { }

    ngOnInit(): void {
    }

    CreateEvent(name, location, date, time) {
        let len = this.eventService.events.length;
        this.eventService.addEvent({id: len, name: name, location: location, date: date, time: time});
    }
}
