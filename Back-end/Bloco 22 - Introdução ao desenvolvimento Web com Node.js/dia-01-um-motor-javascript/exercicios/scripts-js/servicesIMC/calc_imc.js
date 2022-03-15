const dataPerson = require('./dataInput')
const calcImc = require('./imc')

const imcPerson = () => {
  const { insertInput, data } = dataPerson;
  insertInput();

  const indice = calcImc(data.peso, data.altura);

  if (indice > 40) return console.log(`IMC: ${indice} - Obesidade graus III e IV`);
  if (indice > 35) return console.log(`IMC: ${indice} - Obesidade grau II`);
  if (indice > 30) return console.log(`IMC: ${indice} - Obesidade grau I`);
  if (indice > 25) return console.log(`IMC: ${indice} - Acima do peso (sobrepeso)`);
  if (indice > 18.5) return console.log(`IMC: ${indice} - Peso normal`);
  if (indice < 18.5) return console.log(`IMC: ${indice} - Abaixo do peso (magreza)`);
}

module.exports = imcPerson;
