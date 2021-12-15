function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfMonth () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysOfMonth = document.getElementById('days');
  for (let i = 0; i < dezDaysList.length; i += 1){
    let days = dezDaysList[i];
    let daysList = document.createElement('li');
    daysList.className = "day";
    daysList.innerHTML = days;
    daysOfMonth.appendChild(daysList);
    if (days === 24 || days === 25 || days === 31) {
      daysList.classList.add('holiday');
    } 
    if (days === 4 || days === 11 || days === 18 || days === 25){
      daysList.classList.add('friday');
    }
  }
}

createDaysOfMonth();

function createButton(text) {
  let divButton = document.getElementsByClassName('buttons-container');
  let addButton = document.createElement('button');
  addButton.innerText = text;
  addButton.className = text === 'Feriados' ? 'btn-holiday' : 'btn-friday';
  divButton[0].appendChild(addButton);
}

createButton('Feriados');
createButton('Sexta-Feira');

function colorHoliday() {
  const holidays = document.querySelectorAll('.holiday');
  let colorSelected = holidays[0].style.backgroundColor === '' ? 'greenyellow' : '';
  for (let index = 0; index < holidays.length; index += 1) {
    holidays[index].style.backgroundColor = colorSelected;
  }
}

const buttonHoliday = document.querySelector('.btn-holiday');
buttonHoliday.addEventListener('click', colorHoliday);


function modifyText() {
  const fridays = document.querySelectorAll('.friday');
  if (fridays[0].innerText.length <= 2) {
    for (let index = 0; index < fridays.length; index += 1) {
    fridays[index].innerHTML = 'Sextou';
    } 
  } else {
    const array = [4, 11, 18, 25];
    for (let index = 0; index < fridays.length; index += 1) {
      fridays[index].innerHTML = array[index];
    }
  }
}

const buttonFriday = document.querySelector('.btn-friday');
buttonFriday.addEventListener('click', modifyText);

function zoomOver(event) {
  event.target.style.fontSize = '30px'
}

function zoomOut(event) {
  event.target.style.fontSize = '20px'
}

const day = document.querySelectorAll('.day');
for (let index = 0; index < day.length; index += 1) {
  day[index].addEventListener('mouseover', zoomOver);
  day[index].addEventListener('click', colorTask);
  day[index].addEventListener('mouseout', zoomOut);
}

function addTask(text) {
  const myTasksDiv = document.querySelector('.my-tasks');
  const spanTask = document.createElement('span');
  myTasksDiv.appendChild(spanTask);
  spanTask.innerText = text;
}

addTask('Revisar Aulas');

function addColorTask(color) {
  const myTasksDiv = document.querySelector('.my-tasks');
  const divColor = document.createElement('div');
  myTasksDiv.appendChild(divColor);
  divColor.classList.add('task')
  divColor.style.backgroundColor = color;
}

addColorTask('green');

function selected(event) {
  event.target.classList.value === 'task'
    ? event.target.classList.add('selected')
    : event.target.classList.remove('selected');
}

const taskSelect = document.querySelector('.task')
taskSelect.addEventListener('click', selected);

function colorTask(event) {
  const color = document.querySelector('.selected') && document.querySelector('.selected').style.backgroundColor;
  if (event.target.style.color === color) {
    event.target.style.color = 'rgb(119, 119, 119)'; 
  } else {
    event.target.style.color = color;
  }
}


