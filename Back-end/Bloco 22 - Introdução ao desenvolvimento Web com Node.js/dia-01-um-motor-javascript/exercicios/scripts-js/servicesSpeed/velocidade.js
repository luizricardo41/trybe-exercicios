const velocidade = (distancia, tempo) => {
  const result = (distancia / tempo).toFixed(2);
  return result;
}

module.exports = velocidade;
