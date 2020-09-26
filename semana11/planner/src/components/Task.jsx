import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import {Flex} from '../style'

export default function Task({tasks, getTasks}) {
      
  const deleteTasks = (id) => {
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-daniel-almeida/${id}`)
    .then(response => {
      getTasks()
    })
    .catch(err => {
      console.log(err)
    })
  }     

  useEffect(() => {        
    getTasks()       
  }, [])

  return (
      <Flex>
          {tasks.map(task => {
            return (
              <div key={task.id} className="card text-white bg-primary m-3" style={{maxWidth: "15rem"}}>
                <div className="card-header"><strong>Day: </strong>{task.day}</div>
                <div className="card-body">
                  <p className="card-text"><strong>Task: </strong>{task.text}</p>
                </div>
                <Button variant="danger" onClick={() => deleteTasks(task.id)}>Delete</Button>                
              </div>
            )
          })} 
      </Flex>
  )
}
