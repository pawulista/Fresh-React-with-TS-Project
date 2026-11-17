
import { useState } from "react";

import Login from "./components/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="min-h-screen bg-slate-100 p-8">
          <h1 className="text-3xl font-bold text-green-700">
            Welcome to Recipe Planner!
          </h1>

          <p className="mt-2 text-slate-600">
            Your login was successful.
          </p>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="mt-6 rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default App;