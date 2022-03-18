const fs = require('fs').promises;

const nomeArquivo = 'simpsonFamily.json';

async function addCharacter() {
  const objFile = await fs
    .readFile(nomeArquivo, 'utf-8')
    .then((data) => JSON.parse(data));
  
  objFile.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile(nomeArquivo, JSON.stringify(objFile));
}

addCharacter();
