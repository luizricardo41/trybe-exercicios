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
  