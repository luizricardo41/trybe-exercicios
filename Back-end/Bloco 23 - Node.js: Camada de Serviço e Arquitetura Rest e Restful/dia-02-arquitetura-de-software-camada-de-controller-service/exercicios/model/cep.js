const connection = require('./connection');

const getCep = async (cep) => {
  const [address] = await connection
    .execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]);
  return address;
}

module.exports = {
  getCep
};
