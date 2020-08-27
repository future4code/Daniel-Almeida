import React, { Component } from 'react'
import axios from 'axios';



export default class UserList extends Component {
    state = {
        users: []
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
      componentDidMount() {
        this.getUsers();
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

    render() {
        return (
            <div>
                <h1>Lista de usuarios</h1>
        {this.state.users.map((item) => {
             return <p key={item.id}>{item.name}<button onClick={() => this.deleteUser(item.id)}>Deletar</button></p>;
           })}
            </div>
        )
    }
}

