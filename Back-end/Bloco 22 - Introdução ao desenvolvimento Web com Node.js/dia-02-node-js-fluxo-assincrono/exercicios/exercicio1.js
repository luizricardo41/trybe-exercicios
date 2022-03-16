function testPromise(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números!'));
    }
    const result = ((a + b) * c);
    if (result < 50) {
      reject(new Error('Valor muito baixo!'));
    } else {
      resolve(result);
    }
  });
  return promise;
}

testPromise(10, 10, 5)
  .then((result) => console.log(result))
  .catch(err => console.log('erro:', err.message))

