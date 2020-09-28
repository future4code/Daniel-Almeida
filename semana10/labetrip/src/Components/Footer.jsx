import React from 'react'
import {Container, Row, Col, Alert} from 'react-bootstrap'
export default function Footer() {
    return (
        <div>
            <Container fluid className="header">            
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                    <Alert variant="dark">Contact</Alert>
                </Col>
                <Col xs={2}></Col>
            </Row>
            </Container>
        </div>
    )
}
