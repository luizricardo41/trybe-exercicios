import React from 'react';
import Compilado from './Compilado';
import arrayEstados from './Data'

class Form extends React.Component {
  constructor() {
    super()
    this.handlerChange = this.handlerChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: 0,
      endereco: '',
      cidade: '',
      estado: '',
      moradia: '',
      resumo: '',
      cargo: '',
      descricaoCargo: '',
      submited: false,
      dados: {},
    }
  }

    handlerChange({ target }) {
      const { name } = target;
      const value = target.type === 'radio' ? target.id : target.value
      this.setState({
        [name]: value,
      })
    }
  
  renderCompilado = () => {(
    this.setState({
      dados: this.state,
      submited: true,
      nome: '',
      email: '',
      cpf: 0,
      endereco: '',
      cidade: '',
      estado: '',
      moradia: '',
      resumo: '',
      cargo: '',
      descricaoCargo: '',
    })
  )
  };
  
  resetData = () => {
    this.setState({
      dados: '',
      submited: false,
    })
  }

  render() {
    return (
      <>
        <fieldset>
          <div className="dadosPessoais">
            <label>
              Nome:
              <input 
                type="text" 
                name="nome" 
                maxLength="40" 
                onChange={this.handlerChange}
                value={this.state.nome}
              />
            </label>
            <label>
              E-mail:
              <input 
                type="email" 
                name="email" 
                maxLength="50"
                onChange={this.handlerChange}
                value={this.state.email}
              />
            </label>
            <label>
              CPF:
              <input 
                type="text"
                name="cpf"
                maxLength="11"
                onChange={this.handlerChange}
                value={this.state.cpf}
              />
            </label><br /><br />
          </div>
          <div className="dadosLocal">
            <label>
              Endereço:
              <input
                type="text"
                name="endereco"
                maxLength="200"
                onChange={this.handlerChange}
                value={this.state.endereco}
              />
            </label>
            <label>
              Cidade:
              <input
                type="text"
                name="cidade"
                maxLength="28"
                onChange={this.handlerChange}
                value={this.state.cidade}
              />
            </label>
            <label>
              Estado:
              <select
                name="estado"
                onChange={this.handlerChange}
                value={this.state.estado}
              >
                {arrayEstados.map((estado) => 
                <option value={estado} key={estado}>{estado}</option>)}
              </select>
            </label>
          </div>
          <div className="dadosTipo">
              <p>Tipo de Moradia:</p>
              <label htmlFor="Apartamento">
                Apartamento
                <input
                  type="radio"
                  id="Apartamento"
                  name="moradia"
                  onChange={this.handlerChange}
                  value={this.state.moradia}
                />
              </label>
              <label htmlFor="Casa">
                Casa
                <input
                  type="radio"
                  id="Casa"
                  name="moradia"
                  onChange={this.handlerChange}
                  value={this.state.moradia}
                />
              </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="dadosEmprego">
            <label htmlFor="">
              Resumo do Curriculo:
              <textarea
                name="resumo"
                id=""
                cols="80"
                rows="10"
                maxLength="1000"
                onChange={this.handlerChange}
                value={this.state.resumo}
              >
              </textarea>
            </label>
            <label htmlFor="">
              Cargo: 
              <textarea
                name="cargo"
                id=""
                cols="30"
                rows="1"
                maxLength="40"
                onChange={this.handlerChange}
                value={this.state.cargo}
              >
              </textarea>
            </label>
            <label htmlFor="">
              Descrição do cargo:
              <textarea
                name="descricaoCargo"
                id=""
                cols="80"
                rows="5"
                maxLength="500"
                onChange={this.handlerChange}
                value={this.state.descricaoCargo}
              >
              </textarea>
            </label>
          </div>
        </fieldset>
        <button onClick={() => this.renderCompilado()}>Enviar Curriculo</button>
        <button onClick={() => this.resetData()}>Resetar Dados</button>

        {this.state.submited && <Compilado dados={ this.state.dados }/>}
      </>
    );
  }
}

export default Form;