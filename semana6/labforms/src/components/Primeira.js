import React from "react";

class Primeira extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input />
        
        <p>2. Qual o sua idade?</p>
        <input />
        
        <p>3. Qual o seu email?</p>
        <input />
        
        <p>4. Qual o sua escolaridade?</p>
        <select></select> <br/><br/>
        <button onClick={this.props.funcaoClickSegunda}>Próxima etapa</button>

      </div>
    );
  }
}

export default Primeira;

