const fs = require('fs').promises;

const nomeArquivo = 'simpsons.json';

async function character(param) {
  const value = await fs
    .readFile(nomeArquivo, 'utf-8')
    .then((content) => JSON.parse(content));
  
  const characterForId = value.find((item) => item.id === param);
  if (!characterForId) {
    throw new Error('id não encontrado');
  }
  return characterForId;
}

character('5')
  .then((result) => console.log(result))
  .catch((err) => console.log(`Erro: ${err.message}`));
