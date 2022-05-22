import { v4 as uuidv4 } from 'uuid';
import Person from './Person';

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(name: string, birthDate: Date, examsGrades: number[], worksGrades: number[]) {
    super(name, birthDate);
    this._enrollment = '';
    this._examsGrades = examsGrades;
    this._worksGrades = worksGrades;
  }
  sumgrades(): number {
    const sumExamsGrade = this._examsGrades.reduce((acc, grade) => acc += grade, 0);
    const sumWorksGrade = this._worksGrades.reduce((acc, grade) => acc += grade, 0);
    const sumTotal = sumExamsGrade + sumWorksGrade;
    return sumTotal;
  }
  sumAverageGrades(): number {
    const sumGrades = this.sumgrades()
    return sumGrades / 6;
  }
  generateEnrollment(): string {
    return this._enrollment = uuidv4();
  }
  get enrollment(): string {
    return this._enrollment;
  }
}

const student_1 = new Student('Luiz', new Date(), [4, 5, 6, 5], [6, 6])

console.log(student_1.sumAverageGrades(), student_1.name, student_1.birthDate);
console.log(student_1.generateEnrollment());