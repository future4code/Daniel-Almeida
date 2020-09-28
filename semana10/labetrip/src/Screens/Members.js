import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Form, Container, Col, Row} from 'react-bootstrap';
import '../App.css'

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-almeida-jackson";

function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      history.push("/trip");
    }
  }, [history]);

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        console.log(response.data)
        localStorage.setItem("token", response.data.token);
        history.push("/trip");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container fluid>            
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                <Form className="login">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={emailValue} onChange={handleEmailChange} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={passwordValue} onChange={handlePasswordChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={handleLogin}>
                        Login
                    </Button>
                    </Form>
                    </Col>
                    <Col xs={2}></Col>
            </Row>
            </Container>
      
    </div>
  );
}

export default LoginPage;
