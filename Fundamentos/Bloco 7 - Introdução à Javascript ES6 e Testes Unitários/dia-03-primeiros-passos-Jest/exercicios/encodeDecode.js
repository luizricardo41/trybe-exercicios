// Desafio 9
function encode(phrase) {
  let phraseReturn = phrase;
  let letterEncode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  phraseReturn = phraseReturn.replace(/a/g, letterEncode.a);
  phraseReturn = phraseReturn.replace(/e/g, letterEncode.e);
  phraseReturn = phraseReturn.replace(/i/g, letterEncode.i);
  phraseReturn = phraseReturn.replace(/o/g, letterEncode.o);
  phraseReturn = phraseReturn.replace(/u/g, letterEncode.u);
  return phraseReturn;
}

function decode(phrase) {
  let phraseReturn2 = phrase;
  let numberDecode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  phraseReturn2 = phraseReturn2.replace(/1/g, numberDecode[1]);
  phraseReturn2 = phraseReturn2.replace(/2/g, numberDecode[2]);
  phraseReturn2 = phraseReturn2.replace(/3/g, numberDecode[3]);
  phraseReturn2 = phraseReturn2.replace(/4/g, numberDecode[4]);
  phraseReturn2 = phraseReturn2.replace(/5/g, numberDecode[5]);
  return phraseReturn2;
}

module.exports = {
  decode,
  encode,
};
