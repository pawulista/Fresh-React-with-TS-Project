
import { useState } from "react";

import type { RecipeCategory } from "../types/recipe";
import type { NewRecipe } from "../types/recipe";

import Sidebar from "./Sidebar";
import Header from "./Header";
import StatCard from "./StatCard";
import RecipeFilters from "./RecipeFilters";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";


import useRecipes from "../hooks/useRecipes";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {

  // 1. Get recipes from our custom hook
  const {
    recipes,
    isLoading,
    error,
    addRecipe,
  } = useRecipes();

  // 2. Manage search state
  const [searchTerm, setSearchTerm] = useState<string>("");

  // 3. Manage category state
  const [selectedCategory, setSelectedCategory] =
    useState<RecipeCategory>("All");

  // 4. Manage vegetarian state
  const [showVegetarianOnly, setShowVegetarianOnly] =
    useState<boolean>(false);

  // Create form visibility state
  const [isAddFormOpen, setIsAddFormOpen] =
  useState<boolean>(false);

  // 5. Calculate average preparation time
  const totalPrepTime = recipes.reduce(
    (total, recipe) => total + recipe.prepTime,
    0
  );

  const averagePrepTime =
    recipes.length > 0
      ? Math.round(totalPrepTime / recipes.length)
      : 0;

  // 6. Calculate total calories
  const totalCalories = recipes.reduce(
    (total, recipe) => total + recipe.calories,
    0
  );

  // 7. Calculate vegetarian count
  const vegetarianCount = recipes.reduce(
    (count, recipe) =>
      recipe.isVegetarian ? count + 1 : count,
    0
  );

  // 8. Filter recipes by category
  const categoryFilteredRecipes = recipes.filter((recipe) => {
    return (
      selectedCategory === "All" ||
      recipe.category === selectedCategory
    );
  });

  // 9. Filter vegetarian recipes separately
  const vegetarianFilteredRecipes = categoryFilteredRecipes.filter(
    (recipe) => {
      return !showVegetarianOnly || recipe.isVegetarian;
    }
  );

  // 10. Search recipes by name
  const filteredRecipes = vegetarianFilteredRecipes.filter(
    (recipe) => {
      return recipe.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
    }
  );

  const handleAddRecipe = (newRecipe: NewRecipe) => {
  addRecipe(newRecipe);

  setIsAddFormOpen(false);
};

  // 11. Loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="font-semibold text-green-700">
          Loading recipes...
        </p>
      </div>
    );
  }

  // 12. Error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-200 md:flex-row">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="min-w-0 flex-1">

        {/* Header */}
        <Header onLogout={onLogout} />

        <div className="space-y-8 p-5 md:p-8">

          {/* Welcome section */}
          <section>
            <h1 className="text-2xl font-bold text-slate-800">
              Your Recipe Dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track your recipes and plan healthier meals.
            </p>
          </section>

          {/* Statistics */}
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

            <StatCard
              title="Average Prep Time"
              value={`${averagePrepTime} min`}
              description="Average time across all recipes"
              icon="⏱️"
            />

            <StatCard
              title="Total Calories"
              value={totalCalories.toLocaleString()}
              description="Combined calories across all recipes"
              icon="🔥"
            />

            <StatCard
              title="Vegetarian Recipes"
              value={vegetarianCount}
              description={`Out of ${recipes.length} total recipes`}
              icon="🥗"
            />

          </section>

          {/* Recipe section */}
          <section id="recipes" className="space-y-6">

            {/* Section heading and add button */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Your Recipes
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Explore and manage your meals.
                </p>
              </div>

              <button
                onClick={() => setIsAddFormOpen((previous) => !previous)}
                className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                {isAddFormOpen ? "Close Form" : "+ Add New Recipe"}
              </button>

            </div>

            {/* Add recipe form */}
            {isAddFormOpen && (
              <AddRecipeForm
                onAddRecipe={handleAddRecipe}
                onCancel={() => setIsAddFormOpen(false)}
              />
            )}

            {/* Search and filters */}
            <RecipeFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}

              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}

              showVegetarianOnly={showVegetarianOnly}
              onVegetarianToggle={setShowVegetarianOnly}
            />

            {/* Results count */}
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-700">
                Available Recipes
              </h3>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {filteredRecipes.length} Results
              </span>
            </div>

            {/* Recipe cards */}
            <RecipeList recipes={filteredRecipes} />

          </section>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
