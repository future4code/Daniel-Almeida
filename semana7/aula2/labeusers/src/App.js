import React from 'react';

import './App.css';
import UserList from './components/UserList'
import UserRegister from './components/UsersRegister'

class App extends React.Component {

  state = {
    showUsers: false,
  }

  changeUsers = () => {
    this.setState({showUsers : !this.state.showUsers})
  }

  render() {
    const paginaRenderizada = () => {
      if (this.state.showUsers) {
        return <UserList/>
      } else {
        return <UserRegister/>
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
