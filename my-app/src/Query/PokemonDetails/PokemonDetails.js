import React from 'react';

const PokemonDetails = ({ selectedPokemon }) => {
  if (!selectedPokemon) {
    return null; // Don't render anything if no Pokémon is selected
  }

  // Extract information from the selectedPokemon and render the details
  return (
    <div>
      <h2>{selectedPokemon.name}</h2>
      <p>Type: {selectedPokemon.type}</p>
      {/* Add more details like evolution information here */}
    </div>
  );
};

export default PokemonDetails;