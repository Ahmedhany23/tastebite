import { useQuery } from "react-query";
import { fetchRecipes } from "./fetchData";
import { QUERY_KEYS } from "./queryKeys";

export const useRecipesByQuery = (query , from , to) => {
  return useQuery({
    queryKey: [QUERY_KEYS.RECIPES, query , from ,  to],
    queryFn: () => fetchRecipes(query , from , to),
    enabled: query !== "",
  });
};