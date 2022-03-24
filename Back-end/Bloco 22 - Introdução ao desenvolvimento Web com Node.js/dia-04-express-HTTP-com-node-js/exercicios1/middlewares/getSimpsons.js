const fs = require('fs').promises;

const nomeArquivo = 'simpsons.json';

async function getSimpsons(req, res) {
  const objFile = await fs
    .readFile(nomeArquivo, 'utf-8')
    .then((data) => JSON.parse(data));
  res.status(200).json(objFile);
  return objFile;
}

module.exports = getSimpsons;