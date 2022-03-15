const imc = (peso = 85, altura = 1.73) => {
  const result = (peso / (altura * altura)).toFixed(2);
  return result;
}

module.exports = imc;
