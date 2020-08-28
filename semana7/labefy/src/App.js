import React from "react";
import axios from "axios";
import styled from 'styled-components'

const Main = styled.div`
display: flex;

justify-content: space-evenly;
background-color: #312724;
height: 100vh;
`

const Left = styled.div`
width: 380px;
background-color: #312724;
color: #e9f7eb;
display: flex;
flex-direction: column;
align-items: center;
`
const Playlist = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
height: 50vh;
overflow-y: scroll;
width: 100%;
p {
margin-left: 10px;
width: 100px;

}
`
const Menu = styled.div`
margin-top: 15px;
display: flex;

`
const BotaoVerde = styled.button`
align-self: 
color: #e9f7eb;
border: none;

border-radius: 50px;
background-color: #54b953;

`

const Criar = styled.div`
display: flex;
width: 280px;
justify-content: space-evenly;

input {
  
  width: 150px;
  border-radius: 50px;
  border: none;
}
button {
  color: #312724;
border: none;

border-radius: 50px;
background-color:# e9f7eb;

}
`
const Right = styled.div`
width: 80vw;
background-color: #312724;
color: #e9f7eb;

`

const Play = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 300px;
button {
  height: 20px;

}
`



export default class App extends React.Component {
  state = {
    playlists: [],
    nomePlaylist: "",
    showCriar: false,

  };

  changeShowCriar = () =>{
    this.setState({showCriar : !this.state.showCriar})
  }

  pegarPlaylists = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "daniel-almeida-jackson"
        }
      }
    );

    request
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        console.log("Ocorreu um erro");
      });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "daniel-almeida-jackson"
        }
      }
    );

    

    request
      .then((resposta) => {
        alert(`A playlist ${this.state.nomePlaylist} foi criada com sucesso`);
        this.pegarPlaylists();
        this.setState({ nomePlaylist: "" });
      })
      .catch((erro) => {
        console.log("Erro");
      });
  };

  delPlaylist = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, 
    {
      headers: {
      Authorization: "daniel-almeida-jackson"
               }
    })

    .then((response) => {
        alert("Playlist deleted")
        this.pegarPlaylists()
    })
    .catch((error) => {
      console.log("error cometido em apagar")
    })

  }


  componentDidMount() {
    this.pegarPlaylists();
  }

  render() {
    const onChangeInput = (evento) => {
      this.setState({ nomePlaylist: evento.target.value });
    };

    return (
      <Main>
      <Left>
      <h1>Minhas Playlists</h1>
      
      
        
      <Playlist>
      
      {this.state.playlists.map((item) => {
          return <Play key={item.id} ><p >{item.name}</p>
          <BotaoVerde onClick={() => this.delPlaylist(item.id)}>Dell</BotaoVerde>
          <BotaoVerde >Add.music</BotaoVerde></Play> ;
        })}
      </Playlist>
        
      </Left>

      <Right>
      <Menu>
      <BotaoVerde onClick={this.changeShowCriar}>Criar nova playlists</BotaoVerde>
      {this.state.showCriar && (
        <Criar>
      
        <input value={this.state.nomePlaylist} onChange={onChangeInput} />
        <button onClick={this.criarPlaylist}>Criar!</button>
        
      </Criar>
      )}

      </Menu>
      
      </Right>
      
      </Main>
    );
  }
}