import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import projeto from "../../../Assets/imagens/livro.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  const DivCar = styled.div`
    height: 700px;
    img {
      width: 60%;
      margin: auto;
    }
  `;


  return (
    <Slider {...settings}>
      <DivCar>
        <img src={projeto} alt="Slide 1" />
      </DivCar>
      <DivCar>
        <img src={projeto} alt="Slide 2" />
      </DivCar>
      <DivCar>
        <img src={projeto} alt="Slide 3" />
      </DivCar>
    </Slider>
  );
};

export default Carousel;
