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
  width: '100%',
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <Box>
            <IconButton href="https://www.facebook.com/arturo.montalvo.3954" sx={{ color: '#fff' }}><FacebookIcon /></IconButton>
            <IconButton href="https://www.instagram.com/arturomontalvo2003/" sx={{ color: '#fff' }}><InstagramIcon /></IconButton>
            <IconButton href="https://www.linkedin.com/in/dimas-arturo-l%C3%B3pez-montalvo-7701bb285/" sx={{ color: '#fff' }}><LinkedInIcon /></IconButton>
            <IconButton href="#" sx={{ color: '#fff' }}><WhatsAppIcon /></IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <Box>
            <Link href="/" color="inherit" sx={{ display: 'block', marginBottom: '10px' }}>Home</Link>
            <Link href="#about" color="inherit" sx={{ display: 'block', marginBottom: '10px' }}>About</Link>
            <Link href="#contact" color="inherit" sx={{ display: 'block', marginBottom: '10px' }}>Contacto</Link>
          </Box>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography variant="body2">
            Copyright ©2024; By Dimas Arturo Lopez Montalvo with REACT.JS
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
