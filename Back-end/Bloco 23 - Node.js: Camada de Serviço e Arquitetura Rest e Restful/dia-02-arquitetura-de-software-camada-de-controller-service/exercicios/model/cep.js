const connection = require('./connection');

const getCep = async (cep) => {
  const [address] = await connection
    .execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]);
  return address;
}

const addCEP = async ({ cep, logradouro, bairro, localidade, uf }) => {
  await connection
    .execute(`INSERT INTO cep_lookup.ceps 
    (cep, logradouro, bairro, localidade, uf) VALUES
    (?, ?, ?, ?, ?)`, [cep, logradouro, bairro, localidade, uf]);
  
  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
}

module.exports = {
  getCep,
  addCEP
};
