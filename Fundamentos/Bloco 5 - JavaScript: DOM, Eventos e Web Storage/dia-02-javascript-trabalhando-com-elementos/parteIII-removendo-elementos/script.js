const elemento = document.querySelector('#elementoOndeVoceEsta').parentNode;
elemento.style.color = "red"
document.getElementById('primeiroFilhoDoFilho').innerText = "Aqui está o primeiro filho do filho."

let irmaoParaElementoOndeVoceEsta = document.querySelector('#pai');
let sectionParaIrmao = document.createElement('section');
sectionParaIrmao.innerText = "Irmão criado para Elemento onde vocês esta";
sectionParaIrmao.id = "irmao"; 
irmaoParaElementoOndeVoceEsta.appendChild(sectionParaIrmao);

let filhoParaElementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let sectionParaFilho = document.createElement('section');
sectionParaFilho.innerText = "Filho criado para elemento onde você está";
sectionParaFilho.id = "filho-onde-esta";
filhoParaElementoOndeVoceEsta.appendChild(sectionParaFilho);

let filhoParaFilho = document.querySelector('#primeiroFilhoDoFilho');
let sectionPrimeiroFilho = document.createElement('section');
sectionPrimeiroFilho.innerText = "Filho para primeiro filho do filho";
sectionPrimeiroFilho.id = "filhoNovo";
filhoParaFilho.appendChild(sectionPrimeiroFilho);

let excluirItens = document.querySelector("#primeiroFilho");
excluirItens.parentNode.removeChild(excluirItens);

let excluirItens2 = document.querySelector("#segundoEUltimoFilhoDoFilho");
excluirItens2.parentNode.removeChild(excluirItens2);

let excluirItens3 = document.querySelector("#filhoNovo");
excluirItens3.parentNode.removeChild(excluirItens3);

let excluirItens4 = document.querySelector("#filho-onde-esta");
excluirItens4.parentNode.removeChild(excluirItens4);

let excluirItens5 = document.querySelector("#terceiroFilho");
excluirItens5.parentNode.removeChild(excluirItens5);

let excluirItens6 = document.querySelector("#quartoEUltimoFilho");
excluirItens6.parentNode.removeChild(excluirItens6);

let excluirItens7 = document.querySelector("#irmao");
excluirItens7.parentNode.removeChild(excluirItens7);

let excluirItens8 = document.querySelector("#elementoOndeVoceEsta").nextSibling;
excluirItens8.parentNode.removeChild(excluirItens8);