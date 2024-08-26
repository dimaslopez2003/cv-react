import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

interface SliderSkillsProps {
  images: string[];
}

const SliderSkills: React.FC<SliderSkillsProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Cambia la velocidad de autoplay según tus necesidades
  };

  return (
    <Box sx={{ width: "100%", height: "200px" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} component="img" src={image} sx={{ width: "100%", height: "200px", objectFit: "cover" }} />
        ))}
      </Slider>
    </Box>
  );
};

export default SliderSkills;
