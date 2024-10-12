import { useQuery } from "react-query";
import { fetchRecipes } from "./fetchData";
import { QUERY_KEYS } from "./queryKeys";

export const useRecipeByName = (query, name, from = 0, to = 100 ) => {
  return useQuery({
    queryKey: [QUERY_KEYS.RECIPE, query, from, to],
    queryFn: () => fetchRecipes(query, name, from, to ),
    enabled: query !== "",
  });
};
