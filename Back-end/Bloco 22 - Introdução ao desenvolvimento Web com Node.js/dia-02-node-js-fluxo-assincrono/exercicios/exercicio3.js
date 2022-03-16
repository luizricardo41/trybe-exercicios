const testPromise = require('./exercicio2');

async function main() {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);
  try {
    const result = await testPromise(a, b, c);
    console.log(result);
  } catch (err) {
    console.error(`Erro: ${err.message}`);
  }
}

main();
