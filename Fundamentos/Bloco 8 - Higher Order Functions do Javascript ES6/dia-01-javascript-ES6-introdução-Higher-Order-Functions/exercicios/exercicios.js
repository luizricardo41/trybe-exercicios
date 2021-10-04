// Exercicio 1

// const newPerson = (name) => {
//   let newName = name.split(' ').join('').toLowerCase();
//   const newObject = {
//     name,
//     email: `${newName}@trybe.com`
//   }
//   return newObject;
// }

// const newEmployees = (action) => {
//   const employees = {
//     id1: action('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: action('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: action('Carlos Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(newPerson));

// Exercicio 2

// const drawNumber = (number, action) => {
//   const dNumber = Math.round((Math.random() * 5) + 1);
//   action(number, dNumber);
//   return action(number, dNumber);
// };

// const checkNumber = (number, dNumber) => {
//   if (number === dNumber) {
//     return `Parabens, você ganhou!! ${dNumber}`;
//   }
//   return `Tente novamente  ${dNumber}`;
// }

// console.log(drawNumber(5, checkNumber));

// Exercicio 3 

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testResult = (gabarito, respostas, callback) => {
  callback(gabarito, respostas);
  return `Resultado: ${callback(gabarito, respostas)} respostas corretas`;
}

const verificaRespostas = (gabarito, respostas) => {
  let respostasCertas = 0;
  for (let index = 0; index < gabarito.length; index += 1){
    if (respostas[index] === 'N.A') {
    } else if (gabarito[index] === respostas[index]){
      respostasCertas += 1;
    } else {
      respostasCertas -= 0.5;
    }
  }
  return respostasCertas;
}

console.log(testResult(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], verificaRespostas));