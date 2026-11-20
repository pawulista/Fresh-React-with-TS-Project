interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => (
  <main className="min-h-screen bg-slate-100 px-4 py-10">
    <section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-emerald-600">Recipe Planner</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">Your meal dashboard</h1>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          Sign out
        </button>
      </div>
      <p className="mt-8 rounded-2xl bg-emerald-50 p-6 text-slate-700">
        Welcome back! Your recipes and daily meal plan will appear here.
      </p>
    </section>
  </main>
);

export default Dashboard;