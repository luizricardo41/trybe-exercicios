const elemento = document.querySelector('#elementoOndeVoceEsta').parentNode;
elemento.style.color = "red"
document.getElementById('primeiroFilhoDoFilho').innerText = "Aqui está o primeiro filho do filho."

let irmaoParaElementoOndeVoceEsta = document.querySelector('#pai');
let sectionParaIrmao = document.createElement('section');
sectionParaIrmao.innerText = "Irmão criado para Elemento onde vocês esta";
irmaoParaElementoOndeVoceEsta.appendChild(sectionParaIrmao);

let filhoParaElementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let sectionParaFilho = document.createElement('section');
sectionParaFilho.innerText = "Filho criado para elemento onde você está";
filhoParaElementoOndeVoceEsta.appendChild(sectionParaFilho);

let filhoParaFilho = document.querySelector('#primeiroFilhoDoFilho');
let sectionPrimeiroFilho = document.createElement('section');
sectionPrimeiroFilho.innerText = "Filho para primeiro filho do filho";
filhoParaFilho.appendChild(sectionPrimeiroFilho);

