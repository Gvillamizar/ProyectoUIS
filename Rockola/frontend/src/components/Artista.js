import React from "react";
import { Stack, Image } from "react-bootstrap";
import { FileEarmarkMusic, FileEarmarkPlay, Whatsapp } from "react-bootstrap-icons";
import imagen from "../assets/img/Shakira.jpg"

const Artista = () => {
  return (
    <Stack gap={2} className="align-items-center">
      <Image
        src={imagen}
        roundedCircle
        width="80px"
        height="80px"
      />
      <h4>Shakira</h4>
      <div className="justify-content-center">
        <Stack gap={2} direction="horizontal">
          <FileEarmarkMusic />
          <div>Canción 1</div>
        </Stack>
        <Stack gap={2} direction="horizontal">
          <FileEarmarkPlay />
          <div>Pop</div>
        </Stack>
        <p>
        <a href="https://www.youtube.com/watch?v=sPTn0QEhxds">https://www.youtube.com/watch?v=sPTn0QEhxds</a>
        </p>
      </div>
    </Stack>
  );
};

export default Artista;
