class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = '';

    this.name = name;
    this._birthDate = birthDate;
  }
  set name(name: string) {
    console.log(name.length);
    if (name.length < 3) throw new Error('O nome deve ter pelo menos 3 caracteres!');
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
  get birthDate(): Date {
    return this._birthDate;
  }
}

const person1: Person = new Person('Luiz', new Date(Date.parse('09/08/1989')));

// person1.name = 'R';

console.log(person1.name);
console.log(person1.birthDate);
