function verificaPalindrome (word) {

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
console.log (result);
