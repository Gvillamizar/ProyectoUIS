import React from 'react'
import Artista from "../components/Artista";
import { Navigate } from 'react-router-dom';

const Home = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user == undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Artista />
    </div>
  );
};

export default Home;

/*import React from 'react'
import Artista from '../components/RegistroArtista'
import { Stack,Image } from 'react-bootstrap'
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
                    <div>{musicoData.Cancion}</div>
                </Stack>
                <Stack gap={2} direction="horizontal">
                    <FileEarmarkPlay />
                    <div>{musicoData.Categoria}</div>
                </Stack>
                <p>{musicoData.Link}</p>
            </div>
        </Stack>
    );
};

export default Artistas*/