import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/services/DataService';
import {Student} from '../shared/model/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  students: Student[];

  constructor(private dataService: DataService ) {
  }

  ngOnInit() {
    this.students = this.dataService.getAllStudents();
    this.dataService.studentsAdded.subscribe(
      (studentDetails: Student[]) => {
        this.students = studentDetails;
      });
  }
}
