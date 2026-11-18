
import Sidebar from "./Sidebar";
import Header from "./Header";
import StatCard from "./StatCard";

import useRecipes from "../hooks/useRecipes";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {

  // 1. Get recipe data from our custom hook
  const {
    recipes,
    isLoading,
    error,
  } = useRecipes();

  // 2. Calculate average preparation time
  const totalPrepTime = recipes.reduce(
    (total, recipe) => total + recipe.prepTime,
    0
  );

  const averagePrepTime =
    recipes.length > 0
      ? Math.round(totalPrepTime / recipes.length)
      : 0;

  // 3. Calculate total calories
  const totalCalories = recipes.reduce(
    (total, recipe) => total + recipe.calories,
    0
  );

  // 4. Count vegetarian recipes
  const vegetarianCount = recipes.reduce(
    (count, recipe) =>
      recipe.isVegetarian ? count + 1 : count,
    0
  );

  // 5. Handle loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <p className="text-lg font-semibold text-green-700">
          Loading recipes...
        </p>
      </div>
    );
  }

  // 6. Handle error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-300">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100">

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

          {/* Recipe section placeholder */}
          <section
            id="recipes"
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Your Recipes
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  You currently have {recipes.length} recipes.
                </p>
              </div>

              <span className="w-fit rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                {recipes.length} Recipes
              </span>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-8 text-center">
              <p className="text-4xl">🍲</p>

              <p className="mt-3 font-semibold text-slate-700">
                Recipe list coming next!
              </p>

              <p className="mt-1 text-sm text-slate-500">
                We'll add recipe cards, searching, and filtering soon.
              </p>
            </div>

          </section>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;
