// EXERCICIO 1 - IMPRIMIR NO CONSOLE UMA MENSAGEM DE BOAS VINDAS PARA A PERSONAGEM.

/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log ("Bem vinda, " + info.personagem + ".");*/

// EXERCICIO 2 - INSERIR NOVA PROPRIEDADE AO OBJETO

/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim';

console.log (info);*/

// EXERCICIO 3 - FAZER UM FOR/IN QUE MOSTRE TODAS AS CHAVES DO OBJETO

/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim';

for (let key in info){
  console.log (key);
}*/

// EXERCICIO 4 - FAZER UM NOVO FOR/IN QUE MOSTRE OS VALORES DAS CHAVES

/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim';

for (let key in info){
  console.log (info[key]);
}*/

// EXERCICIO 5 - DEFINIR UM NOVO OBJETO COM AS MESMAS CHAVES E IMPRIMIR AMBOS OS OBJETOS

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim';

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'sim',
};

for (let key in info){
  console.log (info[key] + " e " + info2[key]);
}