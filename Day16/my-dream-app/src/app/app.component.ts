import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
  styles: [
    `
    h2 {
        color: red;
    }
    .text-white {
        color: white;
    }
    `
  ]
})
export class AppComponent {
  serverID = 10;
  serverStatus = '';
  name = 'Anthology';
  allowNewServers = true;
  sreverCreateStatus = "No Servers!"
  serverName = "";
  displayMessage = true;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'ofline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  createNewServer(): void {
    this.sreverCreateStatus = this.serverName + " was created!"
    this.displayMessage = false;
  }
  onInputUpdate(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
