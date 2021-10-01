function techList(arrayTechnology, name) {
  let technologies;
  if (arrayTechnology.length === 0) {
    technologies = 'Vazio!';
  } else {
    let order = arrayTechnology.sort();
    technologies = [];
    for (let i = 0; i < arrayTechnology.length; i += 1) {
      technologies[i] = { tech: order[i], name };
    }
  }
  return technologies;
}

module.exports = techList;