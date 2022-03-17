const fs = require('fs').promises;

const nomeArquivo = 'simpsons.json';

fs.readFile(nomeArquivo, 'utf-8')
  .then((data) => {
    return JSON.parse(data);
  })
  .then((content) => {
    return content.map(({ id, name }) => console.log(`${id} - ${name}`));
  })
  .catch((err) => {
    console.log(`Não foi possivel ler o arquivo! \n Erro: ${err}`)
    process.exit(1);
  });
