import React from "react";

class Terceiro extends React.Component {
  render() {
    return (
      <div>
      <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input />
        
        <p>8. Você fez algum curso complementar?</p>
        <select></select> <br /><br />

        <button onClick={this.props.funcaoClickQuarto}>Próxima etapa</button>
        
      </div>
    );
  }
}

export default Terceiro;
