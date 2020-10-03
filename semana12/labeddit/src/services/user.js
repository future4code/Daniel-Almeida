import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeeds, goToLogin } from '../routes/Coordinator'

export const login = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      setIsLoading(false)
      goToFeeds(history)
      // setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Falha no Login, tente novamente")
    })
}

export const signUp = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/signup`, body)
    .then((response)=>{
      localStorage.setItem('token', response.data.token)
      setIsLoading(false)
      goToFeeds(history)
      setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
      alert("Falha no Cadastro, tente novamente")
    })
}

export const vote = (id) => {
  
  const body = {
    direction: +1
  }
    
    axios.put(`${BASE_URL}/posts/${id}/vote`,
      body, 
     {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        console.log(response)
        
      })
      .catch((error) => {
        console.log(error)
        
        alert('Ocorreu um erro no voto, tente novamente')
      })
  
    }

    export const post = (body, history) => {
            axios.post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
      )
        .then((response) => {
          
          goToLogin(history)
        
        })
        .catch((error) => {
          console.log(error)
          
          alert("Falha no Posts, tente novamente")
        })
    }