// src/components/Experience.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Tech Company',
    duration: 'Jan 2020 - Present',
    description: 'Developing web applications using React and TypeScript.'
  },
  {
    role: 'Junior Developer',
    company: 'Another Tech Company',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Assisted in developing mobile applications using React Native.'
  }
];

const Experience: React.FC = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        {experiences.map((experience, index) => (
          <ListItem key={index} component={Paper} style={{ marginBottom: '10px', padding: '10px' }}>
            <ListItemText
              primary={`${experience.role} at ${experience.company}`}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {experience.duration}
                  </Typography>
                  <Typography component="span" variant="body2">
                    {` — ${experience.description}`}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Experience;
