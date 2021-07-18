import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    newServerName = '';
    newServerContent = '';

    @Input() UserName;

    @Output() GreetMessage = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    onAddServer() {
        // this.serverElements.push({
        //   type: 'server',
        //   name: this.newServerName,
        //   content: this.newServerContent
        // });
    }

    onAddBlueprint() {
        // this.serverElements.push({
        //   type: 'blueprint',
        //   name: this.newServerName,
        //   content: this.newServerContent
        // });
    }
}
