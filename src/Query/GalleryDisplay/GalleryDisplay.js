import React, { Component } from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './GalleryDisplay.scss';

class GalleryDisplay extends Component {
  // Function to extract the last number from a URL
  extractLastNumberFromUrl = (url) => {
    const match = url.match(/(\d+)\/$/);
    if (match) {
      return match[1];
    }
    return null;
  };

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
        {pokemon_entries.map((entry, idx) => {
          const entryNumber = entry.entry_number || this.extractLastNumberFromUrl(entry.url);

          return (
            <Grid.Column key={idx}>
              <Link to={`/pokemon/${entryNumber}`}>
                <div>
                  <Card className="pokemonCard">
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entryNumber}.png`}
                      alt={entry.pokemon_species ? entry.pokemon_species.name : entry.name}
                    />
                  </Card>
                </div>
              </Link>
            </Grid.Column>
          );
        })}
      </Grid>
    );
  }
}

GalleryDisplay.propTypes = {
  pokemon_entries: PropTypes.array,
};

export default GalleryDisplay;
