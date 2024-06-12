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
          <Button sx={{ color: "#fff" }} component={Link} to="/educacion">Educacion</Button>
          <Button sx={{ color: "#fff" }} component={Link} to="/experience">Experiencia</Button>
          <Button sx={{ color: "#fff" }} component={Link} to="/skills">Skills</Button>
          <Button sx={{ color: "#fff" }} component={Link} to="/certificates">Certificados</Button>
          <Button sx={{ color: "#fff" }} component={Link} to="/contact">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
