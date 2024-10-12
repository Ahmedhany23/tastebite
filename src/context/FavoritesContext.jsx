import { createContext, useState, useEffect } from 'react';

// Create the Favorites Context
export const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
 //save data in local storage check if there is a data or not
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  //  add/remove  item from favorites
  const toggleFavorite = (item) => {
    const isFavorited = favorites.some((fav) => fav.label === item.label);

    let updatedFavorites;

    if (isFavorited) {
      // Remove from favorites
      updatedFavorites = favorites.filter((fav) => fav.label !== item.label);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, item];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        favoritesCount: favorites.length,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
