import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Card, Button} from 'react-bootstrap'
import "../App.css"


export default function Trip() {

    const [ matches, setMatches ] = useState([])

    useEffect(() => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips")
        .then(response => {
          setMatches(response.data.trips)
          console.log(response.data)          
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    return (
        <div className="card overflow-auto">            
            {matches.map(match => {
                return (
                    <Card key={match.id} className="card-item" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/100" />
                    <Card.Body>
                        <Card.Title>{match.name}</Card.Title>
                        <Card.Text>
                        {match.description}
                        </Card.Text>
                        <Button variant="primary">Enjoy</Button>
                    </Card.Body>
                    </Card>
                )
            })}
        </div>
    
    )
}
