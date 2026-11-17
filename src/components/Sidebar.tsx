
const Sidebar = () => {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 bg-white p-6 shadow-sm md:block">

      {/* Logo */}
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-2xl">
          🥗
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-800">
            Recipe Planner
          </h1>
          <p className="text-xs text-slate-400">
            Plan. Cook. Enjoy.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        <a
          href="#dashboard"
          className="flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 font-semibold text-green-700"
        >
          <span>📊</span>
          Dashboard
        </a>

        <a
          href="#recipes"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100"
        >
          <span>🍲</span>
          My Recipes
        </a>

        <a
          href="#meal-plans"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100"
        >
          <span>📅</span>
          Meal Planning
        </a>

      </nav>

      {/* Bottom information */}
      <div className="mt-12 rounded-xl bg-green-50 p-4">
        <p className="font-semibold text-green-800">
          Eat Healthy!
        </p>
        <p className="mt-1 text-xs text-green-700">
          Organize your meals and enjoy healthier living.
        </p>
      </div>

    </aside>
  );
};

export default Sidebar;
