import React from "react";

class Segunda extends React.Component {
  render() {
    return (
      <div>
      <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <p>5. Qual curso?</p>
        <input />
        
        <p>6. Qual a unidade de ensino?</p>
        <input /> <br /><br />

        <button onClick={this.props.funcaoClickTerceiro}>Próxima etapa</button>
        
      </div>
    );
  }
}

export default Segunda;

