// src/components/AboutMe.tsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const AboutContainer = styled(Box)({
  padding: '20px',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
});

const AboutMe: React.FC = () => {
  return (
    <AboutContainer>
      <Typography variant="h5" gutterBottom>Hola mundo!, soy Dimas Lopez Montalvo</Typography>
      <Typography variant="body1">
      Poseo una sólida iniciativa para ofrecer soluciones tecnológicas a problemas relacionados con mi campo de expertise. Mi enfoque se basa en la pasión y la responsabilidad en todo lo que emprendo.
Estoy comprometido con el aprendizaje continuo y la mejora constante, buscando mantenerme actualizado con las últimas tendencias y avances en el ámbito de las tecnologías de la información.
      </Typography>
    </AboutContainer>
  );
};

export default AboutMe;
