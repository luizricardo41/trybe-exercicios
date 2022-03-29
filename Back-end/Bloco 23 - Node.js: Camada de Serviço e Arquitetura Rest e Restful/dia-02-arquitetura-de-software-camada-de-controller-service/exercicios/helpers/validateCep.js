const cepIsValid = (cep) => {
  const cepValid = /\d{5}-?\d{3}/;
  const checkCep = cepValid.test(cep);
  const newCep = cep.substr(0, 5) + '-' + cep.substr(5, 3);
  return {
    checkCep,
    newCep
  };
}

module.exports = {
  cepIsValid,
};
