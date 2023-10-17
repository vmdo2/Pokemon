import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './SearchResults.scss';

class SearchResults extends Component {
  render() {
    const { matchedPokemonData } = this.props;

    if (!matchedPokemonData || matchedPokemonData.length === 0) {
      return (
        <div className="noResults">
          <h3>No matching Pokémon found!</h3>
        </div>
      );
    } else {
      return (
        <List divided verticalAlign='middle'>
          {matchedPokemonData.map((matchedPokemon, index) => {
            const { name } = matchedPokemon.pokemon_species;
            const id = matchedPokemon.entry_number;
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            const pokemon = `/pokemon/${id}`;

            return (
              <List.Item key={index}>
                <Link to={pokemon} className="listItem">
                  <Image src={imageUrl} avatar />
                  <span className="characterName">{name}</span>
                </Link>
              </List.Item>
            );
          })}
        </List>
      );
    }
  }
}

SearchResults.propTypes = {
  matchedPokemonData: PropTypes.arrayOf(
    PropTypes.shape({
      entry_number: PropTypes.number,
      pokemon_species: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      }),
    })
  ),
};

export default SearchResults;
