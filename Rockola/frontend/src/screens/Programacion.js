import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Navigate} from 'react-router-dom';
import ResultList from "../components/ResultList";

const Programacion = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }
  const Nombre_Artista = localStorage.getItem('Nombre_Artista');
  return (
    <Container>
      <Row>
        <h1>El artista es: {Nombre_Artista}</h1>
      </Row>
      <Row>
        <Col>
          <ResultList />
        </Col>
      </Row>
    </Container>
  );
};

export default Programacion;
