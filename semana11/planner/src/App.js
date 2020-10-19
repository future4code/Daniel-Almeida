import React, {useState} from 'react';
import { Alert, Button, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap'
import Task from "./components/Task";
import axios from "axios";

function App() {

  const [show, setShow] = useState(false);
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
  
  function AlertDismissible() {    

    const [ selectInput, setSelectInput] = useState("Select day")
    const [ textInput, setTextInput] = useState("")  
    
    const onChangeInput = (event) => {
      setTextInput(event.target.value)
    }

    const sunday = () => {
      setSelectInput("Sunday")
    }
    const monday = () => {
      setSelectInput("Monday")
    }
    const tuesday = () => {
      setSelectInput("Tuesday")
    }
    const wednesday = () => {
      setSelectInput("Wednesday")
    }
    const thursday = () => {
      setSelectInput("Thursday")
    }
    const friday = () => {
      setSelectInput("Friday")
    }
    const saturday = () => {
      setSelectInput("Saturday")
    }    

    const postTasks = () => {
      const body = {
        text: textInput,
        day: selectInput,
      }
  
      axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-daniel-almeida", body)
      .then(response => {
        getTasks()
      })
      .catch(err => {
        console.log(err)
      })
    }

    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>When and what will you do?</Alert.Heading>
          <InputGroup className="mb-3 justify-content-center">
            <InputGroup.Prepend>
               <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title="Day of Week"          
              >
                <Dropdown.Item onClick={sunday}>Sunday</Dropdown.Item>
                <Dropdown.Item onClick={monday}>Monday</Dropdown.Item>
                <Dropdown.Item onClick={tuesday}>Tuesday</Dropdown.Item>
                <Dropdown.Item onClick={wednesday}>Wednesday</Dropdown.Item>
                <Dropdown.Item onClick={thursday}>Thursday</Dropdown.Item>
                <Dropdown.Item onClick={friday}>Friday</Dropdown.Item>
                <Dropdown.Item onClick={saturday}>Saturday</Dropdown.Item>
              </DropdownButton>
              <Button variant="outline-secondary">{selectInput}</Button>
              <input placeholder="type your task" onChange={onChangeInput}/>              
              <Button variant="outline-secondary" onClick={postTasks}>Create</Button>              
            </InputGroup.Prepend>          
          </InputGroup>        
          <hr />          
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">Close me y'all!</Button>
          </div>
        </Alert>        
      </>
    );
  } 

  return (
    <div>
        <Alert variant="danger">
          <Alert.Heading>Planner</Alert.Heading>
          {!show && <Button style={{position:"fixed", top:"30px", right:"30px"}} onClick={() => setShow(true)}>Show Create</Button>}
          <p>What you gonna do today</p>          
          {tasks.length === 0 && <p style={{textAlign: "center"}}>You don't have tasks</p>} 
          {tasks.length > 0 && <p style={{textAlign: "center"}}>You have: {tasks.length} task</p>} 
        </Alert>
        <AlertDismissible/>
        <Task getTasks={getTasks} tasks={tasks}/>
    </div>
  );
}

export default App;
