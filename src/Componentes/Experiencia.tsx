import React from 'react';
import { Box, Typography, Paper, Grid, Avatar, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './Footer';
import Header from './Header';

const ExperienceContainer = styled(Box)({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#0F73D8',
  color: '#fff',
  flexGrow: 1,
  marginBottom: '50px', // Añadir margen inferior para separar del footer
});

const ExperienceItem = styled(Paper)({
  padding: '20px',
  margin: '10px 0',
  textAlign: 'left',
});

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const ContentContainer = styled(Box)({
  flexGrow: 1,
  paddingBottom: '50px', // Añadir padding inferior para asegurar separación
});

const Experience: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <ExperienceContainer>
          <Typography variant="h5" gutterBottom>Experience</Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <ExperienceItem>
                <Box display="flex" alignItems="center">
                  <Avatar
                    alt="Company Logo"
                    src="/path/to/company/logo.png" // Reemplaza con la ruta de tu logo
                    sx={{ width: 56, height: 56, marginRight: '10px' }}
                  />
                  <Box>
                    <Typography variant="h6">Software Developer</Typography>
                    <Typography variant="subtitle1">Tech Company</Typography>
                    <Typography variant="body2">Jan 2020 - Present</Typography>
                  </Box>
                </Box>
                <List>
                  <ListItem>
                    <ListItemText primary="Developing web applications using React and TypeScript." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Implementing responsive designs and ensuring cross-browser compatibility." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Collaborating with the design team to create user-friendly interfaces." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Maintaining and optimizing existing codebase for performance." />
                  </ListItem>
                </List>
              </ExperienceItem>
            </Grid>
            <Grid item xs={12} md={6}>
              <ExperienceItem>
                <Box display="flex" alignItems="center">
                  <Avatar
                    alt="Company Logo"
                    src="/path/to/company/logo.png" // Reemplaza con la ruta de tu logo
                    sx={{ width: 56, height: 56, marginRight: '10px' }}
                  />
                  <Box>
                    <Typography variant="h6">Junior Developer</Typography>
                    <Typography variant="subtitle1">Another Tech Company</Typography>
                    <Typography variant="body2">Jun 2018 - Dec 2019</Typography>
                  </Box>
                </Box>
                <List>
                  <ListItem>
                    <ListItemText primary="Assisted in developing mobile applications using React Native." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Participated in code reviews and team meetings." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Worked on bug fixes and feature enhancements." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Helped maintain project documentation and code repositories." />
                  </ListItem>
                </List>
              </ExperienceItem>
            </Grid>
          </Grid>
        </ExperienceContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Experience;
