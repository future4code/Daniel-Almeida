import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeeds } from '../routes/Coordinator'

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
