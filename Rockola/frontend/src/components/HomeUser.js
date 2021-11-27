import React from 'react'
import { Container, Row, Col, Stack, Image, Dropdown, DropdownButton, Button, ButtonGroup } from 'react-bootstrap'
import imagen from "../assets/img/Baner1.jpg"

const HomeUser = () => {
    //const user = JSON.parse(localStorage.getItem('data'));
    //console.log(user.id)
    return (
        <Container>
            <Row>
                <Col>
                    <Stack gap={3} className="align-items-center">
                        <Image src={imagen} />
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Selecciona la ubicación de tu búsqueda
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/searchresults">Bogotá</Dropdown.Item>
                                <Dropdown.Item href="#">Lima</Dropdown.Item>
                                <Dropdown.Item href="#">Berlín</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <h1>Poner User.Id</h1>
                    </Stack>
                </Col>
            </Row>
            <Row>
                <ButtonGroup vertical>
                    <Button>Button</Button>
                    <Button>Button</Button>

                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>

                    <Button>Button</Button>
                    <Button>Button</Button>

                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </Row>
        </Container>
    )
}

export default HomeUser