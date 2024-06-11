// src/components/Profile.tsx
import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import { styled } from '@mui/system';

const ProfileContainer = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  marginBottom: '20px',
  animation: 'slide-in 0.5s ease-out',
  '@keyframes slide-in': {
    from: {
      opacity: 0,
      transform: 'translateX(-100%)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)'
    }
  }
});

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <Avatar alt="Tu Nombre" src="/path-to-your-photo.jpg" sx={{ width: 100, height: 100 }} />
      <Box ml={2}>
        <Typography variant="h5">Tu Nombre</Typography>
        <Typography variant="subtitle1">Descripción breve</Typography>
      </Box>
    </ProfileContainer>
  );
};

export default Profile;
