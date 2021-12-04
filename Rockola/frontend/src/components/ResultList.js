import React, { useState, useEffect } from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

import ResultItem from "./ResultItem";
import Artista from "./Artista";

import { getMusicaArtista } from "../apis/ArtistasCRUD";

const Nombre_Artista = localStorage.getItem('Nombre_Artista');

const ResultList = (props) => {
  const [SearchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getMusicaArtista(props.Nombre_Artista, setSearchResults);
  }, []);

  return (
    <Tab.Container id="list-group-tabs-example">
      <Row>
        <Col sm={5}>
          <ListGroup>
            {SearchResults.map((result, index) => (
              <ListGroup.Item action href={"#" + index}>
                <ResultItem musicoData={result} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col sm={7}>
          <Tab.Content>
            {SearchResults.map((result, index) => (
              <Tab.Pane eventKey={"#" + index}>
                <Artista musicoData={result} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ResultList;