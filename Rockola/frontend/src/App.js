import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar";
import Footer from './components/Footer';

import Artistas from './screens/Artistas';
import Catalogo from './screens/Catalogo';
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import NotFound from "./screens/NotFound";
import SearchResults from "./screens/SearchResults";
import RegistroUsuario from "./screens/RegistroUsuario"
import RegistroArtista from "./screens/RegistroArtista"
import ArtistaHome from "./screens/ArtistaHome"


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
        <Route path="/registrousuario" element={<RegistroUsuario />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/registroartista" element={<RegistroArtista />} />
        <Route path="/ArtistaHome" element={<ArtistaHome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
