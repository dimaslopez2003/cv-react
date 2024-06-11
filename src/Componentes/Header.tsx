// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar sx={{ backgroundColor: "#0F73D8", color: "#fff" }} position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dimas Lopez
        </Typography>
        <Box>
          <Button sx={{ color: "#fff" }}>Education</Button>
          <Button sx={{ color: "#fff" }}>Experience</Button>
          <Button sx={{ color: "#fff" }}>Skills</Button>
          <Button sx={{ color: "#fff" }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
