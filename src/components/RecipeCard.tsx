
import type { Recipe } from "../types/recipe";

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

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Recipe header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
          🍲
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[recipe.category]}`}
        >
          {recipe.category}
        </span>
      </div>

      {/* Recipe name */}
      <h3 className="text-lg font-bold text-slate-800">
        {recipe.name}
      </h3>

      {/* Recipe details */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">

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

    </article>
  );
};

export default RecipeCard;
