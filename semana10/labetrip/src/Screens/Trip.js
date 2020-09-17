import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Card, Button} from 'react-bootstrap'
import "../App.css"


export default function Trip() {

    const [ trips, setTrips ] = useState([])
    let token = window.localStorage.getItem("token")
    useEffect(() => {
        
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-almeida-jackson/trips")
        .then(response => {
          setTrips(response.data.trips)
          console.log(token)          
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    return (
        <div className="card overflow-auto">            
            {trips.map(match => {
                return (
                    <Card key={match.id} className="card-item" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://picsum.photos/100" />
                    <Card.Body>
                        <Card.Title>{match.name}</Card.Title>
                        <Card.Text>
                        {match.description}
                        </Card.Text>
                        {token && (<><Button variant="primary">Enjoy</Button><span>------</span><Button variant="danger">Delete trip</Button>
                        </>)}
                    </Card.Body>
                    </Card>
                )
            })}
        </div>
    
    )
}
