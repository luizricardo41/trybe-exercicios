import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <fieldset>
          <div className="dadosPessoais">
            <label>
              Nome:
              <input type="text" name="name" maxLength="40" />
            </label>
            <label>
              E-mail:
              <input type="text" name="e-mail" maxLength="50" />
            </label>
            <label>
              CPF:
              <input type="text" name="cpf" maxLength="11" />
            </label><br /><br />
          </div>
          <div className="dadosLocal">
            <label>
              Endereço:
              <input type="text" name="endereco" maxLength="200" />
            </label>
            <label>
              Cidade:
              <input type="text" name="cidade" maxLength="28" />
            </label>
            <label>
              Estado:
              <select name="estado"></select>
            </label>
          </div>
          <div className="dadosTipo">
              <p>Tipo de Moradia:</p>
              <label htmlFor="tipo-ap">
                Apartamento<input type="radio" id="tipo-ap" name="tipo" />
              </label>
              <label htmlFor="tipo-casa">
                Casa<input type="radio" id="tipo-casa" name="tipo" />
              </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="dadosEmprego">
            <label htmlFor="">
              Resumo do Curriculo:<textarea name="" id="" cols="80" rows="10" maxLength="1000"></textarea>
            </label>
            <label htmlFor="">
              Cargo: <textarea name="" id="" cols="30" rows="1" maxLength="40"></textarea>
            </label>
            <label htmlFor="">
              Descrição do cargo: <textarea name="" id="" cols="80" rows="5" maxLength="500"></textarea>
            </label>
          </div>
        </fieldset>
      </>
    );
  }
}

export default Form;