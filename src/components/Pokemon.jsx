import React from "react";
import FavouriteContext from "../contexts/favouriteContext";
import { useContext } from "react";

const Pokemon = (props) => {
  const { pokemon } = props;

  const blackHearth = "🖤";
  const redhearth = "❤️";

  const { favouritePokemons, updateFavouritePokemons } =
    useContext(FavouriteContext);
  const hearth = favouritePokemons.includes(pokemon.name)
    ? redhearth
    : blackHearth;

  const clickHearth = (e) => {
    e.preventDefault();
    updateFavouritePokemons(pokemon.name);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          className="pokemon-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div># {pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div className="pokemon-type-text" key={idx}>
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickHearth}>
            <div className="pokemon-favourite">{hearth}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
