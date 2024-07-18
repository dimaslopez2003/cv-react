import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Educacion from "./pages/Educacion";
import Experiencia from "./pages/Experiencia";
import Skills from "./pages/Skills";
import Certificados from "./pages/Certificados";
import Contacto from "./pages/Contacto";

const basename = "/cv-react"; // Cambia esto por el nombre de tu repositorio

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Educacion" element={<Educacion />} />
        <Route path="Experiencia" element={<Experiencia />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Certificados" element={<Certificados />} />
        <Route path="Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
