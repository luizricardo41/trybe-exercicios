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

const longestWord = (sentence) => {
  let words = sentence.split(' ');
  let biggerWord = '';
  for (index = 0; index < words.length; index += 1) {
    if (words[index].length > 0 && words[index].length > biggerWord.length) {
      biggerWord = words[index];
    }
  }
  return biggerWord;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))
 