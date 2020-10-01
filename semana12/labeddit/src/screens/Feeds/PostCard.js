import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer, PostCardContent, Username, VoteContainer } from './styled'
import Icon from '@mdi/react'
import { mdiAccount, mdiArrowUpBold } from '@mdi/js'

const PostsCard = (props) => {

  return (
    <PostCardContainer >
      <CardActionArea>
        
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
          <VoteContainer><Icon path={mdiArrowUpBold}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={180}
        color="white"/>{props.votes}
        <Icon path={mdiArrowUpBold}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={0}
        color="white"/>
        </VoteContainer>
        </PostCardContent>
      </CardActionArea>
    </PostCardContainer>
  )
}

export default PostsCard
