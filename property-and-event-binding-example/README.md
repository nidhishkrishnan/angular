[**Working Demo**](https://stackblitz.com/edit/property-and-event-binding-example)

# Property And Event Binding Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Property Binding (@Input) and Event Binding (@Output)

### server-create.component.ts - @Output
```javascript
import {Component, EventEmitter, Output} from '@angular/core';
import {Servers} from '../shared/servers';

@Component({
  selector: 'app-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.css']
})
export class ServerCreateComponent {

  @Output('addNewServer') addNewServer = new EventEmitter<Servers>();
  private count = 1;

  constructor() { }

  public createNewServer() {
    const name = 'Server '+this.count;
    const desc = 'This is a test Server '+this.count;
    this.addNewServer.emit(new Servers(name, desc));
    this.count++;
  }
}
```

### server-create.component.html

```html
<button class="btn btn-primary btn-block" (click)="createNewServer()">Add Server</button>
```

### server-delete.component.ts - @Input and @Output

```javascript
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-server-delete',
  templateUrl: './server-delete.component.html',
  styleUrls: ['./server-delete.component.css']
})
export class ServerDeleteComponent implements OnInit {

  @Output('removeServer') removeServer = new EventEmitter<number>();
  @Input('serverIndex') serverIndex: number;

  constructor() { }

  deleteServer() {
    this.removeServer.emit(this.serverIndex);
  }

  public ngOnInit(): void {
  }
}
```

### server-delete.component.html

```html
<button class="btn btn-sm btn-danger" (click)="deleteServer()" >X</button>
```

### app.component.ts - @Input and @Output
```javascript
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
```

### app.component.html

```html
<div class="col-md-4 mt-2">
  <app-server-create (addNewServer)="addServer($event)"></app-server-create>
</div>

<div *ngFor="let server of servers; let index = index">
  <div class="col-md-4 mt-2">
    <div class="card">
      <div class="card-header">{{server.name}}</div>
      <div class="card-body">{{server.description}} <app-server-delete [serverIndex]="index" (removeServer)="deleteServer($event)"></app-server-delete></div>
    </div>
  </div>
</div>
```
