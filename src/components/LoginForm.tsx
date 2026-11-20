
import { useState } from "react";
// import type { FormEvent } from "react";

const mockUsers: { email: string; password: string }[] = [
  { email: "paul@example.com", password: "password123" },
];

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login = ({ onLoginSuccess }: LoginProps) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  
  const [error, setError] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    const user = mockUsers.find(
      (user) =>
        user.email === email.trim() &&
        user.password === password
    );

    if (user) {
      setError("");
      onLoginSuccess();
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
      <section
        className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] sm:p-10"
        aria-labelledby="login-title"
      >
        <div className="mb-7 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl shadow-sm">
            🥗
          </div>
          <h1 id="login-title" className="text-3xl font-bold tracking-tight text-slate-900">
            Recipe Planner
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Sign in to manage your daily meals
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              aria-invalid={Boolean(error)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              aria-invalid={Boolean(error)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
          {error && (
            <p
              role="alert"
              className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:translate-y-px focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-400">
          Recipe Planner Dashboard
        </p>
      </section>
    </main>
  );
};

export default Login;