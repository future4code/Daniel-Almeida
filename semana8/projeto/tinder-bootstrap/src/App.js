import React, { useState, useEffect }  from 'react';
import './App.css'
import Cards from './Components/Cards'
import Matches from './Components/Matches'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function App() {
  const [ showButton, setButton ] = useState(true)

  const changeShowButton = () => {
    setButton(!showButton)    
  }
  const clean = () => {

            
    const body = {
      "id": "PatusZf4mHH6UoZfYC8I",
      
    }

    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:danielameida/clear", body)
      .then(response => {
                       
      })
      .catch(err => {
        console.log(err)
      })    
  }
  return (
    <>
      <Card className="card">
        <Container className="align">
          <Row>
            <Col>Tinder</Col>
          </Row>
          <Row>
            <Col>{showButton ? "" : <Button onClick={changeShowButton} variant="danger">Return</Button>}</Col>
            <Col>{showButton && (
              <Button onClick={changeShowButton} variant="success">Matches</Button>
              )}
            </Col>
          </Row>
        </Container>                   
         {showButton ? <Cards/> : <Matches/>}                
      </Card>
      <Container className="right">
        <Row>
          <Col>
            <Button onClick={clean} >Clear All</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;