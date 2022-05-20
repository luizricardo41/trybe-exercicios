class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = '';
    this._birthDate = new Date();

    this.name = name;
    this.birthDate = birthDate;
  }
  set name(name: string) {
    if (name.length < 3) throw new Error('O nome deve ter pelo menos 3 caracteres!');
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
  set birthDate(date: Date) {
    if (date > new Date()) throw new Error('A data de nascimento não pode ser no futuro!');
    const age = Math.abs(Date.now() - new Date(date).getTime());
    const years = (age / (1000 * 3600 * 24) / 365.25);
    if (years > 120) throw new Error('A pessoa não pode ter mais que 120 anos')
    this._birthDate = date;
  }
  get birthDate(): Date {
    return this._birthDate;
  }
}

const person1: Person = new Person('Luiz', new Date(Date.parse('05/20/1903')));

// person1.name = 'R';

console.log(person1.name);
console.log(person1.birthDate);
