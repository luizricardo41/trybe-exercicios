const calcImc = require('./servicesIMC/calc_imc');
const calc_velocidade = require('./servicesSpeed/calc_velocidade');
const sortNumber = require('./servicesSorteio/realiza_sorteio');
const readline = require('readline-sync');

function main() {
  const options = {
    1: 'Calcular IMC.',
    2: 'Calcular Velocidade.',
    3: 'Sorteio de 1 a 10'
  }
  
  console.table(options);
  const option = readline.questionInt('Selecione uma das opções acima: ');

  if (option === 1) {
    calcImc();
  }
  if (option === 2) {
    calc_velocidade();
  }
  if (option === 3) {
    sortNumber();
  }
}

main();
