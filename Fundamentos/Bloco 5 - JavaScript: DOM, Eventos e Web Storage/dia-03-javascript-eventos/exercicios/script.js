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

// Escreva seu código abaixo.


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
      daysList.classList.add('fryday');
    }
  }
}

createDaysOfMonth();

function createButton(text) {
  let divButton = document.getElementsByClassName('buttons-container');
  let buttonHoliday = document.createElement('button');
  buttonHoliday.innerText = text;
  buttonHoliday.className = 'btn-holiday';
  divButton[0].appendChild(buttonHoliday);
}

createButton('Feriados');