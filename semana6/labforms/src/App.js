import React from 'react';
import styled from 'styled-components'
import Primeira from './components/Primeira'
import Segunda from './components/Segunda'
import Terceiro from './components/Terceiro'
import Quarto from './components/Quarto'

const AppMain = styled.div`
  font-family: sans-serif;
  text-align: center;

`

class App extends React.Component {
  state = {
    etapa: "primeira"
  };

  onClickSegunda = () => {
    this.setState({
      etapa: "segunda"
    });
  };

  onClickTerceiro = () => {
    this.setState({
      etapa: "terceiro"
    });
  };

  onClickTerceiro = () => {
    this.setState({
      etapa: "terceiro"
    });
  };
  onClickQuarto = () => {
    this.setState({
      etapa: "quarto"
    });
  };
 

  render() {
    const homepage = () => {
      switch (this.state.etapa) {
        case "primeira":
          return <Primeira funcaoClickSegunda={this.onClickSegunda} />;
        case "segunda":
          return <Segunda funcaoClickTerceiro={this.onClickTerceiro} />;
          case "terceiro":
            return <Terceiro funcaoClickQuarto={this.onClickQuarto} />;
            case "quarto":
              return <Quarto />;
        default:
          return <div> </div>;
      }
    };

    return(
    <AppMain>
      {homepage()}

    </AppMain>
    )
  }
}

export default App;
