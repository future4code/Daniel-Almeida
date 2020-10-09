import React from 'react'
import Logo from '../../assets/logo_size.jpg'
import Button from '@material-ui/core/Button'
import { LogoImage, ScreenContainer, SignUpButtonContainer } from './styled'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = (props) => {
  const history = useHistory()
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage alt={'logo'} src={Logo}/>
      <LoginForm setButtonName={props.setButtonName}/>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          color={'primary'}
          variant={'text'}
          type={'submit'}
          fullWidth
        >
          Não tem cadastro? Clique aqui!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage
