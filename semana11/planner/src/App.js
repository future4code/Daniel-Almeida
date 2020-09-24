import React, {useState} from 'react';
import { Alert, Button, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap'
import { HeaderAlert } from "./style";
import Task from "./components/Task"


function App() {

  function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>When and what will you do?</Alert.Heading>
          <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      title="Day of Week"
      id="input-group-dropdown-2"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
      <Button variant="outline-secondary">Create</Button>
    </InputGroup.Prepend>
    
  </InputGroup>

         
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Create</Button>}
      </>
    );
  }
  

  return (
    <div>
         <HeaderAlert variant="danger">
        <Alert.Heading>Planner</Alert.Heading>
        <p>
          What you gonna do today?
        </p>
      </HeaderAlert>
    <AlertDismissible/>
    <Task/>
    </div>
  );
}

export default App;
