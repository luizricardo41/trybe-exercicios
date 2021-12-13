import './App.css';

const arrayCompromissos = ['Exercicio Fisico;','Estudar conteúdo;', 'Momento Inicial;', 'Aulas ao Vivo;', 'Aprender React;'];

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

function App() {
  return (
    <>
      <ul>{arrayCompromissos.map((value) => Task(value))}</ul>
    </>
  );
}

export default App;
