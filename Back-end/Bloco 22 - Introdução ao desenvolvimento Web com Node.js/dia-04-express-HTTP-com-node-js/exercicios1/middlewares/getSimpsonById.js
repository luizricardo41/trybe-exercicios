const fs = require('fs').promises;

const nomeArquivo = 'simpsons.json';

async function getSimpsonById(req, res) {
  const { id } = req.params;

  const objFile = await fs.readFile(nomeArquivo, 'utf-8')
    .then((data) => JSON.parse(data));

  const newObjFile = objFile.find((person) => id === `${person.id}`);

  if (!newObjFile) {
    return res.status(404).json({ message: 'Simpson not found!' });
  }
  return res.status(200).json(newObjFile);
}

module.exports = getSimpsonById;
