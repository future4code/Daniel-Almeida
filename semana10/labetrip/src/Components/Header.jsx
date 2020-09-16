import React from 'react'
import {Container, Row, Col, Alert} from 'react-bootstrap'
import '../App.css'
import { goToMembers, goToTrip, goToHomePage } from "../Router/goToPages";
import { useHistory } from "react-router-dom";

export default function Header() {

    const history = useHistory()

    return (
        <div>
            <Container fluid className="header">
            
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}><Alert onClick={() => goToHomePage(history)} variant="primary">LabeTrip XX</Alert></Col>
                <Col xs={2}></Col>
            </Row>
            <Row>
                <Col xs={2}></Col>
                <Col xs={4}>
                <Alert onClick={() => goToTrip(history)} variant="danger">Enjoy a trip</Alert>
                </Col>
                <Col xs={4}>
                <Alert onClick={() => goToMembers(history)} variant="success">Only Members</Alert>
                </Col>
                <Col xs={2}></Col>
            </Row>
            </Container>
        </div>
    )
}
