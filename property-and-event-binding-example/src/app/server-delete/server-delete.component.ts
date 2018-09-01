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
