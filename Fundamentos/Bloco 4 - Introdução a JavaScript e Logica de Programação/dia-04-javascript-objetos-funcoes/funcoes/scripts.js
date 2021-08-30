// Exercicio 1 - Fazer 5 programas, um para cada operação aritmética:

//FUNCTION DA SOMA;

/*function sum(a, b) {
  return a + b;
}
let result = sum (10, 30);
console.log(result);*/

//FUNCTION DA SUBTRAÇÃO;

/*function subtraction(a, b) {
  return a - b;
}
let result = subtraction (10, 30);
console.log(result);*/

//FUNCTION DA DIVISÃO;

/*function division(a, b) {
  return b / a;
}
let result = division (10, 30);
console.log(result);*/

//FUNCTION DA MULTIPLICAÇÃO;

/*function multiplication(a, b) {
  return a * b;
}
let result = multiplication (10, 30);
console.log(result);*/

//FUNCTION DO MODULO;

/*function module(a, b) {
  return a % b;
}
let result = module (10, 3);
console.log(result);*/


//Exercicio 2 - Programa que retorna o maior entre dois números:

// FUNCTION RETORNA MAIOR NÚMERO ENTRE 2 NUMEROS;

function returnBigger (a, b){

  if(a > b) {
    return a;
  } else{
    return b;
  }
}

let resultado = returnBigger(25, 15);
console.log (resultado);

//const a = 15;
//const b = 20;
//let resultado;
//
//if(a > b) {
//  resultado = a;
//} else{
//  resultado = b;
//}
//console.log(resultado);


//Exercicio 3 - Programa que retorna o maior entre três números:
//const a = 21;
//const b = 19;
//const c = 20;
//let resultado;
//
//if(a > b && a > c){
//  resultado = a;
//} else if( b > a && b > c){
//  resultado= b;
//} else {
//  resultado = c;
//}
//console.log (resultado);
//

//Exercicio 4 - Verificar se o valor da constante é positivo, negativo ou falso.

//const a = 0;
//
//if (a > 0) {
//  console.log ("Positive");
//} else if (a < 0) {
//  console.log ("Negative");
//} else {
//  console.log ("Zero");
//}
//

//Exercicio 5 - Verificar se os 3 valores da constante representam a de um triangulo (retornar true ou false).

//const a = -50;
//const b = 40;
//const c = 90;
//
//if (a > 0 && b > 0 && c > 0){
//
//  if (a + b + c === 180){
//    console.log (true);
//  } else {
//    console.log(false);
//  }
//
//} else {
//  console.log ("Erro: Um dos valores apresentados não é válido");
//}

//// Exercicio 6 - Criar programa que receba nomes das peças de xadrez e retorne os movimentos que ela faz.
//
//let nomeDaPeca = "BISPO";
//
//nomeDaPeca = nomeDaPeca.toLowerCase()
//
//switch (nomeDaPeca) {
//  case "peão":
//    console.log ("O peão pode se mover uma casa por vez, ou duas casas caso seja sua primeira jogada.");
//  break;
//
//  case "torre":
//    console.log ("A torre pode se mover na horizontal e vertical, quantas casas quiser, mas não pode pular peças.");
//  break;
//  
//  case "cavalo":
//    console.log ("O cavalo se move em 'L', duas casa na vertical e uma na horizontal ou vice-versa. É a única peça que pode pular outras peças.");
//  break;
//  
//  case "bispo":
//    console.log ("O bispo pode se mover nas diagonais, quantas casas quiser.");
//  break;
//
//  case "rainha":
//    console.log ("A rainha pode se mover na diagonal, vertical e horizontal, quantas casas quiser.");
//  break;
//
//  case "rei":
//    console.log ("O rei pode se mover na diagonal, vertical e horizontal, apenas uma casa por vez.");
//  break;
//
//  default:
//    console.log ("Erro: Está peça não existe no xadrez!");
//  break;
//} 

//Exercicio 7 - Programa que converte notas de porcentagem em conceito de A a F.

//let nota = 49;
//
//if (nota < 0 || nota > 100) {
//  console.log ("Erro: Não é permitida nota maior que 100 ou menor que 0.");
//} else {
//
//    if(nota >= 90){
//      nota = "A";
//      console.log("Sua nota foi: " + nota + "!");
//    }
//    else if(nota >= 80){
//      nota = "B";
//      console.log("Sua nota foi: " + nota + "!");
//    }
//    else if(nota >= 70){
//      nota = "C";
//      console.log("Sua nota foi: " + nota + "!");
//    }
//    else if(nota >= 60){
//      nota = "D";
//      console.log("Sua nota foi: " + nota + "!");
//    }
//    else if(nota >= 50){
//      nota = "E";
//      console.log("Sua nota foi: " + nota + "!");
//    }
//    else if(nota < 50){
//      nota = "F";
//      console.log("Sua nota foi: " + nota + "!");
//    }
//  
//}

//Exercicio 8 - Programa para verificar se apenas 1 número de 3 seja par (retornar true).

//const a = 11;
//const b = 3;
//const c = 21;
//
//if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//  console.log (true);
//} else {
//  console.log (false);
//}

//Exercicio 9 - Programa para verificar se apenas 1 número de 3 seja ímpar (retornar true).

//const a = 10;
//const b = 4;
//const c = 20;
//
//if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
//  console.log (true);
//} else {
//  console.log (false);
//}

//Exercicio 10 - Programa para calcular o lucro de venda de um produto.

//const custo = 130;
//const venda = 320;
//let lucro;
//let custoTotal;
//
//custoTotal = custo + (custo * 0.20);
//
//if (custo <= 0 || venda <= 0) {
//  console.log ("Os valores não podem ser iguais ou menores que zero!")
//} else {
//  lucro = (1000 * venda) - (1000 * custoTotal);
//}
//console.log ("O lucro será de: " + lucro);

//Exercicio 11 - Programa para calcular o salario liquido de acordo com descontos dos impostos para cada faixa de salário.

//const salarioBruto = 10000.30;
//let salarioLiquido;
//let aliquotaINSS;
//let aliquotaIR;
//
//if (salarioBruto <= 1556.94) {
//  aliquotaINSS = salarioBruto * 0.08;
//  salarioLiquido = salarioBruto - aliquotaINSS;
//} 
//else if (salarioBruto <= 2594.92){
//  aliquotaINSS = salarioBruto * 0.09;
//  salarioLiquido = salarioBruto - aliquotaINSS;
//}
//else if (salarioBruto <= 5189.82){
//  aliquotaINSS = salarioBruto * 0.11;
//  salarioLiquido = salarioBruto - aliquotaINSS;
//}
//else {
//  aliquotaINSS = 570.88;
//  salarioLiquido = salarioBruto - aliquotaINSS;
//}
//
//if (salarioLiquido <= 1903.98) {
//  aliquotaIR = 0;
//}
//else if (salarioLiquido <= 2826.65) {
//  aliquotaIR = (salarioLiquido * 0.075) - 142.80;
//}
//else if (salarioLiquido <= 3751.05) {
//  aliquotaIR = (salarioLiquido * 0.15) - 354,80;
//}
//else if (salarioLiquido <= 4664.68) {
//  aliquotaIR = (salarioLiquido * 0.225) - 636.13;
//} 
//else {
//  aliquotaIR = (salarioLiquido * 0.275) - 869.36;
//}
//
//salarioLiquido = salarioBruto - aliquotaINSS - aliquotaIR;
//console.log ("O salário liquido é de: " + salarioLiquido);