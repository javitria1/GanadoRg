import React from "react";
import {Carousel} from 'react-bootstrap'
import LogoI from "../assets/img/ganaderia_II.jpg";
import LogoII from "../assets/img/2_vaquitas.jpg";
import SignInButton from "./SignInButton";

const LandingImages = () =>{
    const txtLanding = <>
    <h3>El control de tus ganaderias nunca fue tan fácil</h3>
    <h2>¡¡BIENVENIDO!!</h2>
    <SignInButton />
    </>
    
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = {LogoI} 
      alt="First slide"
    />
    <Carousel.Caption style ={{background: "rgba(0,0,0,0.5"}}>
      {txtLanding}
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = {LogoII} 
      alt="Second slide"
    />

    <Carousel.Caption style ={{background: "rgba(0,0,0,0.5"}}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
    )
};

export default LandingImages;