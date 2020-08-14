import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const FormPost = styled.div`
  display: flex;
  border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
    height: 300px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const Botao = styled.button`
  background-color: black;
  color: white;
  width: 50px;
  border-radius: 50%;

`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "joao",
        fotoUsuario: "https://picsum.photos/50/30",
        fotoPost: "https://picsum.photos/200/130"
      },
      {
        nomeUsuario: "daniel",
        fotoUsuario: "https://picsum.photos/50/20",
        fotoPost: "https://picsum.photos/200/120"
      }
    ],
    valorInputUsuario: "",
    valorInputFoto: "",
    valorInputFotoPost: "",

  }

  adicionaPost = () => {
    
    const novoPost = {
     
      nomeUsuario: this.state.valorInputUsuario,
      
      foto: this.state.valorInputFoto,
      fotoPost: this.state.inputFotoPost
    };

    
    const novoPosts = [...this.state.posts, novoPost];

    
    this.setState({ posts: novoPosts });
    this.setState({ valorInputPessoa: "" });
    console.log(novoPosts)
  };

  onChangeInputUsuario = (event) => {
    
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFoto = (event) => {
   
    this.setState({ valorInputFoto: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
  
    this.setState({ inputFotoPost: event.target.value });
  };

  

  render() {

    const lista = this.state.posts.map((post) => {
        return (
          <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })
    

    return (
      <div className={'app-container'}>
       {lista}
       <FormPost>
          <input
           
            value={this.state.valorInputUsuario}
            
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.valorInputFoto}
            // E a função também é outra
            onChange={this.onChangeInputFoto}
            placeholder={"Foto Usuário"}
          />
          <input
            // Diferente do input acima, a variável de estado aqui é outra
            value={this.state.inputFotoPost}
            // E a função também é outra
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Postada"}
          />
             <Botao onClick={this.adicionaPost}>Postar</Botao>
        </FormPost>
      </div>
      
    );
  }
}

export default App;
