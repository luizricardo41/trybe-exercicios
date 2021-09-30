const sum = require('./sum');

describe('function sum', () => {
  it ('sum of 4 and 5 equal 9', () => {
    expect(9).toBe(sum(4, 5));
  });
  it ('sum of 0 and 0 equal 0', () => {
    expect(0).toBe(sum(0, 0));
  });
  it ('error when string is sent', () => {
    expect(() => { sum ('a')}).toThrow('parameters must be numbers');
  });
});