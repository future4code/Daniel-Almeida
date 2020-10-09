import React from 'react'
import Logo from '../../assets/logo_size.jpg'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { LogoImage } from './styled'

const SignUpPage = (props) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage alt={'logo'} src={Logo}/>
      <SignUpForm setButtonName={props.setButtonName}/>
    </ScreenContainer>
  )
}

export default SignUpPage
