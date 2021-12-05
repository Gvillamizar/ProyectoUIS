import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import ResultListAllArtist from "../components/ResultListAllArtist";

const SearchResults = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  const Nombre_Artista = localStorage.getItem('Nombre_Artista');

  if (user == undefined) {
    return <Navigate to="/" />;
  }
  
  return (
    <Container>
      <Row>
        <h1>Todos los Artistas</h1>
      </Row>
      <Row>
        <Col>
          <ResultListAllArtist />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
