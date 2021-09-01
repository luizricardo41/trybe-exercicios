// EXERCICIO 1 - PARTE II - CRIAR UMA FUNÇÃO E RETORNAR TRUE SE FOR UM PALINDROMO OU FALSE SE NÃO FOR.

/*function verificaPalindrome (word) {

  let aux = '';
  let answers = false;

  for (let i = word.length - 1; i >= 0; i -= 1){
      aux = aux.concat(word[i]);
  }
  if (word === aux){
    answers = true;
  }
  return answers;
}

let result = verificaPalindrome ('casa');
console.log (result);*/

// EXERCICIO 2 - PARTE II - CRIAR UMA FUNÇÃO QUE RECEBA UM ARRAY E RETORNE O INDICE DO MAIOR VALOR.

function indexHigherValue (arrayValue) {

  let value = 0;
  let higherValue = 0;

  for (let i = 0; i < arrayValue.length; i += 1){
    value = arrayValue[i];

    if (value >= higherValue){
      higherValue = value;
    }
  }
  return higherValue;
}

let arrayTest = [3, 106, 20, 1, 50, 67, 103, 89, 35];
let result = indexHigherValue(arrayTest);
console.log (result);
