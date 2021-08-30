//Exercicio 1 - Fixar - Imprimir no console a mensagem "Olá xxxxx", substituindo xxxx pelo respectivo nome. (usando for/in)
//
//let names = {
//  person1: 'João',
//  person2: 'Maria',
//  person3: 'Jorge' 
//};
//
//for (let key in names) {
//  console.log ("Olá " + names[key]);
//}

//Exercicio 1 - Fixar - Imprimir no console a mensagem "Olá xxxxx", substituindo xxxx pelo respectivo nome. (usando for/in)

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car){
  console.log (key, car[key]);
}