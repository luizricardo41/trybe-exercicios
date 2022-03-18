const fs = require('fs').promises;

const nomeArquivo = 'simpsons.json';

async function createNewFile() {
  const objFile = await fs
    .readFile(nomeArquivo, 'utf-8')
    .then((data) => JSON.parse(data));
  
  const newObject = JSON.stringify(objFile
    .filter((item) => ['1', '2', '3', '4'].includes(item.id)));

  await fs.writeFile('./simpsonFamily.json', newObject, { flag: 'w' })
    .then(() => console.log('Arquivo Salvo!'))
    .catch((err) => console.error(err));
}

createNewFile();
