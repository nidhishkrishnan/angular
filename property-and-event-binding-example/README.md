# Property And Event Binding Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Property Binding (@Input) and Event Binding (@Output)

### server-create.component.ts - @Output
```
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

```
<button class="btn btn-primary btn-block" (click)="createNewServer()">Add Server</button>
```

### server-delete.component.ts - @Input and @Output

```
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

```
<button class="btn btn-sm btn-danger" (click)="deleteServer()" >X</button>
```

### app.component.ts - @Input and @Output
```
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

```
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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
