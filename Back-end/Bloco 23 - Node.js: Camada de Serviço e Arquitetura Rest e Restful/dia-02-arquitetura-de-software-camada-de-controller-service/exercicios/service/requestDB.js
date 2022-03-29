const Model = require("../model/cep");
const Helpers = require('../helpers/validateCep');

const requestDB = async (cep) => {
  const checkInfo = Helpers.cepIsValid(cep);
 
  if (!checkInfo.checkCep) return false;
  if (cep.indexOf('-') !== -1) return await Model.getCep(cep);
  return await Model.getCep(checkInfo.newCep);
}

module.exports = {
  requestDB
};
