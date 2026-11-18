
import type { RecipeCategory } from "../types/recipe";

interface RecipeFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;

  selectedCategory: RecipeCategory;
  onCategoryChange: (category: RecipeCategory) => void;

  showVegetarianOnly: boolean;
  onVegetarianToggle: (checked: boolean) => void;
}

const categories: RecipeCategory[] = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
];

const RecipeFilters = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  showVegetarianOnly,
  onVegetarianToggle,
}: RecipeFiltersProps) => {

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

        {/* Search input */}
        <div>
          <label
            htmlFor="recipe-search"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Search Recipes
          </label>

          <input
            id="recipe-search"
            type="search"
            value={searchTerm}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search by recipe name..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        {/* Category filter */}
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Filter by Category
          </label>

          <select
            id="category"
            value={selectedCategory}
            onChange={(event) =>
              onCategoryChange(
                event.target.value as RecipeCategory
              )
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "All"
                  ? "All Categories"
                  : category}
              </option>
            ))}
          </select>
        </div>

        {/* Vegetarian toggle */}
        <div className="flex items-end">
          <label className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg bg-green-50 p-4">

            <span className="text-sm font-semibold text-green-800">
              Vegetarian only 🥗
            </span>

            <input
              type="checkbox"
              checked={showVegetarianOnly}
              onChange={(event) =>
                onVegetarianToggle(event.target.checked)
              }
              className="h-5 w-5 accent-green-600"
            />

          </label>
        </div>

      </div>

    </div>
  );
};

export default RecipeFilters;
