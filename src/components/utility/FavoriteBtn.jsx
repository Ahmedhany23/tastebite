import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import Button from "./Button";

const FavoriteButton = ({ item }) => {
  // Access the favorites context
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorited = favorites.some((fav) => fav.label === item.label);

  return (
    <Button onClick={() => toggleFavorite(item)}>
      {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
    </Button>
  );
};

export default FavoriteButton;
