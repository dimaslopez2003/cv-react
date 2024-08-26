import React from "react";
import { Box, Container } from "@mui/material";
import Header from "./layout/Header";
import ProfileCard from "./components/ProfileCard";
import AboutMe from "./components/AboutMe";
import Footer from "./layout/Footer";
import Education from "./pages/Educacion";
import Experience from "./pages/Experiencia";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ProfileCard />
      <Footer />
    </div>
  );
};

export default App;
