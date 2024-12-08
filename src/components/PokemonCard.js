import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, index }) => {
  return (
    <div className="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
      <Link to={`/pokemon/${index + 1}`}>Ver Detalles</Link>
    </div>
  );
};

export default PokemonCard;
