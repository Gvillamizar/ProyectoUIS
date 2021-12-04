import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import ResultList from "../components/ResultList";

const SearchResults = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  const Nombre_Artista = localStorage.getItem('Nombre_Artista');

  if (user == undefined) {
    return <Navigate to="/" />;
  }
  
  return (
    <Container>
      <Row>
        <h1>El artista es: {Nombre_Artista}</h1>
      </Row>
      <Row>
        <Col>
          <ResultList Nombre_Artista={ Nombre_Artista }/>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
