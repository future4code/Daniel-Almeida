import React from 'react';
import { Alert } from 'react-bootstrap'
import { HeaderAlert } from "./style";


function App() {
  return (
    <div>
         <HeaderAlert variant="danger">
        <Alert.Heading>Planner</Alert.Heading>
        <p>
          What you gonna do today?
        </p>
      </HeaderAlert>

    </div>
  );
}

export default App;
