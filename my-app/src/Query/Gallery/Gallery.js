import axios from 'axios'
import React, { Component } from 'react';
import {Container  } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import 'normalize.css';
import GalleryDisplay from '../GalleryDisplay/GalleryDisplay.js'

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      entries: [],
      filter: '',
      pokemon: [],
    };

    this.filterUrl = 'https://pokeapi.co/api/v2/egg-group/';
    this.baseUrl = 'https://pokeapi.co/api/v2/pokedex/national';
  }

  componentDidMount() {
    axios
      .get(this.baseUrl)
      .then((response) => {
        const entries = response.data.pokemon_entries; // Access pokemon_entries from response
        this.setState({
          entries: entries,
          pokemon: [],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  clickHandler(name) {
    if (this.state.filter === name) {
      this.setState({ filter: '' }); // Deselect the filter if already selected
    } else {
      this.setState({ filter: name });
      // Set the filter state with the selected egg group
    this.setState({ filter: name });
  
    // Construct the URL with the selected egg group
    let url = `${this.filterUrl}${name}`;
  
    axios.get(url)
      .then((response) => {
        // Assuming the response structure contains an array of Pokémon species
        const pokemonSpecies = response.data.pokemon_species;
        this.setState({ pokemon: pokemonSpecies });
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
  render() {
    const { entries, filter, pokemon, selectedPokemon  } = this.state;
    return (
      <div>
          <div className="navbar" id="navbar">
          <div className="container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
                  className="image"
                />
              </div>
            </div>
              <div className="menu">
                   <Link to="/">Search</Link>
                <Link to="/gallery">Gallery</Link>
              </div>
        <div className="filter">
          <span className="selectegg">Choose an egg group:</span>
          {this.renderFilterButtons()}
        </div>
        <Container className="galleryContainer">
          <GalleryDisplay pokemon_entries={filter === '' ? entries : pokemon} />
        </Container>
      </div>
    );
  }

  renderFilterButtons() {
    const eggGroups = [
      { value: '1', label: 'Monster' },
      { value: '2', label: 'Water 1' },
      { value: '3', label: 'Bug' },
      { value: '4', label: 'Flying' },
      { value: '5', label: 'Field' },
      { value: '6', label: 'Fairy' },
      { value: '7', label: 'Grass' },
      { value: '8', label: 'Human-Like' },
      { value: '9', label: 'Water 3' },
      { value: '10', label: 'Mineral' },
      { value: '11', label: 'Amorphous' },
      { value: '12', label: 'Water 2' },
      { value: '14', label: 'Dragon' },
    ];

    return eggGroups.map((group) => (
      <a
        key={group.value}
        className={`filter-button ${group.value === this.state.filter ? 'active' : ''}`}
        onClick={() => this.clickHandler(group.value)}
      >
        {group.label}
      </a>
    ));
  }
}

export default Gallery