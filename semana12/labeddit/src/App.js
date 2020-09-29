import React from 'react';
import { ThemeProvider} from '@material-ui/styles'
import {Button} from '@material-ui/core'
import {theme} from './constants/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      labeddit
      <Button color={'primary'} variant={'contained'}>ok</Button>
    </ThemeProvider>
  );
}

export default App;
