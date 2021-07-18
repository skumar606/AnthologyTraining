import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    username = "";
    isDisabled = true;
    currLink = window.location.href;
    success = 'success italic';
    hasError = true;
    greetMessage = '';

    errorClassObj = {
        'bg-danger': true,
        'text-white': true
    }

    paragraphStyleObj = {
        backgroundColor: 'red',
        color: 'white'
    }

    constructor() { }

    onInputUsername(event: Event): void {
        this.username = (<HTMLInputElement>event.target).value;
        if (this.username) {
            this.isDisabled = false;
        }
    }

    greetUser(): string {
        return `Hello ${this.username}`
    }

    onClick() {
        this.username = "";
    }

    clickHandler() {
        this.greetMessage = `Hello Sachin!`
    }

    ngOnInit(): void {
    }

}
