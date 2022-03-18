const fs = require('fs').promises;

async function writeFileFunc(file, content) {
  await fs.writeFile(file, content);
  return 'ok';
}

module.exports = writeFileFunc;
