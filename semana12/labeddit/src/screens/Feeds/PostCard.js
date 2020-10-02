import React from 'react'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer, PostCardContent, Username, VoteContainer } from './styled'
import Icon from '@mdi/react'
import { mdiAccount, mdiArrowUpBold } from '@mdi/js'




const PostsCard = (props) => {
  return (
    <PostCardContainer >
      
        
        <PostCardContent>
          <Username align={'center'}><Icon path={mdiAccount}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="white"
        spin/>
            {props.username}
          </Username>
          <Typography align={'center'}>
            {props.text}
          </Typography>
          <VoteContainer><div><Icon path={mdiArrowUpBold}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={180}
        color="white"
        onClick={props.vote}
        style={{ cursor:"pointer"}}
        />{props.votes}
        <Icon path={mdiArrowUpBold}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={0}
        color="white"
        onClick={props.unvote}
        style={{ cursor:"pointer"}}
        /></div>
        <button style={{ cursor:"pointer"}} >Comments</button>
        </VoteContainer>
        </PostCardContent>
      
    </PostCardContainer>
  )
}

export default PostsCard
