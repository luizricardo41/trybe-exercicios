// Exercicio 1 - Fazer 5 programas, um para cada operação aritmética:

//const a = 32;
//const b = 8;
//
////adição
//let soma;
//
//soma = (a+b);
//console.log(soma);
//
////subtração
//let diferença;
//
//diferença = (a-b);
//console.log(diferença);
//
////divisão
//let quociente;
//
//quociente = (a/b);
//console.log(quociente);
//
////multiplicação
//let produto;
//
//produto = (a*b);
//console.log(produto);
//
////modulo
//let resto;
//
//resto = (a%b);
//console.log(resto);


//Exercicio 2 - Programa que retorna o maior entre dois números:

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

const a = -50;
const b = 40;
const c = 90;

if (a > 0 && b > 0 && c > 0){

  if (a + b + c === 180){
    console.log (true);
  } else {
    console.log(false);
  }

} else {
  console.log ("Erro: Um dos valores apresentados não é válido");
}