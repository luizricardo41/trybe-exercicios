// Exercicio 1

let num = 10;
let result = num;

for (let i = 1; i < num; i += 1) {
  result = result * (num - i);
}
console.log(result);
