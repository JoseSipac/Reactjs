import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Favorites from './components/FavoritesPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        setPokemonList(response.data.results);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList pokemonList={pokemonList} loading={loading} />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} /> {/* Ruta para detalles de Pokémon */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
