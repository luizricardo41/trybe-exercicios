export default class Subject {
  private _name: string[];

  constructor() {
    this._name = [];

    // this.name.push(discipline);
  }

  set name(discipline: string) {
    if (discipline.length < 3) throw new Error('A disciplina deve ter pelo no minimo 3 caracteres');
    this._name.push(discipline);
  }

  getName(): string[] {
    return this._name;
  }
}

const subject = new Subject();

subject.name = 'Matemática'
subject.name = 'Português'
subject.name = 'Ing'

console.log(subject.getName());