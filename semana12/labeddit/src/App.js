import React from 'react';
import { ThemeProvider} from '@material-ui/styles'
import { BrowserRouter } from 'react-router-dom'
import {theme} from './constants/theme'
import {Router} from './routes/Router';
import MainAppBar from './components/AppBar/MainAppBar'
import styled from 'styled-components'

const InnerScreen = styled.div`
  padding-top: 68px
`

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <MainAppBar />
    <InnerScreen>
    <Router/>
    </InnerScreen>
    
    </BrowserRouter>
     
    </ThemeProvider>
  );
}

export default App;
