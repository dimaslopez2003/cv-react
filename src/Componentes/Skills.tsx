// src/components/Skills.tsx
import React from 'react';
import { Box, Typography, Chip, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const SkillsContainer = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  animation: 'fade-in 0.5s ease-out',
  '@keyframes fade-in': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }
});

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'Git',
  'MUI'
];

const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={1}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} color="primary" />
          </Grid>
        ))}
      </Grid>
    </SkillsContainer>
  );
};

export default Skills;
