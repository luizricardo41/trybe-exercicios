// const fatorial = (number) => {
//   if (typeof (number) === 'string' || number === undefined) {
//     return 'O parametro precisa ser um número!';
//   }
//   let produto = number;
//   for (index = number - 1; index > 0; index -= 1) {
//     produto = produto * index;
//   }
//   return produto;
// }

// console.log(fatorial(4));

// const longestWord = (sentence) => {
//   let words = sentence.split(' ');
//   let biggerWord = '';
//   for (index = 0; index < words.length; index += 1) {
//     if (words[index].length > 0 && words[index].length > biggerWord.length) {
//       biggerWord = words[index];
//     }
//   }
//   return biggerWord;
// }
// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))

const arraySkills = ['HTML', 'CSS', 'FlexBox', 'DOM', 'Git']
const searchLetterX = (str) => {
  let determinatedString = 'Tryber x aqui!';
  let splitWord = determinatedString.split('');
  let newString;
  for (index = 0; index < splitWord.length; index += 1) {
    if (splitWord[index] === 'x') {
      newString = splitWord.splice(index, 1, `${str}`);
    }
  }
  splitWord = splitWord.join((''));
  return splitWord;
}

const secondFunction = (str2) => {
  let result2 = `${str2} 
  
  Minhas cinco principais habilidades são:`;

  arraySkills.sort();

  arraySkills.forEach((skill) =>
    result2 = `${result2} 
    
    - ${skill}`);
    
    result2 = `
    ${result2}
    
    #goTrybe
    `;

    return result2;
}

console.log(secondFunction(searchLetterX('Luiz Ricardo')));
