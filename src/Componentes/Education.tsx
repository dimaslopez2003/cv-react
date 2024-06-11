// src/components/Education.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    duration: 'Sep 2014 - Jun 2018',
    description: 'Studied various computer science topics including algorithms, data structures, and web development.'
  }
];

const Education: React.FC = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <List>
        {education.map((edu, index) => (
          <ListItem key={index} component={Paper} style={{ marginBottom: '10px', padding: '10px' }}>
            <ListItemText
              primary={`${edu.degree} at ${edu.institution}`}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {edu.duration}
                  </Typography>
                  <Typography component="span" variant="body2">
                    {` — ${edu.description}`}
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

export default Education;
