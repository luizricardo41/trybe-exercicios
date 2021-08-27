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

let n = 5;
let symbol = "*";
let line = "";

for (let index2 = n; index2 > 0; index2 -= 1) {
  line = line + symbol;
}

let line2 = line;

for (let index = 0; index < n; index += 1) {
  console.log (line2);
   line2 = line.slice(index + 1);
}
