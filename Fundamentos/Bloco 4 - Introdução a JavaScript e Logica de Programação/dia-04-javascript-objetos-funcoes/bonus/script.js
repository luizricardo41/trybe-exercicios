// const numValue = {
//   I: 1,
//   IV: 4,
//   V: 5,
//   IX: 9,
//   X: 10,
//   XL: 40,
//   L: 50,
//   XC: 90,
//   C: 100,
//   CD: 400,
//   D: 500,
//   CM: 900,
//   M: 1000,
// };

// const arrayRomanNum = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

// function convertNumber(array) {
//   let num = 0;
//   for (let index = 0; index < array.length; index += 1) {
//     let aux = numValue[array[index]];
//     if (index === 0) {
//       num = aux;
//     } else if (numValue[array[index - 1]] < aux) {
//       num = num + aux - numValue[array[index - 1]];
//     }
//     else {
//       num += numValue[array[index]];
//     };
//   }
//   return num;
// }

// function verifyNum(romanNum) {
//   const numUpperCase = romanNum.toUpperCase();
//   const amountLetters = romanNum.length;
//   const arrayTest = [];
//   for (let index = 0; index < amountLetters; index += 1) {
//     for (let index2 = 0; index2 < arrayRomanNum.length; index2 += 1) {
//       if (numUpperCase[index] === arrayRomanNum[index2]) arrayTest.push(numUpperCase[index]);
//     }
//   }
//   if (arrayTest.length !== amountLetters) {
//     return 'O valor passado não é válido';
//   }
//   return convertNumber(arrayTest);
// }
// console.log(verifyNum('mcmxciv'));

const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  const len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    const prox = numerosRomanos[numero[len - i]];
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}

console.log(romanoParaDecimal('mcmxciv')); // 2018
// console.log(romanoParaDecimal('VI')); // 6
// console.log(romanoParaDecimal('IV')); // 4
