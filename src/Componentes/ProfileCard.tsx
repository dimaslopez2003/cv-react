import React from 'react';
import { Box, Typography, Avatar, Paper, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ImageSlider from './ImageSlider';
import AboutMe from './AboutMe';

const ProfileContainer = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#fff',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  zIndex: 2, // Asegura que la tarjeta esté por encima del slider
  position: 'relative', // Necesario para el zIndex
  marginTop: '-80px', // Ajusta el margen superior según sea necesario
});

const ProfileAvatar = styled(Avatar)({
  width: '150px',
  height: '150px',
  margin: '0 auto 20px',
});

const SocialMediaIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '10px',
});

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const ContentContainer = styled(Box)({
  flexGrow: 1,
  paddingBottom: '50px', // Añadir padding inferior para asegurar separación
  position: 'relative', // Necesario para el zIndex
});

const ProfileCard: React.FC = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <ImageSlider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ProfileContainer id="profile">
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} textAlign="center">
                <ProfileAvatar alt="Dimas Arturo López Montalvo" src="/img/yo.png" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">Dimas Arturo López Montalvo</Typography>
                <Typography variant="subtitle1">Web Developer and IT Support Jr</Typography>
                <Box mt={2} textAlign="left" sx={{ px: 2 }}>
                  <Typography variant="body2"><strong>Phone:</strong> +52 9981862431</Typography>
                  <Typography variant="body2"><strong>Email:</strong> montalcoarturo@gmail.com</Typography>
                  <Typography variant="body2"><strong>Dirección:</strong> Region 516 MZ28 LT7 Calle 34-A</Typography>
                  <Typography variant="body2"><strong>Fecha de nacimiento:</strong> 18 de mayo del 2003</Typography>
                </Box>
                <SocialMediaIcons>
                  <IconButton href="#"><LinkedInIcon /></IconButton>
                  <IconButton href="#"><TwitterIcon /></IconButton>
                  <IconButton href="#"><GitHubIcon /></IconButton>
                  <IconButton href="#"><EmailIcon /></IconButton>
                </SocialMediaIcons>
              </Grid>
            </Grid>
          </ProfileContainer>
          <AboutMe />
        </Box>
      </ContentContainer>
    </MainContainer>
  );
};

export default ProfileCard;
