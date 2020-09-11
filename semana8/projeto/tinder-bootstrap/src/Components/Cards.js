import React, { useState, useEffect }  from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import '../App.css'
import axios from 'axios'

export default function Cards() {

  const [ card, setCard ] = useState([])    

  const getCard = () => {
    const result = axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:danielalmeida/person")
    result
      .then(response => {
          setCard(response.data.profile)
      })
      .catch(err => {
        console.log(err)
      })
  }  

  useEffect(()=>{

    getCard()

  }, [])

  const postCardTrue = () => {

    const body = {
      "id": `${card.id}`,
      "choice": true
    }
    axios
      .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:danielameida/person", body)
      .then(response => {
           
      })
      .catch(err => {
        console.log(err)
      })    
  }

  const postCardFalse = () => {

    getCard()        
    const body = {
      "id": `${card.id}`,
      "choice": false
    }

    axios
      .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:danielameida/person", body)
      .then(response => {
                           
      })
      .catch(err => {
        console.log(err)
      })    
  }




  return (
    <div>
      <Card.Img className="img" src={card.photo} />
      <Card.Body>
        <Card.Title>{card.name} {card.age}</Card.Title>
        <Card.Text>
            {card.bio}
        </Card.Text>
      </Card.Body>
      <Container className="align">
        <Row>
          <Col>
            <Button onClick={postCardFalse} variant="danger">X</Button>
          </Col>
          <Col>
            <Button onClick={postCardTrue} variant="success">♥️</Button>
          </Col>
        </Row>
      </Container>
    
    </div>
  )
}
