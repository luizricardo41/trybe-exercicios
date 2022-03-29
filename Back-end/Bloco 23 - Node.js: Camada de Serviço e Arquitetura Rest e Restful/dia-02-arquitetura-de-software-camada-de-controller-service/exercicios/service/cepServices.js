const Model = require("../model/cep");
const Helpers = require('../helpers/validateCep');

const requestDB = async (cep) => {
  const checkInfo = Helpers.cepIsValid(cep);
 
  if (!checkInfo.checkCep) return false;
  if (cep.indexOf('-') !== -1) return await Model.getCep(cep);
  return await Model.getCep(checkInfo.newCep);
}

const addCepDB = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const checkCep = await requestDB(cep);

  if (!checkCep) return false;
  if (checkCep.length > 0) return checkCep;
  return await Model.addCEP({ cep, logradouro, bairro, localidade, uf })
}

module.exports = {
  requestDB,
  addCepDB
};
