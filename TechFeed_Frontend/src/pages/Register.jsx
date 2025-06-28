import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient.js";
import { HiUser, HiMail, HiLockClosed } from "react-icons/hi";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axiosClient.post("/auth/register", form);
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <HiUser className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div className="relative">
          <HiMail className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div className="relative">
          <HiLockClosed className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
