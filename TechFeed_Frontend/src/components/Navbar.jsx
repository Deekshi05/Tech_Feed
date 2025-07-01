import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-white hover:text-blue-500 transition duration-300"
        >
          Techefeed
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-base font-medium">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/feed"
            className="hover:text-blue-400 transition duration-300"
          >
            Feed
          </Link>
          <Link
            to="/channels"
            className="hover:text-blue-400 transition duration-300"
          >
            Channels
          </Link>

          {user ? (
            <>
              <Link
                to="/profile"
                className="hover:text-blue-400 transition duration-300"
              >
                {user.name}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-lg text-sm font-semibold transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-blue-400 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg text-sm font-semibold transition duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
