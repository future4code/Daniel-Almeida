import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    users: [],
    inputName: '',
    inputEmail: '',
    showUsers: false,
  }

  getUsers = () => {
    const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
    {
      headers: {
        Authorization: "daniel-almeida-jackson"
      }
    })

    request
      .then((response) => {
        this.setState({ users: response.data})
      })
      .catch((error) => {
        console.log("error cometido")
      })

  }

  postUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body, 
    {
      headers: {
        Authorization: "daniel-almeida-jackson"
      }
    })

    request
      .then((response) => {
        alert(`usuário criado ${this.state.inputName}`)
        this.getUsers()
        this.setState({ inputName: ""})
        this.setState({ inputEmail: ""})

      })
      .catch((error) => {
        console.log("error cometido")
      })
  }

  deleteUser = (id) => {
    const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
    {
      headers: {
        Authorization: "daniel-almeida-jackson"
      }
    })


    request
      .then((response) => {
        this.getUsers()
        alert(`O usuario ${response} foi deletado`)
      })
      .catch((error) => {
        alert("error cometido")
      })


  }

  changeUsers = () => {
    this.setState({showUsers : !this.state.showUsers})
  }
  

  componentDidMount() {
    this.getUsers();
  }

  render() {

    const onChangeInputName = (evento) => {
      this.setState({ inputName: evento.target.value });
    }
    const onChangeInputEmail = (evento) => {
      this.setState({ inputEmail: evento.target.value });
    }

    const paginaRenderizada = () => {
      if (this.state.showUsers) {
        return <div><h1>Lista de usuarios</h1>
        {this.state.users.map((item) => {
             return <p key={item.id}>{item.name}<button onClick={() => this.deleteUser(item.id)}>Deletar</button></p>;
           })}</div>
      } else {
        return <div><h1>Cadastro de usuario</h1>
        <input value={this.state.inputName} onChange={onChangeInputName}></input><label>Nome</label><br/><br/>
        <input value={this.state.inputEmail} onChange={onChangeInputEmail}></input><label>Email</label><br/><br/>
        <button onClick={this.postUsers}>Criar usuario</button>
        </div>
      }
    };

  return (
    <div className="App">
    <button onClick={this.changeUsers}>{this.state.showUsers ? "Mostrar cadastro" : "Mostrar Usuários"}</button>
    {paginaRenderizada()}
     
     
    </div>
  )}
}

export default App;
