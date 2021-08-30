//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//let searchForFirstTask = tasksList[0];
//console.log(searchForFirstTask);
//Tomar café
//
//let searchForLastTask2 = tasksList[tasksList.length - 1];
//console.log(searchForLastTask2);
//Brincar com o cachorro

//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
//
//tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
//console.log(tasksList);
//
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
//
//tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
//console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//tasksList.pop();  // remove a última tarefa
//console.log(tasksList);

//['Tomar café', 'Reunião' ]

//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
//
//let indexOfTask = tasksList.indexOf('Brincar com o cachorro');
//console.log(indexOfTask);

// 1

//Exercicio 1 - Pagina Arrays - Obtenha o valor "Serviços" do array menu:

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//let menuServices = menu[1];
//
//console.log(menuServices);

//Exercicio 2 - Pagina Arrays - Procure o índice do valor "Portifólio" do array menu:

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//let indexOfPortfolio = menu.indexOf('Portfólio');
//
//console.log(indexOfPortfolio);

//Exercicio 3 - Pagina Arrays - Adicione o valor "Contato" no final do array menu:

//let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
//
//menu.push('Contato');
//
//console.log(menu);

//Exercicio 1 - Pagina For - Utilizar o for para imprimir os elementos da lista groceryList com o console.log():

//let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
//
//for (let index = 0; index < groceryList.length; index += 1){
//  console.log(groceryList[index]);
//}

//Exercicio 1 - Pagina For/of - Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names){
  console.log(nome);
}