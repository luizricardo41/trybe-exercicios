let bodyContent = document.querySelector('.content-body');
let titleH1 = document.createElement('h1');
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

