const fs = require('fs').promises;

const nomeArquivo = 'simpsons.json'

async function removeCharacter(id1, id2) {
  const objFile = await fs
    .readFile(nomeArquivo, 'utf-8')
    .then((data) => JSON.parse(data));

  const newObject = JSON.stringify(objFile
    .filter((item) => item.id !== id1 && item.id !== id2));

  fs.writeFile(nomeArquivo, newObject)
    .then(() => console.log('Arquivo escrito com sucesso!'))
    .catch((err) => console.log('Erro ao escrever o arquivo'));;
}

removeCharacter('6', '10');


