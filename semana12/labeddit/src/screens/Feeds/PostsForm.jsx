import React from 'react'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer, PostCardContent, Username, VoteContainer } from './styled'
import Icon from '@mdi/react'
import { mdiAccount} from '@mdi/js'
import TextField from '@material-ui/core/TextField'



const PostsForm = () => {
  return (
    <PostCardContainer >
      
        
        <PostCardContent>
          <Username align={'center'}><Icon path={mdiAccount}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={190}
        color="white"
        />
            You
          </Username>
         <TextField
             label={'Title'}
              
              type={'text'}
              fullWidth
              required
              autoFocus
              
         />
         <TextField
             label={'Text'}
              
              type={'text'}
              fullWidth
              required
              autoFocus
              
         />
          <VoteContainer>
          <button style={{ cursor:"pointer"}}>Post</button>
        </VoteContainer>
        </PostCardContent>
      
    </PostCardContainer>
  )
}

export default PostsForm