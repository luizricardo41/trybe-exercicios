function verifyNum(value) {
  if (typeof value === 'string') return 'Valor não permitido';
  if (value > 0) return 'positivo';
  if (value < 0) return 'negativo';
  return 'neutro';
}

module.exports = verifyNum;