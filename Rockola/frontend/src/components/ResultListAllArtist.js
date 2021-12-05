import React, { useState, useEffect } from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

import { getMusica } from "../apis/ArtistasCRUD";
import Artista from "./Artista";

const ResultListAllArtist = () => {
  const [SearchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getMusica(setSearchResults);
  }, []);

  return (
    <Tab.Container id="list-group-tabs-example">
      <Row>
        <Col sm={5}>
          <ListGroup>
            {SearchResults.map((result, index) => (
              <ListGroup.Item action href={"#" + index}>
                <ResultListAllArtist musicoData={result} />
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

export default ResultListAllArtist;