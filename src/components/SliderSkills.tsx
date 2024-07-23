import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagescertificates from "../data/imagecertificate";

const images = imagescertificates;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const SliderSkills: React.FC = () => (
  <Slider {...sliderSettings}>
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Slide ${index + 1}`}
        style={{ width: "100%", height: "150px", objectFit: "contain" }}
      />
    ))}
  </Slider>
);

export default SliderSkills;
