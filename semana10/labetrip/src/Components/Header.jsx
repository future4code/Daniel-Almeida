import React from 'react'
import {Container, Row, Col, Alert} from 'react-bootstrap'
import '../app.css'
export default function Header() {
    return (
        <div>
            <Container fluid className="header">
            
            <Row>
                <Col xs={2}><Alert variant="danger">Enjoy a trip</Alert></Col>
                <Col xs={8}><Alert variant="primary">LabeTrip XX</Alert></Col>
                <Col xs={2}><Alert variant="success">Only Members</Alert></Col>
            </Row>
            </Container>
        </div>
    )
}
