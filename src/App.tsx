// src/App.tsx
import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './Componentes/Header';
import ProfileCard from './Componentes/ProfileCard';
import AboutMe from './Componentes/AboutMe';
import Footer from './Componentes/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ProfileCard />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
