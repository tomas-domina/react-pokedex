import React from "react";
import { useState } from "react";
import { searchPokemon } from "../../api";

const Searchbar = (props) => {
  const { onSearch } = props;

  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (event) => {
    onSearch(search);
  };

  return (
    <div className="searchBar-container">
      <div className="searchbar">
        <input type="text" placeholder="Buscar Pokémon" onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
