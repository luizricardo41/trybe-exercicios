const { expect } = require('chai');

const verifyNum = require('../functions/verifyNum');

describe("Verificar se número passado para a função é", () => {
  it("positivo", () => {
    const testNum = verifyNum(1);

    expect(testNum).equals('positivo');
  });
  it("negativo", () => {
    const testNum = verifyNum(-1);

    expect(testNum).equals('negativo');
  });
  it("neutro", () => {
    const testNum = verifyNum(0);

    expect(testNum).equals('neutro');
  });
  it("uma string", () => {
    const testNum = verifyNum('xablau');

    expect(testNum).equals('Valor não permitido');
  });
});