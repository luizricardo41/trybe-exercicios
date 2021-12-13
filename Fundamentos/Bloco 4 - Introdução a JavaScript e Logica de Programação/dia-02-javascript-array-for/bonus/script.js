//Exercicios Bonus - Exercicio 1 - Ordene o array numbers e imprima seus valores.

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let auxiliar = 0;
//
//for (let i = 1; i < numbers.length; i += 1){
//  for (let j = 0; j < i; j += 1){
//    if(numbers[i] < numbers[j]){
//      auxiliar = numbers[i];
//      numbers[i] = numbers[j];
//      numbers[j] = auxiliar;      
//    }
//  }
//  console.log (numbers);
//}

//Exercicios Bonus - Exercicio 2 - Ordene em ordem decrescente o array numbers e imprima seus valores.
//
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let auxiliar = 0;
//
//for (let i = 1; i < numbers.length; i += 1){
//  for (let j = 0; j < i; j += 1){
//    if(numbers[i] > numbers[j]){
//      auxiliar = numbers[i];
//      numbers[i] = numbers[j];
//      numbers[j] = auxiliar;      
//    }
//  }
//  console.log (numbers);
//}

//Exercicios Bonus - Exercicio 3 - Criar um novo array a partir do array numbers.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];
let auxiliar = 0;

for (let i = 0; i < numbers.length; i += 1){
    if(numbers[i+1]){
      let value = numbers[i] * numbers[i+1];
      numbers2.push(value);
    } else {
      value = numbers[i] * 2;
      numbers2.push(value);
    }
}
console.log (numbers2);
