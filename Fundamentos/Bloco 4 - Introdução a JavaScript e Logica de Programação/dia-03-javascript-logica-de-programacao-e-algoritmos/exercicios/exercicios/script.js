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

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let value = '';

// for (let i = 0; i < array.length; i += 1) {
//   if (value.length < array[i].length) {
//     value = array[i];
//   }
// }
// console.log(value);


// Exercicio 4

let array = [];
const value = 1000;
let result = 0;

for (let verifyNum = 2; verifyNum < value; verifyNum += 1) {
  let count = 1;
  for (let i = 2; i <= verifyNum; i += 1) {
    if (verifyNum % i === 0) count += 1;
  }
  if (count === 2) {
    array.push(verifyNum);
  }
  result = array[array.length-1]
}
console.log(result);
