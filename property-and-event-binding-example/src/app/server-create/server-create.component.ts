import {Component, EventEmitter, Output} from '@angular/core';
import {Servers} from '../shared/servers';

@Component({
  selector: 'app-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.css']
})
export class ServerCreateComponent {

  @Output() addNewServer = new EventEmitter<Servers>();
  private count = 1;

  constructor() { }

  public createNewServer() {
    const name = 'Server '+this.count;
    const desc = 'This is a test Server '+this.count;
    this.addNewServer.emit(new Servers(name, desc));
    this.count++;
  }
}
