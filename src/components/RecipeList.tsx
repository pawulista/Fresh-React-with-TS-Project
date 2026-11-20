
import type { Recipe } from "../types/recipe";
import RecipeCard from "./RecipeCard";

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  // Check whether recipes exist
  if (recipes.length === 0) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white p-8 text-center">

        <span className="text-5xl">🍽️</span>

        <h3 className="mt-4 text-lg font-bold text-slate-800">
          No Recipes Found
        </h3>

        <p className="mt-2 max-w-sm text-sm text-slate-500">
          We couldn't find any recipes matching your search.
          Try changing your search or filters.
        </p>

      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

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
