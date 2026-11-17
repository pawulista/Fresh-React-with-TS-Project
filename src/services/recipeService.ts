
import { initialRecipes } from "../data/recipes";
import type { Recipe } from "../types/recipe";

// Simulate fetching recipes from a backend API
export const fetchRecipes = async (): Promise<Recipe[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialRecipes);
    }, 1000);
  });
};
