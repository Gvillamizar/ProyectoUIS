import React from "react";
import { Carousel } from "react-bootstrap";
import SignInButton from "./ButtonLoginIn.js";
import imagen from "../assets/img/Baner1.jpg"
import imagen2 from "../assets/img/Baner2.jpg"

const LandingImages = () => {
  const carCaption = (
    <>
      <h1>Bienvenido a La Rockola.com</h1>
      <h3>Programa tu música o Ingresa tus Datos para configurar tu catálogo de artistas</h3>
      <SignInButton />
    </>
  );

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ imagen }
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ imagen2 } 
          alt="Second slide"
        />
        <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          {carCaption}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingImages;