import {Component, Injectable, OnInit} from '@angular/core';
import {DataService} from '../shared/services/DataService';
import {Student} from '../shared/model/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [DataService],
})
export class StudentComponent implements OnInit {
  student: Student = new Student('','','');

  constructor(private dataService: DataService) { }

  addStudent(newStudent: Student) {
    this.dataService.addStudents(newStudent);
    this.student = new Student('','','');
  }

  ngOnInit() {
  }

}

