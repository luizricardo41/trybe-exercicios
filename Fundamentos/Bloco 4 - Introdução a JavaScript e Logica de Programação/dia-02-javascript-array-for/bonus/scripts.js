//Exercicios Bonus - Exercicio 1 - Ordene o array numbers e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let auxiliar = 0;

for (let i = 1; i < numbers.length; i += 1){
  for (let j = 0; j < i; j += 1){
    if(numbers[i] < numbers[j]){
      auxiliar = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = auxiliar;      
    }
  }
  console.log (numbers);
}
