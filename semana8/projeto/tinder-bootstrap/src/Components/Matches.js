import React, { useState, useEffect }  from 'react'
import '../App.css'
import {Image, Container} from 'react-bootstrap'
import axios from 'axios'

export default function Matches() {
    const [ matches, setMatches ] = useState([])

    useEffect(() => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:danielameida/matches")
        .then(response => {
          setMatches(response.data.matches)
          console.log(response.data)          
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    return (
        <Container className="match overflow-auto">
            {matches.map((item) => (
              <Container key={item.id}>
                <p><Image style={{width: "50px", height: "50px"}} src={item.photo} roundedCircle/>{item.name}</p>                             
              </Container>            
            ))}
        </Container>
    )
}
