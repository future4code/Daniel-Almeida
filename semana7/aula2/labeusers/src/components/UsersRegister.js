import React, { Component } from 'react'
import axios from 'axios';


export default class UsersRegister extends Component {
    
    state = {
        inputName: '',
        inputEmail: '',       
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
    
     

    render() {

        const onChangeInputName = (evento) => {
            this.setState({ inputName: evento.target.value });
          }
          const onChangeInputEmail = (evento) => {
            this.setState({ inputEmail: evento.target.value });
          }

        return (
            <div><h1>Cadastro de usuario</h1>
        <input value={this.state.inputName} onChange={onChangeInputName}></input><label>Nome</label><br/><br/>
        <input value={this.state.inputEmail} onChange={onChangeInputEmail}></input><label>Email</label><br/><br/>
        <button onClick={this.postUsers}>Criar usuario</button>
        </div>
        )
    }
}
