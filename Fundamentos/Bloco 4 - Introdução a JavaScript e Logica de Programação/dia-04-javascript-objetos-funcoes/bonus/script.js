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

// Resolução do exercicio 1 dos bonus; (Resolução retirada dos gabaritos)

// const numerosRomanos = {
//   i: 1,
//   v: 5,
//   x: 10,
//   l: 50,
//   c: 100,
//   d: 500,
//   m: 1000,
// };

// function romanoParaDecimal(numero) {
//   numero = numero.toLowerCase();
//   const len = numero.length;
//   let soma = numerosRomanos[numero[len - 1]];
//   let atual = numerosRomanos[numero[len - 1]];
//   for (let i = 2; i <= len; i += 1) {
//     const prox = numerosRomanos[numero[len - i]];
//     if (atual <= prox) {
//       soma += prox;
//     } else {
//       soma -= prox;
//     }
//     atual = prox;
//   }
//   return soma;
// }

// console.log(romanoParaDecimal('mcmxciv')); // 2018
// console.log(romanoParaDecimal('VI')); // 6
// console.log(romanoParaDecimal('IV')); // 4


// Exercicio 2

// let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// function evenNum(vector) {
//   const vectorLen = vector.length;
//   let newArray = [];
//   for (let index = 0; index < vectorLen; index += 1) {
//     for (let index2 = 0; index2 < vector[index].length; index2 += 1) {
//       if (vector[index][index2] % 2 === 0) {
//         newArray.push(vector[index][index2]);
//       }
//     }
//   }
//   return newArray;
// }

// console.log(evenNum(vector));


// // Exercicio 3 

// const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];

// function amountFruits(array) {
//   const arrayLen = array.length;
//   const objFruits = {};
//   for (let index = 0; index < arrayLen; index += 1) {
//     let fruit = basket[index];
//     let count = 0;
//     if (!objFruits[fruit]) {
//       for (let index2 = 0; index2 < arrayLen; index2 += 1) {
//         if (basket[index] === basket[index2]) count += 1;
//       }
//       objFruits[fruit] = count;
//     }
//   }
//   return `Sua cesta possui: ${objFruits.Melancia} Melancias, ${objFruits.Uva} Uvas, ${objFruits.Laranja} Laranjas,
// ${objFruits.Jaca} Jacas, ${objFruits.Pera} Peras, ${objFruits.Banana} Bananas, ${objFruits.Abacate} Abacates!`;
// }

// console.log(amountFruits(basket));


let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// -->> Exercicio 4

// console.log(`"O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome}
// mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}"`)


// -->> Exercicio 5

function blocoUm() {
  const moradoresLen = moradores.blocoUm.length;
  for (let index = 0; index < moradoresLen; index += 1) {
    console.log(`Nome: ${moradores.blocoUm[index].nome} ${moradores.blocoUm[index].sobrenome}`);
  }
}
blocoUm();

function blocoDois() {
  const moradoresLen = moradores.blocoDois.length;
  for (let index = 0; index < moradoresLen; index += 1) {
    console.log(`Nome: ${moradores.blocoDois[index].nome} ${moradores.blocoDois[index].sobrenome}`);
  }
}
blocoDois();

