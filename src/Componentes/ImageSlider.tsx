// src/components/ImageSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  'https://cdn.pixabay.com/photo/2022/02/18/06/17/futuristic-7020072_1280.jpg',
  'https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg',
  'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg'
];

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
    <Box sx={{ width: '100%', height: '50vh' }}> {/* Adjusted height */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} sx={{ width: '100%', height: '50vh', background: `url(${src}) center/cover no-repeat` }} /> 
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
