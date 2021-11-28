import React from 'react'
import { Container, Row, Col, Stack, Image, Dropdown, DropdownButton, Button, ButtonGroup } from 'react-bootstrap'
import imagen from "../assets/img/Baner3.jpg"

import SearchBar from "./SearchBar";

const HomeUser = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                        <h3>Bienvenido {user.name}</h3>
                </Col>
                <Col>
                    <Stack gap={10} className="align-items-center">
                        <Image src={imagen} />
                    </Stack>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonGroup vertical>
                        <Button><a href="/programacion" style={{color:'white'}}>Artistas</a></Button>
                        <Button>Catálogo</Button>
                    </ButtonGroup>
                </Col>
                <Col>
                    <SearchBar />
                </Col>
            </Row>
        </Container>
    )
}

export default HomeUser