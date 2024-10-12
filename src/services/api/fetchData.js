import api from "./api";

export const fetchRecipes = async (query, from, to) => {
  try {
    const { data } = await api(`/search?q=${query}&from=${from}&to=${to}`);
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const fetchRecipeByName = async (query, name, from, to) => {
  try {
    const { data } = await api(`/search?q=${query}&from=${from}&to=${to}`);
    


  
   
    
    return data; // Return the recipe object or null if not found
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return null; // Return null in case of error
  }
};