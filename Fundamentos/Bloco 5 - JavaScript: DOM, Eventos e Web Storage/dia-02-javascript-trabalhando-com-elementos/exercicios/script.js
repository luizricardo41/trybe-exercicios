let bodyContent = document.querySelector('.content-body');
let titleH1 = document.createElement('h1');
titleH1.className = "title";
titleH1.innerText = 'Exercício 5.2 - JavaScript DOM';
bodyContent.appendChild(titleH1);

let bodyContentMain = document.querySelector('.content-body');
let tagMain = document.createElement('main');
tagMain.className = "main-content";
bodyContentMain.appendChild(tagMain);

let mainContent = document.querySelector('.main-content');
let tagSection = document.createElement('section');
tagSection.className = "center-content";
mainContent.appendChild(tagSection);

let sectionContent = document.querySelector('.center-content');
let tagP = document.createElement('p');
tagP.innerText = "Paragrafo inserido no exercicio 4";
sectionContent.appendChild(tagP);

let mainContentLeft = document.querySelector('.main-content');
let tagSectionLeft = document.createElement('section');
tagSectionLeft.className = "left-content";
mainContentLeft.appendChild(tagSectionLeft);

let mainContentRight = document.querySelector('.main-content');
let tagSectionRight = document.createElement('section');
tagSectionRight.className = "right-content";
mainContentRight.appendChild(tagSectionRight);

let sectionLeft = document.querySelector('.left-content');
let tagImg = document.createElement('img');
tagImg.src = "https://picsum.photos/200";
tagImg.id = "small-image";
sectionLeft.appendChild(tagImg);

let sectionRight = document.querySelector('.right-content');
let tagUl = document.createElement('ul');
sectionRight.appendChild(tagUl);

let ulRight = document.querySelector('.right-content').firstChild;
let numbers = {
  1: 'Um',
  2: 'Dois',
  3: 'Três',
  4: 'Quatro',
  5: 'Cinco',
  6: 'Seis',
  7: 'Sete',
  8: 'Oito',
  9: 'Nove',
  10: 'Dez',
}
for (index = 1; index <= 10; index += 1) {
  let number = numbers[index];

  let liRight = document.createElement('li');
  liRight.innerText = number;
  ulRight.appendChild(liRight);
}

let mainTagH3 = document.querySelector('.main-content');
for (let index = 0; index < 3; index += 1){
  let tagH3 = document.createElement('h3');
  tagH3.className = "description";
  mainTagH3.appendChild(tagH3);
}