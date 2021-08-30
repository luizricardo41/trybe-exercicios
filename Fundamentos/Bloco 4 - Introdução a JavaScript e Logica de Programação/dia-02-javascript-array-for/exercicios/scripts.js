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

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let sum = 0;
//let media = 0;
//
//for (let i = 0; i < numbers.length; i += 1){
//  sum = numbers[i] + sum;
//}
//media = (sum / numbers.length);
//
//console.log (media);

//Exercicio 4 - Verificar se o valor da média é maior ou menor que 20.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let sum = 0;
//let media = 0;
//
//for (let i = 0; i < numbers.length; i += 1){
//  sum = numbers[i] + sum;
//}
//media = (sum / numbers.length);
//
//if (media > 20){
//  console.log ("Valor maior do que 20");
//} else{
//  console.log ("Valor menor ou igual a 20");
//}

//Exercicio 5 - Encontrar o maior valor da array e imprimi-lo.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMaior = 0;
let valor = 0;

for (let i = 0; i < numbers.length; i += 1){
  valor = numbers[i];
  
  if(valor > 0 && valor >= valorMaior){
    valorMaior = valor;
  }
}
console.log(valorMaior);
