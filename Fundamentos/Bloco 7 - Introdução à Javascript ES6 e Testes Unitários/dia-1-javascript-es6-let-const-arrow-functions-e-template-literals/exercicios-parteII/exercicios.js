const fatorial = (number) => {
  if (typeof (number) === 'string' || number === undefined) {
    return 'O parametro precisa ser um número!';
  }
  let produto = number;
  for (index = number - 1; index > 0; index -= 1) {
    produto = produto * index;
  }
  return produto;
}

console.log(fatorial(4));