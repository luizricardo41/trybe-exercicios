const dataSort = require('./data_sorteio');

const checkNumber = () => {
  const { insertNumber, data } = dataSort;
  insertNumber();

  if (data.sortNumber === data.choseNumber) {
    console.log('Parabéns, número correto!')
  } else {
    console.log(`Opa, não foi dessa vez. O numero sorteado era ${data.sortNumber}!`);
  }
}

module.exports = checkNumber;
