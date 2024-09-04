import React, { useState, useEffect } from 'react';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await res.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, []);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

export default Pokemon;
