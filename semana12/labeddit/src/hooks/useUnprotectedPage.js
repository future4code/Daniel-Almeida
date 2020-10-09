import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToFeeds } from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToFeeds(history)
    }
  }, [history])
}

export default useUnprotectedPage
