import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'

import { addUsuario } from '../apis/ArtistasCRUD'

const RegistroUsuario = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    
    function save(even) {     
        even.preventDefault();   
        const obj = {
            Contraseña: even.target[0].value,
            Identificacion: even.target[1].value,
            Nombre: even.target[2].value,
            Nombre_Establecimiento: even.target[3].value,
            Nombre_Usuario: even.target[4].value,
            Numero_Identificacion: even.target[5].value,
            Tipo_usuario: even.target[6].value,
            ID: user.uid,
        }
        addUsuario(obj, (res)=>{
            console.log(res);
            if(res == "Success"){
               user.flagNewUser = false;
               localStorage.setItem("user", JSON.stringify(user));
               window.location.href="http://localhost:3000/home";
            }else{
                alert("Algo salió mal, vuelve a intentarlo")
            }            
        })                
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Registra Usuario</h1>
            </div>
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="Nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="TipoUsuario">
                    <Form.Label>Tipo Usuario:</Form.Label>
                    <Form.Select>
                        <option>Selecciona Tipo de Usuario</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Cliente">Cliente</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="NombreEstablecimiento">
                    <Form.Label>Nombre Establecimiento</Form.Label>
                    <Form.Control type="tel" placeholder="Ingresa el nombre del establecimiento" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="NombreUsuario">
                    <Form.Label>Nombre Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el Nombre de Usuario" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Contrasenha">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="text" laceholder="Ingresa la contraseña" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="TipoIdentificacion">
                    <Form.Label>Tipo Identificación:</Form.Label>
                    <Form.Select>
                        <option>Selecciona el Tipo de Identificación</option>
                        <option value="Cédula Ciudadania">Cédula Ciudadania</option>
                        <option value="Cédula Extrangeria">Cédula Extrangeria</option>
                        <option value="Pasaporte">Pasaporte</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="NumeroIdentificacion">
                    <Form.Label>Numero Identificacion</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el número de Identificación" />
                </Form.Group>

                <Container fluid="md">
                    <Row>
                        <Button variant="dark" type="submit">
                            Registrarse
                        </Button>
                    </Row>
                </Container>

                <br />
                <br />
            </Form>
        </>
    )
}

export default RegistroUsuario
