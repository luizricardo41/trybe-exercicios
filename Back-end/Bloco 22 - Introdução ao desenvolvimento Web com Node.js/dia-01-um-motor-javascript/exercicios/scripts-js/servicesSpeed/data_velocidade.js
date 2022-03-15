const readline = require('readline-sync');
const velocidade = require('./velocidade')

let data = {
  distancia: 0,
  tempo: 0
}

const dataVelocidade = () => {
  data.distancia = readline.questionInt('Qual a distancia? ');
  data.tempo = readline.question('Quanto tempo para percorrer a distancia? ');
}

module.exports = {
  data,
  dataVelocidade
};
