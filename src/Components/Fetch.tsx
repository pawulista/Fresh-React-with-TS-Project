import { RecipeItem } from "./RecipeItem";
import type { recipeItemProps } from "./RecipeItem";


export const Fetch = async(): Promise<recipeItemProps[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(RecipeItem);
        }, 800);
    });
};