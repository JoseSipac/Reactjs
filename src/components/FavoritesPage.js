import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites); // Cargar favoritos desde localStorage
  }, []);

  return (
    <div className="favorites-page">
      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No hay Pokemones agregados a favoritos.</p>
      ) : (
        <div className="pokemon-list">
          {favorites.map((pokemon, index) => (
            <div key={index} className="pokemon-card">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                className="pokemon-image"
              />
              <h3>{pokemon.name}</h3>
              <Link to={`/pokemon/${pokemon.id}`}>Ver Detalles</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
