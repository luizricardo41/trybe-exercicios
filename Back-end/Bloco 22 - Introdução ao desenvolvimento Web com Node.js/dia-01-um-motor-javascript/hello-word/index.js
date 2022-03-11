const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const idade = readline.questionInt('Qual sua idade? ')

console.log(`Hello ${name}! You are ${idade} years old!`);