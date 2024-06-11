// src/components/ProfileCard.tsx
import React from 'react';
import { Box, Typography, Avatar, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Background = styled(Box)({
  backgroundImage: 'url(https://jigtechnologies.com/wp-content/uploads/2021/03/communication-background-1-1920x1080.jpg)', // Reemplaza con la ruta de tu imagen de fondo
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
});

const ProfileContainer = styled(Paper)({
  padding: '20px',
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#fff',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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

const ProfileCard: React.FC = () => {
  return (
    <Background>
      <ProfileContainer>
        <ProfileAvatar alt="Rachel Smith" src="/img/yo.png" />
        <Typography variant="h4">Dimas Arturo López Montalvo</Typography>
        <Typography variant="subtitle1">Web Developer and IT Support Jr</Typography>
        <Box mt={2} textAlign="left">
          <Typography variant="body2"><strong>Phone:</strong> +52 9981862431</Typography>
          <Typography variant="body2"><strong>Email:</strong> montalcoarturo@gmail.com</Typography>
          <Typography variant="body2"><strong>Dirección:</strong> Region 516 MZ28 LT7 Calle 34-A</Typography>
          <Typography variant="body2"><strong>Fecha de nacimiento</strong> 18 de mayo del 2003</Typography>
        </Box>
        <SocialMediaIcons>
          <IconButton href="https://www.linkedin.com/in/dimas-arturo-l%C3%B3pez-montalvo-7701bb285/" sx={{ color: '#0762C8' }}><LinkedInIcon /></IconButton>

          <IconButton href="#" sx={{color: '#000000'}}><GitHubIcon /></IconButton>
          <IconButton href="https://www.facebook.com/arturo.montalvo.3954" sx={{ color: '#4267B2' }}><FacebookIcon /></IconButton>
          <IconButton href="https://www.instagram.com/arturomontalvo2003/" sx={{ color: '#E1306C' }}><InstagramIcon /></IconButton>
          <IconButton href="mailto:montalcoarturo@gmail.com?subject=Asunto%20del%20correo&body=Cuerpo%20del%20correo"sx={{color: '#C10707'}}><EmailIcon /></IconButton>
        </SocialMediaIcons>
      </ProfileContainer>
    </Background>
  );
};

export default ProfileCard;
