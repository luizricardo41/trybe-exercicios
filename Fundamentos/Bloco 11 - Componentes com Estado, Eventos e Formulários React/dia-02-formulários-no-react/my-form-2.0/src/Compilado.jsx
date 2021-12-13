import React from "react";

class Compilado extends React.Component {
  render() {
    const { dados: {
      nome, email, cpf, endereco, cidade, estado, moradia, resumo, cargo, descricaoCargo,
    },} = this.props
    return (
      <div>
        <span>Nome: { nome }</span><br/><br/>
        <span>Email: { email }</span><br/><br/>
        <span>CPF: { cpf }</span><br/><br/>
        <span>Endereço: { endereco }</span><br/><br/>
        <span>Cidade: { cidade }</span><br/><br/>
        <span>Estado: { estado }</span><br/><br/>
        <span>Moradia: { moradia }</span><br/><br/>
        <span>Resumo do Cargo: { resumo }</span><br/><br/>
        <span>Cargo: { cargo }</span><br/><br/>
        <span>Descrição do Cargo: { descricaoCargo }</span><br/><br/>
      </div>
    )
  }
}

export default Compilado; 