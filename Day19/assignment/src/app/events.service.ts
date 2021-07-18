import { Injectable } from "@angular/core";

@Injectable()
export class EventService {
    events = [
        {
            id: 0,
            name: "Dance",
            location: "Delhi",
            date: "2021-08-12",
            time: "18:00"
        },
        {
            id: 1,
            name: "Debate",
            location: "Bangalore",
            date: "2021-09-12",
            time: "18:00"
        }
    ]

    addEvent(obj) {
        this.events.push(obj)
        console.log("new event created!");
    }
}