import React from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

import ResultItem from "./ResultItem";
import Artista from "./Artista";

import { getMusicaArtista } from "../apis/ArtistasCRUD";

const Nombre_Artista = localStorage.getItem('Nombre_Artista');

const ResultList = () => {
  getMusicaArtista(Nombre_Artista, (res)=>{
    console.log(res);
  })

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={5}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              <ResultItem />
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              <ResultItem />
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              <ResultItem />
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              <ResultItem />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={7}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <Artista />
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
              <Artista />
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
              <Artista />
            </Tab.Pane>
            <Tab.Pane eventKey="#link4">
              <Artista />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ResultList;