import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar sx={{ backgroundColor: "#0F73D8", color: "#fff" }} position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Curriculum Vitae
        </Typography>
        <Box>
          <Button component={Link} to="/" sx={{ color: "#fff" }}>Home</Button>
          <Button component={Link} to="/Educacion" sx={{ color: "#fff" }}>Educacion</Button>
          <Button component={Link} to="/Experiencia" sx={{ color: "#fff" }}>Experiencia</Button>
          <Button component={Link} to="/Skills" sx={{ color: "#fff" }}>Skills</Button>
          <Button component={Link} to="/Certificados" sx={{ color: "#fff" }}>Certificados</Button>
          <Button component={Link} to="/Contacto" sx={{ color: "#fff" }}>Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
