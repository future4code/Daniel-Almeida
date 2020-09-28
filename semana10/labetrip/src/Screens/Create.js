import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Form, Container, Col, Row} from 'react-bootstrap';
import '../App.css'
import { useForm } from '../hooks/useForm';

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-almeida-jackson";

function CreatePage() {
  const { form, onChange, resetState } = useForm({
    nameValue: "",
    planetValue: "",
    date: "",
    description: "",
    durationInDays: 0
  });
  const history = useHistory();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    

    if (token) {
      history.push("/create");
    }
  }, [history]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmittion = (event) => {
    event.preventDefault();
    
    
    resetState();
  };

  const handleCreate = () => {
    const body = {
      name: form.nameValue,
      planet: form.planetValue,
      date: form.dataValue,
      description: form.descriptionValue,
      durationInDays: parseInt(form.durationInDays),
  }
  axios.post(`${baseUrl}/trips`,body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
  .then((response) => {
      console.log(response)
  })
  .catch((error) => {
     console.log(error)
     console.log(body)
     console.log(token)
  })

  resetState();
  };

  return (
    <div>
      <Container fluid>
            
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                <Form className="login" onSubmit={handleSubmittion}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name of trip</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={form.nameValue} name="nameValue" onChange={handleInputChange} />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Planet</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={form.planetValue} name="planetValue" onChange={handleInputChange} />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" placeholder="Enter date" value={form.dataValue} name="dataValue" onChange={handleInputChange} />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formName">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" value={form.descriptionValue} name="descriptionValue" onChange={handleInputChange} />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="number" placeholder="Days" value={form.durationInDays} name="durationInDays" onChange={handleInputChange} />
                    </Form.Group>
                    
                    <Button variant="primary" onClick={handleCreate} >
                        Create
                    </Button>
                    </Form>
                    </Col>
                    <Col xs={2}></Col>
            </Row>
            </Container>
      
    </div>
  );
}

export default CreatePage;