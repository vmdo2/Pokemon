import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class GalleryDisplay extends Component {
  render() {
    const { pokemon_entries } = this.props;

    if (!pokemon_entries || pokemon_entries.length === 0) {
      return (
        <Card className="noCharacter">
          <h3>No Pokémon found!</h3>
        </Card>
      );
    }

    return (
      <Grid>
        {pokemon_entries.map((entry, idx) => (
          <Grid.Column key={idx}>
            <Link to={`/pokemon/${entry.pokemon_species ? entry.pokemon_species.name : entry.name}`}>
              <div>
                <Card className="pokemonCard">
                  <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry.entry_number || entry.url.split('/').slice(-2)[0]}.png`} alt={entry.pokemon_species ? entry.pokemon_species.name : entry.name} />
                </Card>
              </div>
            </Link>
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

GalleryDisplay.propTypes = {
  pokemon_entries: PropTypes.array,
};

export default GalleryDisplay;
