const readline = require('readline-sync');

let data = {
  peso: 0,
  altura: 0
}

const insertInput = () => {
  data.peso = readline.questionFloat('Qual seu peso? ');
  data.altura = readline.questionFloat('Qual sua altura? ');
}

module.exports = {
  insertInput,
  data
};
