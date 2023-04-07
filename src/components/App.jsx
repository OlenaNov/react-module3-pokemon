import { Component } from "react"
import PokemonForm from "./PokemonForm/PokemonForm";
import { ToastContainer } from 'react-toastify';
import { PokemonInfo } from "./PokemonInfo/PokemonInfo";


export class App extends Component {
  state ={
    pokemonName: '',
  };

  handleSubmit = pokemonName => {
    this.setState({
      pokemonName,
    })
  };


  render() {
    const { pokemonName } = this.state;
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>

        <PokemonForm onSubmit={this.handleSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer />
      </div>
    );
  }
};
