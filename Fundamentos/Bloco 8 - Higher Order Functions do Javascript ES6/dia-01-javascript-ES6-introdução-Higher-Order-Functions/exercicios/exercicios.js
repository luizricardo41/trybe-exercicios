const newPerson = (name) => {
  let newName = name.split(' ').join('').toLowerCase();
  const newObject = {
    name,
    email: `${newName}@trybe.com`
  }
  return newObject;
}

const newEmployees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: action('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: action('Carlos Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(newPerson));