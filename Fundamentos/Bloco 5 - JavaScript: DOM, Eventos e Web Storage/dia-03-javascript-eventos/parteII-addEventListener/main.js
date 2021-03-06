const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let selectFirst = document.querySelector('#first-li');
let selectSecond = document.querySelector('#second-li');
let selectThird = document.querySelector('#third-li');

selectFirst.addEventListener('click', selectElement);
selectSecond.addEventListener('click', selectElement);
selectThird.addEventListener('click', selectElement);

function selectElement (event){
  const techClass = document.querySelector('.tech');
  techClass.classList.remove('tech');
  event.target.classList.add('tech');
}


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

let textBox = document.getElementById('input');
textBox.addEventListener('keyup', newText)

function newText () {
  document.getElementsByClassName('tech')[0].innerText = textBox.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
let cabecalho = document.getElementsByTagName('h1');
cabecalho[0].addEventListener('dblclick', newPage);

function newPage() {
  window.open('https://luizricardo41.github.io/');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', changeColorOver);

function changeColorOver() {
  document.getElementById('my-spotrybefy').style.color = 'red';;
}

myWebpage.addEventListener('mouseout', changeColorOut);

function changeColorOut () {
  document.getElementById('my-spotrybefy').style.color = 'white';
}



// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.