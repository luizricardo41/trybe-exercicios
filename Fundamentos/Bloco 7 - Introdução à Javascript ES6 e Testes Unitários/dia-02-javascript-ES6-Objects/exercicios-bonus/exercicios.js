const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = () => {
  const turnoNoite = {
    turno: 'noite'
  }
  Object.assign(lesson2, turnoNoite);
  // console.log(lesson2);
}
addTurno();

// const listaKeys = () => {
//   console.log(Object.keys(lesson2));
// }
// listaKeys();

// const sizeObject = () => {
//   const sizeObj = Object.keys(lesson3).length;
//   console.log(sizeObj);
// }
// sizeObject();

// const listaValues = () => {
//   console.log(Object.values(lesson3));
// }
// listaValues();


const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

// const totalAlunos = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
// console.log(totalAlunos);

// const valueKey = (obj, number) => Object.values(obj)[number];

// console.log(valueKey(lesson2, 3));

// const verifyPair = (obj, key, value) => {
//   const tamanho = Object.keys(obj).length
//   let teste = false;
//   for (i = 0; i < tamanho; i += 1) {
//     if (Object.keys(obj)[i] === key && Object.values(obj)[i] === value) {
//       teste = true;
//     } 
//   }
//   return teste;
// }
// console.log(verifyPair(lesson1, 'turno', 'noite'));

// const relatorio = (obj, teacher) => {
//   for (i = 0; i < Object.keys(obj).length; i += 1) {
//     for (j = 0; j < Object.keys(obj.lesson[i]).length; j += 1){
//       if (Object.values(obj.lesson[j]) === teacher) {

//       }
//     } 
    
//   }
// }

// console.log(Object.values(allLessons.lesson1));

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));