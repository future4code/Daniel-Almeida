import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import PostCard from './PostCard'
import PostsForm from './PostsForm'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import { FeedContainer } from './styled'
import { goToLogin } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'

const PostFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], '/posts')

  const vote = (id) => {
  
    const body = {
      direction: 1
    }
      
      axios.put(`${BASE_URL}/posts/${id}/vote`,
        body, 
       {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
        .then((response) => {
         goToLogin(history) 
          
        })
        .catch((error) => {
          console.log(error)
          
          alert('Ocorreu um erro no voto, tente novamente')
        })
    
      }

      const unvote = (id) => {
  
        const body = {
          direction: -1
        }
          
          axios.put(`${BASE_URL}/posts/${id}/vote`,
            body, 
           {
            headers: {
              Authorization: localStorage.getItem('token')
            }
          })
            .then((response) => {
              goToLogin(history) 
              
            })
            .catch((error) => {
              console.log(error)
              
              alert('Ocorreu um erro no voto, tente novamente')
            })
        
          }

  const renderPosts = () => (
    posts.map((item) => {
      return (
        <PostCard
          key={item.id}
          title={item.title}
          text={item.text}
          username={item.username}
          votes={item.votesCount}
          vote={() => vote(item.id)}
          unvote={() => unvote(item.id)}
        />
      )
    })
  )

  return (
    <>
    
      <FeedContainer>
      <PostsForm/>
        {posts.length > 0 ? renderPosts() : <Loading/>}
      </FeedContainer>
     

    </>
  )
}

export default PostFeedPage
