// Exercicio 1

// let num = 10;
// let result = num;

// for (let i = 1; i < num; i += 1) {
//   result = result * (num - i);
// }
// console.log(result);


// Exercicio 2

let word = 'banana';
let newWord = '';

for (let i = 1; i <= word.length; i += 1) {
  newWord += word[word.length - i];
}
console.log(newWord);

