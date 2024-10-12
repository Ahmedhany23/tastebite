import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import ProductCard from "../../components/Products/ProductCard";
import Button from "../../components/utility/Button";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <main className="container mx-auto py-[120px]">
      {favorites.length > 0 ? (
        <div className="flex flex-wrap gap-10 justify-center">
          {favorites.map((item, idx) => (
            <div key={idx}>
              <ProductCard imgLink={item.image} name={item.label} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-10 justify-center items-center">
          <p className="text-center text-3xl"> No Favorites Recipes</p>
          <Button><Link to='/'>Go To HomePage</Link></Button>
        </div>
      )}
    </main>
  );
}
