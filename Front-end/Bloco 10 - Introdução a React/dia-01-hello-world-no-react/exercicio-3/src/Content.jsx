import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className = 'todo-conteudo'>
        {conteudos.map((content, index) =>
          <>
            <div key = {index} className = 'content'>O conteúdo é {content.conteudo} <br />
            Status: {content.status} <br />
            Bloco: {content.bloco}</div> <br /> 
          </>
        )}
      </div>
    );
  }
}

export default Content;