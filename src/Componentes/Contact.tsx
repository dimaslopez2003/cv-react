// src/components/Contact.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/system';

const ContactContainer = styled(Paper)({
  padding: '20px',
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

const contactDetails = [
  {
    icon: <EmailIcon />,
    text: 'tuemail@ejemplo.com'
  },
  {
    icon: <PhoneIcon />,
    text: '+123 456 7890'
  },
  {
    icon: <LinkedInIcon />,
    text: 'linkedin.com/in/tu-perfil'
  }
];

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <List>
        {contactDetails.map((contact, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {contact.icon}
            </ListItemIcon>
            <ListItemText primary={contact.text} />
          </ListItem>
        ))}
      </List>
    </ContactContainer>
  );
};

export default Contact;
