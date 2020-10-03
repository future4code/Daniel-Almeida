import React from 'react'
import useForm from '../../hooks/useForm'
import { PostCardContainer, PostCardContent, Username, VoteContainer } from './styled'
import Icon from '@mdi/react'
import { mdiAccount} from '@mdi/js'
import TextField from '@material-ui/core/TextField'
import { post } from '../../services/user'
import { useHistory } from 'react-router-dom'

const PostsForm = () => {
  const [form, handleInputChange] = useForm({ title: '', text: ''})

  const history = useHistory()

  const onClickPost = (event) => {
    event.preventDefault()
    post(form, history)
    
  }
  return (
    <PostCardContainer  >
      
        
        <PostCardContent id={'post_form'}>
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
             value={form.title}
              onChange={handleInputChange}
              name={'title'}
              type={'text'}
              fullWidth
              required
              autoFocus
              
         />
         <TextField
             label={'Text'}
             onChange={handleInputChange}
              type={'text'}
              fullWidth
              required
              autoFocus
              value={form.text}
              name={'text'} 
         />
          <VoteContainer>
          <button style={{ cursor:"pointer"}} onClick={onClickPost}>Post</button>
        </VoteContainer>
        </PostCardContent>
      
    </PostCardContainer>
  )
}

export default PostsForm