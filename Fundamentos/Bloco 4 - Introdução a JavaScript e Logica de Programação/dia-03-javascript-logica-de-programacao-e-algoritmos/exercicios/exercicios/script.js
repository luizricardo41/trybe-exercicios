// Exercicio 1

// let num = 10;
// let result = num;

// for (let i = 1; i < num; i += 1) {
//   result = result * (num - i);
// }
// console.log(result);


// Exercicio 2

// let word = 'banana';
// let newWord = '';

// for (let i = 1; i <= word.length; i += 1) {
//   newWord += word[word.length - i];
// }
// console.log(newWord);

// Exercicio 3 

let array = ['java', 'javascript', 'python', 'html', 'css'];
let value = '';

for (let i = 0; i < array.length; i += 1) {
  if (value.length < array[i].length) {
    value = array[i];
  }
}
console.log(value);
