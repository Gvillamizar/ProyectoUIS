import React from "react";
import { Stack, Image } from "react-bootstrap";
import { FileEarmarkMusic, FileEarmarkPlay } from "react-bootstrap-icons";
import imagen from "../assets/img/Shakira.jpg"

const ResultItem = () => {
  
  return (
    <Stack gap={4} direction="horizontal">
      <Image
        src={imagen}
        roundedCircle
        width="60px"
        height="60px"
      />
      <div>
        <h5>Shakira</h5>

        <Stack gap={2} direction="horizontal">
          <FileEarmarkMusic />
          <div>Canción 1</div>
        </Stack>

        <Stack gap={2} direction="horizontal">
          <FileEarmarkPlay />
          <div>Pop</div>
        </Stack>
      </div>
    </Stack>
  );
};

export default ResultItem;