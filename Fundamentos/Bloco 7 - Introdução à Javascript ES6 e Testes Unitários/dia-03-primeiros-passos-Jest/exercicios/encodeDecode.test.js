const encodeDecode = require('./encodeDecode');

describe('function encode e decode', () => {
  it ('Espera que as funções encode e decode existam', () => {
    expect(typeof encodeDecode.encode).toBe('function');
    expect(typeof encodeDecode.decode).toBe('function');
  })
  it ('Espera que funçao encode receba "a, e ,i o, u e retorne 1, 2, 3, 4, 5"', () => {
    expect(encodeDecode.encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  })
  it ('Espera que funçao decode receba "1, 2, 3, 4, 5" e retorne "a, e ,i, o, u"', () => {
    expect(encodeDecode.decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  })
  it ('Espera que funçao encode receba qualquer outra letra e retorne a mesma letra', () => {
    expect(encodeDecode.encode('b')).toBe('b');
  })
  it ('Espera que funçao decode receba qualquer outro número e retorne o mesmo número', () => {
    expect(encodeDecode.decode('6')).toBe('6');
  })
  it ('Espera que as funçoes retornem a mesma quantidade de caracteres das strings passadas como parametro', () => {
    expect(encodeDecode.encode('Luiz').length).toBe(4);
  });
});