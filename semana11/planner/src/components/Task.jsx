import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Task() {

    const [ tasks, setTasks ] = useState([])   

    const getTasks = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-daniel-almeida")
        .then(response => {
          setTasks(response.data)         
        })
        .catch(err => {
          console.log(err)
        })
    }

    const deleteTasks = (id) => {
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-daniel-almeida${id}`)
      .then(response => {
        setTasks(response.data)         
      })
      .catch(err => {
        console.log(err)
      })
  }
      

    useEffect(() => {        
       getTasks()       
    }, [])

    return (
        <div>
            {tasks.map(task => {
              return (
                <div key={task.id} className="card text-white bg-primary mb-3" style={{maxWidth: "15rem"}}>
                  <div className="card-header"><strong>Day: </strong>{task.day}</div>
                  <div className="card-body">
                    <p className="card-text"><strong>Task: </strong>{task.text}</p>
                  </div>
                  <button onClci>Delete</button>
                  <button>Edit</button>
                </div>
              )
            })} 
        </div>
    )
}
