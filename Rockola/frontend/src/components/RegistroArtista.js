import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'

import { addMusica } from '../apis/ArtistasCRUD'

const RegistroArtista = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    
    function save(even) {     
        even.preventDefault();   
        const obj = {
            Nombre_Artista: even.target[0].value,
            Categoria: even.target[1].value,
            Cancion: even.target[2].value,
            Album: even.target[3].value,
            Decada: even.target[4].value,
            Foto: even.target[5].value,
            Link: even.target[6].value,
            //ID: 7, // vALIDAR COMO CALCULARLO O PONERLO AUTOMÁTICO
        }
        addMusica(obj, (res)=>{
            console.log(res);
            if(res == "Music Created"){
               //user.flagNewUser = false;
               //localStorage.setItem("user", JSON.stringify(user));
               window.location.href="http://localhost:3000/home";
            }else{
                alert("Algo salió mal, vuelve a intentarlo")
            }            
        })                
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Registro Artistas</h1>
            </div>
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre Artista</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del artista" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="categoria">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select>
                        <option>Selecciona la Categoría</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Rock and Roll">Rock and Roll</option>
                        <option value="Tropical">Tropical</option>
                        <option value="Vallenato">Vallenato</option>
                        <option value="Salsa">Salsa</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="cancion">
                    <Form.Label>Canción</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la canción" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Album">
                    <Form.Label>Album</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el Album" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="decada">
                    <Form.Label>Decada</Form.Label>
                    <Form.Select>
                        <option>Selecciona la Década</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="2000">2000</option>
                    </Form.Select>
                </Form.Group>          

                <Form.Group className="mb-3" controlId="foto">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el link de la foto" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="linkCancion">
                    <Form.Label>Link Canción</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el link de la canción" />
                </Form.Group>

                <Container fluid="md">
                    <Row>
                        <Button variant="dark" type="submit">
                            Guardar
                        </Button>
                    </Row>
                </Container>

                <br />
                <br />
            </Form>
        </>
    )
}

export default RegistroArtista