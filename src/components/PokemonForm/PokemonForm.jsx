import { Component } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { toast } from 'react-toastify';

export default class PokemonForm extends Component {
    state = {
        pokemonName: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        
        if(!this.state.pokemonName.trim()) {
            toast.error('You need to enter the name of the pokemon!')
            return;
        }
        this.props.onSubmit(this.state.pokemonName);
        this.setState({
            pokemonName: '',
        })
    };

    handleNameChange = e => 
    this.setState({
        pokemonName: e.currentTarget.value,
    });

    render() {
        const { pokemonName } = this.state;
        const normalizedpokemonName = pokemonName.toLowerCase().trim();

        return (
            <form onSubmit={this.handleSubmit} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <label>Enter pokemon name:
                    <input 
                    type="text"
                    name="pokemonName" 
                    value={normalizedpokemonName} 
                    onChange={this.handleNameChange}
                    style={{ padding: 8 }} />
                </label>
                <button type="submit" style={{ border: "none", backgroundColor: "#fff" }}>
                    <HiMagnifyingGlass style={{ width: 28, height: 28 }} aria-label="Search" />
                </button>
            </form>
        );
    };
};
