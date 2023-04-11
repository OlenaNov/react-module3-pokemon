import PockemonErrorView from "components/PockemonErroreView/PockemonErrorView";
import PokemonDataView from "components/PokemonDataView/PokemonDataView";
import { Component } from "react";
import PokemonPendingView from "../PokemonPendingView/PokemonPendingView";

const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

export class PokemonInfo extends Component {

    state ={
        pokemon: null,
        error: null,
        status: 'idle',
      };

    componentDidUpdate(prevProps, prevState) {

        const { pokemonName } = this.props;
        if(prevProps.pokemonName !== pokemonName) {

                this.setState({ status: 'pending' });
          
                fetch(URL_BASE + pokemonName)
                .then(response => {
                    if(response.ok) {
                       return response.json();
                    };
                    return Promise.reject(new Error(`Don't pokemon with name ${pokemonName}`));
                    })
                .then(pokemon => 
                  this.setState({ pokemon, status: 'resolved' })
                )
                .catch(error => this.setState({ error, status: 'rejected' }))
          
        };
    };

    render() {
        const { pokemon, error, status } = this.state;

            if(status === 'idle') {
                return <p>Write the pokemon name</p>;
            };

            if(status === 'pending') {
                return <PokemonPendingView />
            };

            if(status === 'rejected') {
                return <PockemonErrorView message={error.message} /> ;
            };

            if(status === 'resolved') {
                return <PokemonDataView pokemon={pokemon} /> 
            };
    };
};