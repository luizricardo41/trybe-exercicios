const velocidade = require('./velocidade');
const data_velocidade = require('./data_velocidade');

const calc_velocidade = () => {
  const { data, dataVelocidade } = data_velocidade;
  
  dataVelocidade();

  const value = velocidade(data.distancia, data.tempo);

  console.log(`A velocidade percorrida foi de: ${value} m/s`);
}

module.exports = calc_velocidade;
