// src/App.tsx
import React from 'react';
import Header from './Componentes/Header';
import Profile from './Componentes/Profile';
import Experience from './Componentes/Experience';
import Education from './Componentes/Education';
import { Container } from '@mui/material';
import Contact from './Componentes/Contact';
import Skills from './Componentes/Skills';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Profile />
        <Experience />
        <Education />
        <Contact/>
        <Skills/>
      </Container>
    </div>
  );
};

export default App;
