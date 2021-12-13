//let n = 10;
//let symbol = "*";
//let line = "";
//
//for (let index2 = 0; index2 < n; index2 += 1) {
//  line = line + symbol;
//}
//
//
//for (let index = 0; index < n; index += 1) {
//  console.log (line);
//}

// let n = 5;
// let symbol = "*";
// let line = "";

// for (let index = 0; index < n; index += 1) {
//   line += symbol;
//   console.log(line);
// }

// let n = 5;
// let symbol = "*";
// let count = n;

// for (let index2 = 0; index2 < n; index2 += 1) {
//   let line = "";
//   for (let index = 0; index <= n; index += 1) { 
//     if (index < n - index2) {
//       line += " ";    
//     } else {
//       line += symbol;
//     }
//   }
//   console.log(line);
// }

// let n = 5;
// let symbol = '*';
// let midpoint = Math.round(n / 2);
// let controlR = midpoint;
// let controlL = midpoint;

// for (let index2 = 0; index2 <= midpoint; index2 += 1) {
//   let line = '';
//   for (let index = 0; index <= n; index += 1) {
//     if (index > controlL && index < controlR) {
//       line += symbol;
//     } else {
//       line += ' ';
//     }
//   }
//   console.log(line);
//   controlR += 1;
//   controlL -= 1;
// }

// Código de resolução do exercicio 5 do bonus do gabarito Trybe - Copiado para Debug e verificar funcionamento.
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
