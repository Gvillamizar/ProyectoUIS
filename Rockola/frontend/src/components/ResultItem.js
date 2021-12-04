import React from "react";
import { Stack, Image } from "react-bootstrap";
import { FileEarmarkMusic, FileEarmarkPlay } from "react-bootstrap-icons";


const ResultItem = (props) => {
  const { musicoData } = props;
  return (
    
    <Stack gap={4} direction="horizontal">
      <Image
        src={musicoData.Foto}
        roundedCircle
        width="60px"
        height="60px"
      />
      <div>
        <h5>{musicoData.Nombre_Artista}</h5>

        <Stack gap={2} direction="horizontal">
          <FileEarmarkMusic />
          <div>Canción:</div>
          <div>{musicoData.Cancion}</div>
        </Stack>

        <Stack gap={2} direction="horizontal">
          <FileEarmarkPlay />
          <div>Década:</div>
          <div>{musicoData.Decada}</div>
        </Stack>
      </div>     
    </Stack>
  );
};

export default ResultItem;