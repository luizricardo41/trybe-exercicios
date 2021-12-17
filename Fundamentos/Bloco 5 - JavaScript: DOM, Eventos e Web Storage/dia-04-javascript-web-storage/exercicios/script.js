const preferences = {
  backgroundTheme: 'white',
  colorText: 'black',
  font: 'Verdana',
  size: 16,
}
const tagBody = document.querySelector('body');
const tagSection = document.querySelector('.section-text');

function changeTheme() {
  const theme = document.querySelector('.background-color').value.toLowerCase();
  tagBody.style.backgroundColor = theme;
  preferences.backgroundTheme = theme;
  savePreferences();
}
const theme = document.querySelector('.background-color');
theme.addEventListener('change', changeTheme);

function changeColorText() {
  const colorText = document.querySelector('.text-color').value.toLowerCase();
  tagBody.style.color = colorText;
  preferences.colorText = colorText;
  savePreferences();
}
const colorText = document.querySelector('.text-color');
colorText.addEventListener('change', changeColorText);

function changeFontFamily() {
  const font = document.querySelector('.font').value;
  tagSection.style.fontFamily = font;
  preferences.font = font;
  savePreferences();
}
const fontText = document.querySelector('.font');
fontText.addEventListener('change', changeFontFamily);

let size = 16
function sizeUp() {
  size += 1;
  tagSection.style.fontSize = size + 'px';
  preferences.size = size;
  savePreferences();
}
const fontSizeUp = document.querySelector('.font-size-up');
fontSizeUp.addEventListener('click', sizeUp);

function sizeDown() {
  size -= 1;
  tagSection.style.fontSize = size + 'px';
  preferences.size = size;
  savePreferences();
}
const fontSizeDown = document.querySelector('.font-size-down');
fontSizeDown.addEventListener('click', sizeDown);

function savePreferences() {
  const saveData = JSON.stringify(preferences);
  localStorage.setItem('preferencias', saveData);
}

function returnPreferences() {
  if (localStorage.getItem('preferencias') === null) { 
    localStorage.setItem('preferencias', JSON.stringify({}));
  } else {
    const returnData = localStorage.getItem('preferencias');
    const preferencesNew = JSON.parse(returnData);
    tagBody.style.backgroundColor = preferencesNew.backgroundTheme;
    tagBody.style.color = preferencesNew.colorText;
    tagSection.style.fontFamily = preferencesNew.font;
    tagSection.style.fontSize = preferencesNew.size + 'px';
  }
}

window.onload = function () {
  returnPreferences();
};