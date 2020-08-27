import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid;
  
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

const Main = styled.div`

width: 100%;
display: flex;
gap: 10px;
margin-top: 10px;
margin-left: 20px;
margin-right: 20px;
flex-wrap: wrap;
`

const Imagem = styled.img`
border: 1px solid;
width: 200px;
height: 250px;


`

class App extends React.Component {

  state = {
    lista: [],
    
  };

  pegarLista = () => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((resposta) => {
        this.setState({ lista: resposta.data });
        console.log(resposta.data)
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  componentDidMount() {
    this.pegarLista();
  }

  render() {
console.log("este", this.state.lista)
    return (
      <Main>
     
     
        {this.state.lista.map((ator) => {
          return (
            
            <Card>
            <Imagem src={ator.img} alt='' />
            <p key={ator.char_id} value={ator.name}>
              {ator.name} 
            </p>
            </Card>
          );
        })}
     
    </Main>
  );

  }
  

}
export default App;
