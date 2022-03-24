const { expect } = require('chai');
const fs = require('fs').promises;
const sinon = require('sinon');

const writeFileFunc = require('../services/writefile')

describe("Verificar se a função é capaz de escrever em um arquivo especifico", () => {

  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });
  
  it("Após a escrita no arquivo, a função retorna a mensagem 'ok'", async () => {
    const resposta = await writeFileFunc('meuArquivo', 'conteudo');
    
    expect(resposta).to.be.equals('ok');
  });
  
  it("O retorno da função é do tipo 'string'", async () => {
    const resposta = await writeFileFunc('meuArquivo', 'conteudo');
    
    expect(resposta).to.be.a('string');
  });

});
