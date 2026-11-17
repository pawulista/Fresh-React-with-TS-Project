
export interface Recipe {
  id: number;
  name: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  prepTime: number;
  calories: number;
  isVegetarian: boolean;
}

export interface User {
  email: string;
  password: string;
}

export type RecipeCategory =
  | "All"
  | "Breakfast"
  | "Lunch"
  | "Dinner"
  | "Snack";

export type NewRecipe = Omit<Recipe, "id">;