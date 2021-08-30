//Exercicio 1 - imprimir todos os valores da array usando console.log.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//
//for (let i = 0; i < numbers.length; i += 1){
//
//  console.log (numbers[i]);
//}

//Exercicio 2 - somar todos os valores contidos na array e imprimir o resultado.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let sum = 0;
//
//for (let i = 0; i < numbers.length; i += 1){
//  sum = numbers[i] + sum;
//}
//console.log (sum);

//Exercicio 3 - Calcule e imprima a média aritmetica dos valores contidos no array.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;

for (let i = 0; i < numbers.length; i += 1){
  sum = numbers[i] + sum;
}
media = (sum / numbers.length);

console.log (media);