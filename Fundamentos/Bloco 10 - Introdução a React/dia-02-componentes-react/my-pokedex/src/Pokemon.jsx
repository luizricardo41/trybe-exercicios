import React from "react"

class Pokemon extends React.Component {
  render() {
    const { name, type, peso, image } = this.props

    return (
      <div className="pokemon">
        <div>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Peso médio: {peso}</p>
        </div>
        <img src = {image} className="image" alt="" />
      </div>
    );
  }
}

export default Pokemon;