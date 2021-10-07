const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// const flatten = () => arrays.reduce((acc, curr) => acc.concat(curr));
const flatten = (acc, curr) => acc.concat(curr);

const result = arrays.reduce(flatten);

console.log(result);
// console.log(flatten());