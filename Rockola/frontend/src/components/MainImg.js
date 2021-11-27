import React from 'react'
import { Carousel  } from 'react-bootstrap'
import img1 from "../assets/img/Baner1.jpg";
import img2 from "../assets/img/Baner1.jpg";
import ButtonLogIn from './ButtonLoginIn';

const MainImg = () => {
    const estilo = {
        backgroundColor: "rgb(0,0,0,0.5)"
    }
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption style={estilo}>
                    <h1>Conocimiento especializado a tu alcance</h1>
                    <h2>Unete a la comunidad</h2>
                    <ButtonLogIn/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption style={estilo}>
                    <h1>Ofrece tus servicios de todo lo que sabes</h1>
                    <h2>Unete a la comunidad</h2>
                </Carousel.Caption>
            </Carousel.Item>            
        </Carousel>
    )
}

export default MainImg
