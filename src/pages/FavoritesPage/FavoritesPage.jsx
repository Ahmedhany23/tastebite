import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import ProductCard from "../../components/Products/ProductCard";
import Button from "../../components/utility/Button";
import { useNavigate } from "react-router-dom";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  const navigate = useNavigate();
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
          <Button onClick={()=>navigate('/')}>Go To HomePage</Button>
        </div>
      )}
    </main>
  );
}
