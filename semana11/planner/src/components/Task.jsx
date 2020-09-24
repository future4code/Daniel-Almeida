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
    
    useEffect(() => {
        
       getTasks()

       
    }, [])
    console.log(tasks, "as tasks") 
    return (
        <div>
            Task
        </div>
    )
}
