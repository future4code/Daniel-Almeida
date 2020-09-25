import { Alert, Button, Dropdown, DropdownButton, InputGroup, } from 'react-bootstrap'
import React, {useState} from 'react';

import axios from "axios";



export default function AlertCreate() {
    
    const [show, setShow] = useState(true);
    const [ textInput, setTextInput] = useState("")
    const [ selectInput, setSelectInput] = useState("Select your day")
    
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
                 
      })
      .catch(err => {
        console.log(err)
      })
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
                  id="input-group-dropdown-2"
                  
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
                  <input onChange={onChangeInput}/>              
                <Button variant="outline-secondary" onClick={postTasks}>Create</Button>
                
              </InputGroup.Prepend>          
          </InputGroup>
           
            <hr />
            
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me y'all!
              </Button>
            </div>
          </Alert>
          
          {!show && <Button style={{position:"fixed", top:"30px", right:"30px"}} onClick={() => setShow(true)}>Show Create</Button>}
        </>
      );
    }
}