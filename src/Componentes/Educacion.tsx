import React from 'react';
import { Box, Typography, Paper, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './Footer';
import Header from './Header';

const EducationContainer = styled(Box)({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#fff', // Cambiado a blanco
  color: '#000', // Cambiado a negro
  flexGrow: 1,
  marginBottom: '50px',
});

const EducationItem = styled(Paper)({
  padding: '20px',
  margin: '10px 0',
  textAlign: 'left',
  position: 'relative',
  backgroundColor: '#f5f5f5', // Color de fondo de las tarjetas
  color: '#000', // Color del texto de las tarjetas
});

const AvatarContainer = styled(Box)({
  position: 'absolute',
  top: '-30px',
  left: '50%',
  transform: 'translateX(-50%)',
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

const Education: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Grid container justifyContent="center" sx={{ padding: '20px 0' }}>
        <Typography variant="h5" gutterBottom>Educacion</Typography>
      </Grid>
      <ContentContainer>
        <EducationContainer>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <EducationItem>
                <AvatarContainer>
                  <Avatar alt="Bachelor of Science" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqu3XTRDqnMxYqpigUVXjaqLEdAVU918xQ1g&s" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6">INGENIERIA EN DESARROLLO Y GESTIÓN DEL SOFTWARE</Typography>
                  <Typography variant="subtitle1">UNIVERSIDAD TECNOLÓGICA DE CANCÚN</Typography>
                  <Typography variant="body2">2023 - CURSANDO ACTUALMENTE 2024</Typography>
                </Box>
              </EducationItem>
            </Grid>
            <Grid item xs={12} md={6}>
              <EducationItem>
                <AvatarContainer>
                  <Avatar alt="Master of Science" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqu3XTRDqnMxYqpigUVXjaqLEdAVU918xQ1g&s" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6">TÉCNICO SUPERIOR UNIVERSITARIO EN TECNOLOGÍAS DE LA INFORMACIÓN, ÁREA DESARROLLO DE SOFTWARE MÚLTIPLATAFORMA</Typography>
                  <Typography variant="subtitle1">UNIVERSIDAD TECNOLÓGICA DE CANCÚN</Typography>
                  <Typography variant="body2">2021-2023</Typography>
                </Box>
              </EducationItem>
            </Grid>

            <Grid item xs={12} md={6}>
              <EducationItem>
                <AvatarContainer>
                  <Avatar alt="Master of Science" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSta43TW66vDSraDWps2BX3Z4WFmZtwmrtzyg&s" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6">TECNICO EN SOPORTE Y MANTENIMIENTO DE EQUIPOS DE CÓMPUTO</Typography>
                  <Typography variant="subtitle1">CECYTE PLANTEL CANCÚN 2</Typography>
                  <Typography variant="body2">2018 - 2021</Typography>
                </Box>
              </EducationItem>
            </Grid>

            <Grid item xs={12} md={6}>
              <EducationItem>
                <AvatarContainer>
                  <Avatar alt="Master of Science" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRk6QqbaQsR3z6ZM00DKEZYKE0kOqSapaIgA&s" />
                </AvatarContainer>
                <Box mt={4}>
                  <Typography variant="h6">Master of Science in Software Engineering</Typography>
                  <Typography variant="subtitle1">Example Institute of Technology</Typography>
                  <Typography variant="body2">2019 - 2021</Typography>
                  <Typography variant="body2">Focused on advanced software development methodologies, project management, and cloud computing.</Typography>
                </Box>
              </EducationItem>
            </Grid>
          </Grid>
        </EducationContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Education;
