import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './Footer';
import Header from './Header';

const EducationContainer = styled(Box)({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#0F73D8',
  color: '#fff',
  flexGrow: 1,
  marginBottom: '50px',
});

const EducationItem = styled(Paper)({
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

const Education: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <EducationContainer>
          <Typography variant="h5" gutterBottom>Education</Typography>
          <Grid container spacing={12} justifyContent="center">
            <Grid item xs={12} md={6}>
              <EducationItem>
                <Typography variant="h6">Bachelor of Science in Computer Science</Typography>
                <Typography variant="subtitle1">University of Example</Typography>
                <Typography variant="body2">2015 - 2019</Typography>
                <Typography variant="body2">Studied various computer science topics including algorithms, data structures, and web development.</Typography>
              </EducationItem>
            </Grid>
            <Grid item xs={12} md={6}>
              <EducationItem>
                <Typography variant="h6">Master of Science in Software Engineering</Typography>
                <Typography variant="subtitle1">Example Institute of Technology</Typography>
                <Typography variant="body2">2019 - 2021</Typography>
                <Typography variant="body2">Focused on advanced software development methodologies, project management, and cloud computing.</Typography>
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