const fs = require('fs').promises;

const nomeArquivo = 'simpsonFamily.json';

async function changeCharacter() {
  const objFile = await fs
    .readFile(nomeArquivo, 'utf-8')
    .then((data) => JSON.parse(data));
  
  const newObject = objFile.filter((item) => item.name !== 'Nelson Muntz');
  newObject.push({ id: '5', name: 'Maggie Simpson' });

  await fs.writeFile(nomeArquivo, JSON.stringify(newObject));
}

changeCharacter();
