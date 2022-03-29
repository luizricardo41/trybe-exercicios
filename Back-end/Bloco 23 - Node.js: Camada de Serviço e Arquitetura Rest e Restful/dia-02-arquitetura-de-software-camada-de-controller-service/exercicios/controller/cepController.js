const Service = require("../service/cepServices");

const getCep = async (req, res) => {
  const { cep } = req.params;
  
  const searchCep = await Service.requestDB(cep);

  if (!searchCep) return res.status(400)
    .json({ error: { code: 'invalidData', message: 'CEP invalido' } });
  if (searchCep.length === 0) return res.status(404)
    .json({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  return res.status(200).json(searchCep);
}

const addCep = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const infoDB = await Service.addCepDB({ cep, logradouro, bairro, localidade, uf });

  if (!infoDB) return res.status(400)
    .json({ error: { code: 'invalidData', message: 'CEP invalido' } });
  if (infoDB.length > 0) return res.status(409)
    .json({ error: { code: "alreadyExists", message: "CEP já existente" } });
  return res.status(201).json(infoDB);
}

module.exports = {
  getCep,
  addCep
}
