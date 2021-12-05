import React from 'react'
import { Container, Row, Col, Stack, Image, Button, ButtonGroup } from 'react-bootstrap'
import imagen from "../assets/img/Baner3.jpg"

import SearchBar from "./SearchBar";

const HomeUser = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto"><br></br><br></br><br></br>
                        <h3>Bienvenido {user.name}</h3>
                </Col>
                 <Col>
                 <br></br><br></br>
                    <Stack gap={10} className="align-items-center">
                        <Image src={imagen} />
                    </Stack>
                </Col> 
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <br></br><br></br><br></br>
                    <SearchBar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonGroup vertical>
                        <Button variant="secondary"><a href="/registroartista" style={{color:'white'}}>Registro de Artistas</a></Button>
                        <Button variant="secondary"><a href="/ArtistaHome" style={{color:'white'}}>Consulta Nuestro Catálogo</a></Button>
                    </ButtonGroup>
                </Col>
                <Col></Col>
            </Row>            
        </Container>
    )
}

export default HomeUser