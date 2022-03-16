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

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

testPromise(a, b, c)
  .then((result) => console.log(`((${a} + ${b}) * ${c})=${result}`))
  .catch(err => console.log('erro:', err.message))
