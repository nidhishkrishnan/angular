import {EventEmitter, Injectable} from '@angular/core';
import {Student} from '../model/Student';
import {LoggerService} from './LoggerService';
import {Output} from '@angular/core/src/metadata/directives';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {
  public studentsAdded: EventEmitter<Student[]> = new EventEmitter<Student[]>();

  private students: Student[] =  [
      new Student('Manu', 'manu@gmail.com', 'ABCD'),
      new Student('John', 'john@gmail.com', 'FGHJ'),
      new Student('Sunny', 'sunny@gmail.com', 'HJKL')
  ];

  constructor() { }

  public getAllStudents():Array<Student> {
    return this.students.slice();
  }
  public addStudents(student: Student) {
    console.log('ssssss::', student);
    this.students.push(student);
    this.studentsAdded.emit(this.students.slice());

  }
}
