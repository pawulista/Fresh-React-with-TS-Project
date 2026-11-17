
interface HeaderProps {
  onLogout: () => void;
}

const Header = ({ onLogout }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">

      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Here's your recipe summary.
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">

        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-slate-700">
            Recipe Admin
          </p>
          <p className="text-xs text-slate-400">
            Administrator
          </p>
        </div>

        <button
          onClick={onLogout}
          className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
        >
          Logout
        </button>

      </div>

    </header>
  );
};

export default Header;
