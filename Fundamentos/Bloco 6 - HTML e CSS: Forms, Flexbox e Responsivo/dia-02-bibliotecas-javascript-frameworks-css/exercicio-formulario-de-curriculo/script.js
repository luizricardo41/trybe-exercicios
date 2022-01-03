const insertOption = document.querySelector('.state');
const arrayEstados = ['','Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espirito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso do Sul',
  'Mato Grosso',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'];

  function preecheEstados() {
    for (let i = 0; i < arrayEstados.length; i += 1){
      const tagOption = document.createElement('option');
      insertOption.appendChild(tagOption);
      tagOption.innerText = arrayEstados[i];
      tagOption.classList.add('estado');
    }
  }
preecheEstados();

function stopFlow(event) {
  event.preventDefault();
}
document.getElementById('enviar-dados').addEventListener('click', stopFlow);
document.getElementById('enviar-dados').onclick = function submitInfo() { inserirDadosValidos(); };

function inserirDadosValidos() {
  const divConsolidado = document.getElementById('consolidado');
  const tagP = document.createElement('p');
  const findLabels = document.querySelectorAll('label');
  for (let index = 0; index < findLabels.length; index += 1) {
    const nome = findLabels[index];
    if (nome.innerText === 'Casa') {
      console.log(nome.innerText);
      const nameValue = document.querySelector('#moradia').innerText;
      nome.children[0].checked === true
        ? divConsolidado.appendChild(tagP).innerText = `${nameValue} ${nome.innerText}`
        : divConsolidado.appendChild(tagP).innerText = `${nameValue} Apartamento`;
    } else if (nome.id === 'Estado') {
      console.log(nome.id)
      const estado = document.querySelectorAll('.estado');
      for (let index2 = 0; index2 < estado.length; index2 += 1) {
        if (estado[index2].selected === true) {
          console.log(estado[index2].innerText)
          divConsolidado.appendChild(tagP).innerText = `Estado: ${estado[index2].innerText}`;
        }
      }
    }
  }
}

function resetarDados() {
  const removeTagP = document.querySelectorAll('#consolidado p');
  for (let i = 0; i < removeTagP.length; i += 1) {
    removeTagP[i].parentNode.removeChild(removeTagP[i]);
  }
}
document.getElementById('reseta-dados').onclick = function clear() { resetarDados(); };

const picker = new Pikaday({
  i18n: {
    previousMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
    weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  },
  field: document.getElementById('data-inicio'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});