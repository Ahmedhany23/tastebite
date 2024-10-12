import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useRecipeByName } from "../../services/api/useRecipeByName";
import FavoriteButton from "../../components/utility/FavoriteBtn";
import { FavoritesContext } from "../../context/FavoritesContext";
import Button from "../../components/utility/Button";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { name } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  const { favorites } = useContext(FavoritesContext);
  useEffect(() => {
    const storedQuery = window.localStorage.getItem("state");
    if (storedQuery) {
      setSearchQuery(storedQuery);
    }
  }, []);

  const { data, isLoading, error } = useRecipeByName(searchQuery, 0, 100, name);

  useEffect(() => {
    if (!isLoading) {
      const product = data?.hits?.filter((item) =>
        item.recipe.label.toLowerCase().includes(name.toLowerCase())
      );
      if (product && product.length > 0) {
        setRecipe(product[0].recipe);
      } else {
        const ProductFavorites = favorites.filter((item) =>
          item.label.toLowerCase().includes(name.toLowerCase())
        );
        setRecipe(ProductFavorites[0]);
      }
    }
  }, [data, isLoading, name, recipe, favorites]);

  if (error) return <div>{error.message}</div>;

  if (isLoading) {
    return (
      <main className="container mx-auto py-[100px] w-full">
        <div
          role="status"
          className=" animate-pulse flex flex-col sm:flex-row justify-center items-center gap-10 text-center "
        >
          <div className="flex items-center justify-center w-[300px] h-[250px] bg-gray-300 rounded sm:w-[300px]">
            <svg
              className="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="">
            <div className="h-2.5 bg-gray-200 rounded-full  max-w-[200px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full  w-20 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full  w-36 mb-2.5"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-[100px]">
      {recipe ? (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <img
            src={recipe.image}
            alt={recipe.label}
            className="w-[300px] h-[250px] rounded-md"
          />
          <div className="flex flex-col gap-6 px-5 sm:px-0 sm:items-start">
            <p className="text-3xl font-serif">{recipe.label}</p>
            <ul>
              {recipe?.ingredientLines?.map((item, idx) => (
                <li key={idx} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>

            <FavoriteButton item={recipe} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Button>
            <Link to="/">Go To Home Page</Link>
          </Button>
        </div>
      )}
    </main>
  );
};

export default ProductDetails;
