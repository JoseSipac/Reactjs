import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { id } = useParams(); // Extraemos el id desde la URL

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        setPokemon(response.data); // Guardamos los datos del Pokémon
        setLoading(false); // Fin de la carga
      })
      .catch(error => {
        console.log(error);
        setLoading(false); // Fin de la carga en caso de error
      });
  }, [id]); // Volver a cargar cuando cambia el id

  const addToFavorites = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = savedFavorites.some(fav => fav.id === pokemon.id);

    if (!isFavorite) {
      savedFavorites.push(pokemon);
      localStorage.setItem('favorites', JSON.stringify(savedFavorites));
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="pokemon-details">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h2>{pokemon.name}</h2>
      <div className="pokemon-stats">
        <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      </div>

      <h3>Tipo:</h3>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>

      <h3>Habilidades:</h3>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>

      <h3>Estaditicas:</h3>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>

      <button onClick={addToFavorites}>Añadir a Favoritos</button>
      <Link to="/">Regresar</Link>
    </div>
  );
};

export default PokemonDetails;
