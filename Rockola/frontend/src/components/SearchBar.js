import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  const redirectUrl = "/search-results";
  const setArtistaInlocalstorage = (Nombre_Artista) => {
    console.log("Artista Seleccionado " + Nombre_Artista);
    localStorage.setItem('Nombre_Artista', Nombre_Artista);
  };
  
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿Quieres seleccionar a tu <strong>Artista</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('Shakira')}>Shakira</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('Rihanna')}>Rihanna</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('Adele')}>Adele</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('Bruno Mars')}>Bruno Mars</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={()=> setArtistaInlocalstorage('The Beatles')}>The Beatles</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;