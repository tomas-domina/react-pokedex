import React from "react";
import FavouriteContext from "../contexts/favouriteContext";

const { useContext } = React;

const NavBar = () => {
  const { favouritePokemons } = useContext(FavouriteContext);
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="..." className="navbar-image" />
      </div>
      <div>❤️ {favouritePokemons.length}</div>
    </nav>
  );
};

export default NavBar;
