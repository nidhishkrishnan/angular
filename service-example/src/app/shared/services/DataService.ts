import {EventEmitter, Injectable} from '@angular/core';
import {Student} from '../model/Student';
import {LoggerService} from './LoggerService';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DataService {
  public studentsAdded: EventEmitter<Student[]> = new EventEmitter<Student[]>();

  private students: Student[] =  [
      new Student('Manu', 'manu@gmail.com', 'ABCD'),
      new Student('John', 'john@gmail.com', 'FGHJ'),
      new Student('Sunny', 'sunny@gmail.com', 'HJKL')
  ];

  constructor(private logger: LoggerService) { }

  public getAllStudents():Array<Student> {
    return this.students.slice();
  }
  public addStudents(student: Student) {
    this.students.push(student);
    this.logger.info('item pushed successfully......')
    this.studentsAdded.emit(this.students.slice());
  }
}
