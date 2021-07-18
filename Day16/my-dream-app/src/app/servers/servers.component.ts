import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    serverID = 10;
    serverStatus = 'offline'

    servers = [
        {
            serverId: 1,
            serverName: 'server1',
            serverAvailability: true
        },
        {
            serverId: 2,
            serverName: 'server2',
            serverAvailability: false
        },
        {
            serverId: 3,
            serverName: 'server3',
            serverAvailability: true
        }
    ]

    constructor() { }

    getStatus() {
        return 'online';
    }

    ngOnInit(): void {
    }

}
