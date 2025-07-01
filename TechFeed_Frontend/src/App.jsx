import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Channels from "./pages/Channels";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* Navbar at the top */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/channels" element={<Channels />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>

      {/* Optional Footer */}
      <footer className="bg-gray-900 text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Techefeed. All rights reserved.
      </footer>
    </div>
  );
}
