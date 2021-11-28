import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar";

import Artistas from './screens/Artistas';
import Catalogo from './screens/Catalogo';
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import NotFound from "./screens/NotFound";
import Programacion from "./screens/Programacion";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/programacion" element={<Programacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
