import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    users: [],
    inputName: '',
    inputEmail: '',
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

  return (
    <div className="App">
     <h1>Cadastro de usuario</h1>
     <input value={this.state.inputName} onChange={onChangeInputName}></input><label>Nome</label><br/><br/>
     <input value={this.state.inputEmail} onChange={onChangeInputEmail}></input><label>Email</label><br/><br/>
     <button onClick={this.postUsers}>Criar usuario</button>
     <hr/>
     <h1>Lista de usuarios</h1>
     {this.state.users.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </div>
  )}
}

export default App;
