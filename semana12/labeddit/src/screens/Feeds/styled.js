import styled from 'styled-components'
import {primaryColor, secondaryColor} from '../../constants/colors'


export const PostCardContainer = styled.div`
  width: 70vw;
  margin-top: 20px;
  border: 1px solid gray;
  border-radius: 5px;
`

export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

export const Username = styled.div`
width: 100%;
height: 30px;
background-color: ${primaryColor};
text-align: right;
font-size: 18px;
color: white;

`
export const VoteContainer = styled.div`
width: 100%;
height: 30px;
background-color: ${primaryColor};
font-size: 18px;
color: white;

`


