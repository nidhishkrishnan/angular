import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/services/DataService';
import {Student} from '../shared/model/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  providers: [DataService],
})
export class StudentDetailsComponent implements OnInit {
  students: Student[];

  constructor(private dataService: DataService ) {
    this.dataService.studentsAdded.subscribe({
      next: (event: Student) => {
        console.log(`Received message #${event.name}: ${event.email}`);
      }
    });
  }

  ngOnInit() {
    this.students = this.dataService.getAllStudents();
    this.dataService.studentsAdded.subscribe(
      (studentDetails: Student[]) => {
        console.log('again........');
        this.students = studentDetails;
      });
  }

}
