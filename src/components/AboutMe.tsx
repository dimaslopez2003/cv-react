import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const AboutContainer = styled(Box)({
  padding: '20px 10px',
  textAlign: 'center',
  backgroundColor: '#fff',
  color: '#000',
  marginTop: '20px',
});

const AboutText = styled(Typography)({
  textAlign: 'justify',
  maxWidth: '800px',
  margin: '0 auto',
  '@media (max-width: 600px)': {
    padding: '0 20px',
  },
});

const AboutMe: React.FC = () => {
  return (
    <AboutContainer>
      <Typography variant="h4" gutterBottom>Hola mundo!, soy Dimas Lopez Montalvo</Typography>
      <AboutText variant="body1">
        Poseo una sólida iniciativa para ofrecer soluciones tecnológicas a problemas relacionados con mi campo de expertise.
        Mi enfoque se basa en la pasión y la responsabilidad en todo lo que emprendo.
        Estoy comprometido con el aprendizaje continuo y la mejora constante, buscando mantenerme actualizado con las últimas tendencias y avances en el ámbito de las tecnologías de la información.
      </AboutText>
    </AboutContainer>
  );
};

export default AboutMe;
