import { Component } from "react";

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

export class PokemonInfo extends Component {

    state ={
        pokemon: null,
        loading: false,
        error: null,
      };

    componentDidUpdate(prevProps, prevState) {

        const { pokemonName } = this.props;
        if(prevProps.pokemonName !== pokemonName) {

                this.setState({ loading: true, });
          
                fetch(URL_BASE + pokemonName)
                .then(response => {
                    if(response.ok) {
                       return response.json();
                    };
                    return Promise.reject(new Error(`Don't pokemon with name ${pokemonName}`));
                    })
                .then(pokemon => 
                  this.setState({ pokemon, })
                )
                .catch(error => this.setState({ error }))
                .finally(() => 
                this.setState({ loading: false, }))
          
        };
    };

    render() {
        const { pokemon, loading, error } = this.state;
        const { pokemonName } = this.props;

        return(
            <div>
                {error && <p>{error.message}</p>}
                {loading && <p>Loading....</p>}
                {!pokemonName && <p>Write the pokemon name</p> }
                {pokemon && 
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} width="300px"  />
                </div>
                 }
            </div>
        )
    };
};