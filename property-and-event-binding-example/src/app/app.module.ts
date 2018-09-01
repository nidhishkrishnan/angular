import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServerCreateComponent} from './server-create/server-create.component';
import {ServerDeleteComponent} from './server-delete/server-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerCreateComponent,
    ServerDeleteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
