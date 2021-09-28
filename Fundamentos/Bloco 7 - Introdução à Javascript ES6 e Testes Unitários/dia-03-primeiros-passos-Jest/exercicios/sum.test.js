const sum = require('./sum');

describe('function sum', () => {
  it ('sum of 4 and 5 equal 9', () => {
    expect(9).toBe(sum(4, 5));
  });
});