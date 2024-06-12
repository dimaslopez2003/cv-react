import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';

const EducationContainer = styled(Box)({
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#0F73D8',
  color: '#fff',
  marginBottom: '20px',
});

const EducationItem = styled(Paper)({
  padding: '20px',
  margin: '10px 0',
  textAlign: 'left',
});

const Education: React.FC = () => {
  return (
    <EducationContainer>
      <Typography variant="h5" gutterBottom>Education</Typography>
      <Grid container spacing={2} justifyContent="center">
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
  );
};

export default Education;
