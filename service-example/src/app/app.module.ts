import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './shared/services/LoggerService';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DataService } from './shared/services/DataService';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
