import React from "react";

const FavouriteContext = React.createContext({
  favouritePokemons: [],
  updateFavouritePokemons: (id) => null,
});

export const FavouriteProvider = FavouriteContext.Provider;

export default FavouriteContext;
