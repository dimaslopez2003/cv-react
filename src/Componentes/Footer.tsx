import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0F73D8',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  marginTop: 'auto',
  position: 'relative', // Asegura que el footer esté en la parte inferior
  bottom: 0,
  width: '100%',
}));

const SocialMediaIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '10px',
  },
}));

const Links = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '10px',
  },
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialMediaIcons>
        <IconButton href="https://www.facebook.com/arturo.montalvo.3954" sx={{ color: '#fff' }}><FacebookIcon /></IconButton>
        <IconButton href="https://www.instagram.com/arturomontalvo2003/" sx={{ color: '#fff' }}><InstagramIcon /></IconButton>
        <IconButton href="https://www.linkedin.com/in/dimas-arturo-l%C3%B3pez-montalvo-7701bb285/" sx={{ color: '#fff' }}><LinkedInIcon /></IconButton>
        <IconButton href="#" sx={{ color: '#fff' }}><WhatsAppIcon /></IconButton>
      </SocialMediaIcons>
      <Links>
        <Link href="/" color="inherit">Home</Link>
        <Link href="#about" color="inherit">About</Link>
        <Link href="#contact" color="inherit">Contacto</Link>
      </Links>
      <Typography variant="body2">Copyright ©2024; By Dimas Arturo Lopez Montalvo with REACT.JS</Typography>
    </FooterContainer>
  );
};

export default Footer;
