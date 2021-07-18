import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../events.service';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    @Input() event: {id: number, name: string, location: string, date: string, time: string};

    constructor(private eventService: EventService) { }

    UpdateEvent(id: number, date: string) {
        this.eventService.events[id].date = date;
    }

    ngOnInit(): void {
    }
}
