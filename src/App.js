import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import PokemonDetails from './Query/PokemonDetails/PokemonDetails.js';
import Search from './Query/Search/Search.js';
import Gallery from './Query/Gallery/Gallery.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
