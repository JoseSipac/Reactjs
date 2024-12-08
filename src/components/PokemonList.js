import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPokemons = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokemon-list">
      <input
        type="text"
        placeholder="Buscar Pokémon"
        onChange={handleSearch}
        value={searchTerm}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pokemon-grid">
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
