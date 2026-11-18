
import type { Recipe } from "../types/recipe";
import { recipeImages } from "../data/recipeImages";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const categoryColors: Record<Recipe["category"], string> = {
    Breakfast: "bg-amber-100 text-amber-700",
    Lunch: "bg-blue-100 text-blue-700",
    Dinner: "bg-purple-100 text-purple-700",
    Snack: "bg-pink-100 text-pink-700",
  };

  const imageUrl = recipeImages[recipe.id] || recipeImages[1];

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Recipe Image */}
      <div className="relative h-48 overflow-hidden bg-green-50">

        <img
          src={imageUrl}
          alt={recipe.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category badge */}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${categoryColors[recipe.category]}`}
        >
          {recipe.category}
        </span>

      </div>

      {/* Recipe information */}
      <div className="p-5">

        {/* Recipe name */}
        <h3 className="text-lg font-bold text-slate-800">
          {recipe.name}
        </h3>

        {/* Recipe details */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">

          <span className="flex items-center gap-1">
            ⏱️ {recipe.prepTime} min
          </span>

          <span className="flex items-center gap-1">
            🔥 {recipe.calories} kcal
          </span>

        </div>

        {/* Vegetarian status */}
        <div className="mt-5 border-t border-slate-100 pt-4">

          {recipe.isVegetarian ? (
            <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
              🥗 Vegetarian
            </span>
          ) : (
            <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">
              🍗 Non-vegetarian
            </span>
          )}

        </div>

      </div>

    </article>
  );
};

export default RecipeCard;
