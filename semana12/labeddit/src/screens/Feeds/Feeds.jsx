import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import PostCard from './PostCard'
import useRequestData from '../../hooks/useRequestData'
import Loading from '../../components/Loading/Loading'
import { FeedContainer } from './styled'
import { goToAddRecipe, goToRecipeDetail } from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'

const PostFeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], '/posts')

  const renderPosts = () => (
    posts.map((item) => {
      return (
        <PostCard
          key={item.id}
          text={item.text}
          username={item.username}
          votes={item.votesCount}
        />
      )
    })
  )

  return (
    <>
      <FeedContainer>
        {posts.length > 0 ? renderPosts() : <Loading/>}
      </FeedContainer>
     

    </>
  )
}

export default PostFeedPage
