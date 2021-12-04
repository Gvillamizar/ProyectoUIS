import React from 'react'
import Artista from '../components/RegistroArtista'
import { Stack, Image, Ratio } from 'react-bootstrap'
import { FileEarmarkMusic, FileEarmarkPlay } from "react-bootstrap-icons";

const Artistas = (props) => {
  const { musicoData } = props;

  return (
    <Stack gap={2} className="align-items-center">
      <Image
        src={musicoData.Foto}
        roundedCircle
        width="80px"
        height="80px"
      />
      <h4>{musicoData.Nombre_Artista}</h4>
      <div className="justify-content-center">
        <Stack gap={2} direction="horizontal">
          <FileEarmarkMusic />
          <div>
            <a href={musicoData.Link}>
              {musicoData.Cancion}
            </a>
          </div>
        </Stack>
        <Stack gap={2} direction="horizontal">
          <FileEarmarkPlay />
          <div>{musicoData.Categoria}</div>
        </Stack>
        <div style={{ width: 660, height: 'auto' }}>
          <Ratio aspectRatio="21x9">
            <embed type="image/svg+xml" src={musicoData.Link} />
          </Ratio>
        </div>
      </div>
    </Stack>
  );
};

export default Artistas;