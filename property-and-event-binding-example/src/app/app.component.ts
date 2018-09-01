import {Component, OnInit} from '@angular/core';
import {Servers} from './shared/servers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  servers: Servers[] = [];

  public addServer(server: Servers) {
    this.servers.push(server);
  }

  public deleteServer(serverIndex: number) {
    this.servers.splice(serverIndex, 1);
  }

  public ngOnInit() {
  }
}


