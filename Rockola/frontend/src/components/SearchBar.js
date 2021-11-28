import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  const redirectUrl = "/programacion";
  const setArtistaInlocalstorage = (Nombre_Artista) => {
    localStorage.setItem('Nombre_Artista', Nombre_Artista);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿Seleccionar a tu <strong>Artista</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('Shakira')}>Shakira</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('Rihanna')}>Rihanna</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('Adele')}>Adele</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('Beyonce')}>Beyonce</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('Doja Cat')}>Doja Cat</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;