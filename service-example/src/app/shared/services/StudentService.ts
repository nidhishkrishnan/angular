import {Student} from '../model/Student';

export class StudentService {
  students: Student[];

  getStudents() {
    return this.students;
  }

  addStudents(student: Student) {
    this.students.push(student);
  }
}
