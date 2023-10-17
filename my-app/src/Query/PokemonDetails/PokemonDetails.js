import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import styles from './PokemonDetails.module.scss';

function PokemonDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // Use the useNavigate hook to access the navigation function
  const [pokemonData, setPokemonData] = useState({
    name: '',
    abilities: [],
    height: '',
    stats: [],
  });

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    axios
      .get(url)
      .then((response) => {
        setPokemonData({
          name: response.data.name,
          abilities: response.data.abilities,
          height: response.data.height,
          stats: response.data.stats,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleDecrement = () => {
    const newId = parseInt(id, 10) - 1;
    if (newId >= 1) {
      navigate(`/pokemon/${newId}`);
    }
  };

  const handleIncrement = () => {
    const newId = parseInt(id, 10) + 1;
    // You can set a maximum ID value as needed
    if (newId <= 1017) {
      navigate(`/pokemon/${newId}`);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{pokemonData.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={pokemonData.name}
        className={styles.image}
      />
      <div className={styles.info}>
        <p>Height: {pokemonData.height} cm</p>
        <p>Abilities: {pokemonData.abilities.map((ability) => ability.ability.name).join(', ')}</p>
        {/* Render other Pokemon details here */}
      </div>
      <div className={styles.arrows}>
        <button onClick={handleDecrement}>&larr; Previous</button>
        <button onClick={handleIncrement}>Next &rarr;</button>
      </div>
    </div>
  );
}

export default PokemonDetails;
