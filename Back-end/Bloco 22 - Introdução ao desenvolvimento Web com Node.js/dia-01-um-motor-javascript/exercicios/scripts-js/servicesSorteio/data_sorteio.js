const sorteio = require('./sorteio');
const readline = require('readline-sync');

let data = {
  sortNumber: 0,
  choseNumber: 0
}

const insertNumber = () => {
  data.sortNumber = sorteio();

  data.choseNumber = readline.questionInt('Escolha um número de 1 a 10: ');
}

module.exports = {
  insertNumber,
  data
};
