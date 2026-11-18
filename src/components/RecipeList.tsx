
import type { Recipe } from "../types/recipe";

import RecipeCard from "./RecipeCard";

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {

  // Check whether recipes are available
  if (recipes.length === 0) {
    return (
      <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">

        <div className="text-5xl">🔍</div>

        <h3 className="mt-4 text-lg font-bold text-slate-800">
          No recipes found
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Try changing your search or filter settings.
        </p>

      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))}

    </div>
  );
};

export default RecipeList;
