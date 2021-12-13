import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((value) => (
          <div className="pokedex">
            <Pokemon name = {value.name} type = {value.type} peso = {`${(value.averageWeight).value} ${(value.averageWeight).measurementUnit}`} image = {value.image} alt="" />
          </div>
        )
      )
    );
  }
}
export default Pokedex;