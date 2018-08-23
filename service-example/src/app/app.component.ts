import { Component } from '@angular/core';
import {Logger} from './shared/services/Logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private log:Logger) {
  }

  showLog() {
    this.log.log('Sample Logging :', '123');
    this.log.error('Sample Error Logging :', '456');
    this.log.info('Sample Info Logging :', '678');
    this.log.warn('Sample Warning Logging', '987');
  }
}
