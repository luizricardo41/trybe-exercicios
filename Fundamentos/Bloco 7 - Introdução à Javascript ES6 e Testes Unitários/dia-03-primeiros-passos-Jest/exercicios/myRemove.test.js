const myRemove = require('./myRemove');

describe('function myRemove', () => {
  it ('receive array [1, 2, 3, 4] and item 3 to remove', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it ('receive array [1, 2, 3, 4] and item 3 to remove', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it ('receive array [1, 2, 3, 4] and item 5 to remove', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});