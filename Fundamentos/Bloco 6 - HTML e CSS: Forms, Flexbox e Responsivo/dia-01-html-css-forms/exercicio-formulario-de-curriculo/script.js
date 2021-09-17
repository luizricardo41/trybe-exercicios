const insertOption = document.getElementById('select-state');
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
    }
  }
preecheEstados();

function stopFlow(event) {
  event.preventDefault();
  verificaData();
}
document.getElementById('enviar-dados').addEventListener('click', stopFlow);


function verificaData() {
  const dataInserida = document.getElementById('data-inicio').value;
  const dia = `${dataInserida[0]}${dataInserida[1]}`;
  const mes = `${dataInserida[3]}${dataInserida[4]}`;
  const ano = `${dataInserida[6]}${dataInserida[7]}`;
  if (dataInserida.length !== 8) {
    alert('Data inválida');
  } else if (dia < 0 || dia > 31) {
    alert('Dia inválido');
  } else if (mes < 0 || mes > 12) {
    alert('Mes inválido');
  } else if (ano < 0) {
    alert('Ano inválido');
  } else {
    inserirDadosValidos();
  }
}
//document.getElementById('enviar-dados').onclick = function submitInfo() { verificaData(); };

function inserirDadosValidos() {
  const insertContent = document.getElementsByTagName('label');
  for (let i = 0; i < insertContent.length; i += 1){
    if (i === 7 || i === 6) {
      const insertTagP = document.getElementById('consolidado');
      const tagP = document.createElement('p');
      insertTagP.appendChild(tagP);
      const itemName = document.getElementById('moradia').innerText;
      const conteudo = document.querySelector('input[name="tipo-moradia"]:checked').value;
      tagP.innerText = `${itemName} ${conteudo}`;
      i += 1;
    } else if (i === 8) {
      const insertTagP = document.getElementById('consolidado');
      const tagP = document.createElement('p');
      insertTagP.appendChild(tagP);
      const itemName = document.getElementsByTagName('label')[i].innerText;
      const conteudo = document.getElementById('resumo').value;
      tagP.innerText = `${itemName} ${conteudo}`;
    } else if (i === 5) {
      const insertTagP = document.getElementById('consolidado');
      const tagP = document.createElement('p');
      insertTagP.appendChild(tagP);
      const itemName = document.getElementsByTagName('label')[i].firstChild.textContent;
      const conteudo = document.getElementById('select-state').value;
      tagP.innerText = `${itemName} ${conteudo}`;
    } else {
      const insertTagP = document.getElementById('consolidado');
      const tagP = document.createElement('p');
      insertTagP.appendChild(tagP);
      const itemName = document.getElementsByTagName('label')[i].firstChild.textContent;
      const conteudo = document.getElementsByTagName('label')[i].children[0].value;
      tagP.innerText = `${itemName} ${conteudo}`;
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