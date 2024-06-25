import React from 'react';
import { Box, Typography, Paper, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './Footer';
import Header from './Header';

const SkillsContainer = styled(Box)({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#fff', // Cambiado a blanco
  color: '#000', // Cambiado a negro
  flexGrow: 1,
  marginBottom: '50px',
});

const SkillItem = styled(Paper)({
  padding: '20px',
  margin: '10px 0',
  textAlign: 'left',
  position: 'relative',
  backgroundColor: '#f5f5f5', // Color de fondo de las tarjetas
  color: '#000', // Color del texto de las tarjetas
  minHeight: '250px', // Altura mínima para las tarjetas
});

const AvatarContainer = styled(Box)({
  position: 'absolute',
  top: '-30px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex', // Para que los avatares se alineen horizontalmente
  gap: '10px', // Espacio entre avatares
});

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const ContentContainer = styled(Box)({
  flexGrow: 1,
  paddingBottom: '50px',
});

const Skills: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Grid container justifyContent="center" sx={{ padding: '20px 0' }}>
        <Typography variant="h5" gutterBottom>Habilidades</Typography>
      </Grid>
      <ContentContainer>
        <SkillsContainer>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}> {/* Cambiado de md={6} a md={4} */}
              <SkillItem>
                <AvatarContainer>
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>Desarrollo Front-End</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                    Experiencia en desarrollo de interfaces de usuario con React, JavaScript, HTML y CSS.
                  </Typography>
                </Box>
              </SkillItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillItem>
                <AvatarContainer>
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" />
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Java_Duke.svg" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>Desarrollo Back-End</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                    Conocimientos en bases de datos SQL, desarrollo con Java y manejo de APIs.
                  </Typography>
                </Box>
              </SkillItem>
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillItem>
                <AvatarContainer>
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" />
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Docker_Moby_Project_logo.png" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>DevOps</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                    Experiencia en CI/CD, contenedorización con Docker y orquestación con Kubernetes.
                  </Typography>
                </Box>
              </SkillItem>
            </Grid>
          </Grid>
        </SkillsContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Skills;
