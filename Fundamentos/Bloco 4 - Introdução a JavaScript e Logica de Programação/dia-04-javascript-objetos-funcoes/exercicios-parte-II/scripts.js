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

/*function indexHigherValue (arrayValue) {

  let value = 0;
  let higherValue = 0;

  for (let i = 0; i < arrayValue.length; i += 1){
    value = arrayValue[i];

    if (value >= higherValue){
      higherValue = value;
    }
  }
  let indexHigher = arrayValue.indexOf (higherValue);
  return indexHigher;
}

let arrayTest = [3, 10, 20, 1, 50, 67, 81, 89, 35];
let result = indexHigherValue(arrayTest);
console.log (result);*/

// EXERCICIO 3 - PARTE II - CRIAR UMA FUNÇÃO QUE RECEBA UM ARRAY DE INTEIROS E RETORNE O INDICE DO MENOR VALOR.

/*function indexLowestValue (arrayValue) {

  let value = 0;
  let higherValue = 0;

  for (let i = 0; i < arrayValue.length; i += 1){
    value = arrayValue[i];

    if (value >= higherValue){
      higherValue = value;
    }
  }

  let lowestValue = higherValue;

  for (let i = 0; i < arrayValue.length; i += 1){
    value = arrayValue[i];
    
    if(value < higherValue && value < lowestValue){
    lowestValue = value;
    }
  }

  let indexLowest = arrayValue.indexOf(lowestValue);
  return indexLowest;
}

let arrayTest = [3, 10, 20, 1, 50, 67, 81, 89, 35];
let result = indexLowestValue (arrayTest);
console.log (result);*/

// EXERCICIO 4 - PARTE II - CRIAR UMA FUNÇÃO QUE RECEBA UM ARRAY DE NOMES E RETORNAR O NOME COM MAIOR QUANTIDADE DE CARACTERES;

function contCharacterNames (arrayNames){

  let name;
  let contCharacter;
  let character = 0;
  let nameCharacter = '';

  for (let i = 0; i < arrayNames.length; i += 1){
    name = arrayNames[i];
    contCharacter = name.length;

    if(contCharacter >= character){
      character = contCharacter;
      nameCharacter = name;
    }
  }
  return nameCharacter;
}

let arrayTest = ['José', 'Francisco', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let result = contCharacterNames (arrayTest);
console.log (result);