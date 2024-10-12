import { useState, useEffect } from "react";
import ProductGrid from "../../components/Products/ProductGrid";
import SearchInput from "../../components/utility/SearchInput";
import { useRecipesByQuery } from "../../services/api/useRecipesByQuery";
import Button from "../../components/utility/Button";

export default function Searchpage({ searchQuery , setSearchQuery }) {
  
  const [loadingMore, setLoadingMore] = useState(20);
  const {  data : recipes , isFetching , error } = useRecipesByQuery(searchQuery, 0, loadingMore);

  useEffect(() => {
    if (searchQuery === "") {
      setLoadingMore(20); // Reset loading more to 20 if the search query is cleared
    }
  }, [searchQuery, recipes]);

  //Check if the data is empty when i recieve error or not
  const isDataEmpty = recipes?.hits?.length === 0 || !recipes?.hits;
  if(error){return <div>{error.message}</div>}
  return (
    <main className="container mx-auto py-24">
      <p className=" px-1 text-3xl md:text-6xl font-medium font-serif">
        Search Results
      </p>
      <div className=" px-1 w-full mt-8">
        <SearchInput
          count={isDataEmpty ? null : Number(recipes?.hits?.length)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className="mt-10">
        <ProductGrid data={recipes?.hits} isLoading={isFetching} />
      </div>
      <div className="flex justify-center items-center mt-10">
        {Number(recipes?.count) > loadingMore && loadingMore < 100 && (
          <Button onClick={() => setLoadingMore( prev => Math.min(prev + 10 , Number(recipes?.count)))}>
            Load More
          </Button>
        )}
      </div>
    </main>
  );
}
