const Service = require("../service/requestDB");

const receiveCep = async (req, res) => {
  const { cep } = req.params;
  
  const searchCep = await Service.requestDB(cep);

  if (!searchCep) return res.status(400)
    .json({ error: { code: 'invalidData', message: 'CEP invalido' } });
  if (searchCep.length === 0) return res.status(404)
    .json({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  return res.status(200).json(searchCep);
}

module.exports = {
  receiveCep
}
