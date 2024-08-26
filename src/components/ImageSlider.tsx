// src/components/ImageSlider.tsx
import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../data/imageslider";

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: "100%", height: "50vh" }}>
      {" "}
      {/* Adjusted height */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "50vh",
              background: `url(${src}) center/cover no-repeat`,
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
