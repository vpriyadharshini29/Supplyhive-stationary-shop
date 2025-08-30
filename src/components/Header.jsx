import React from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="./images/logo.png" // Replace with your logo path
          alt="Supplyhive Logo"
          className="w-10 h-10 rounded-full border"
        />
        <h1 className="text-lg font-semibold">Supplyhive</h1>
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-6 text-black font-medium">
        <Link to="/" className="hover:text-blue-600 text-black no-underline">
          Home
        </Link>
        <Link to="/office" className="hover:text-blue-600 text-black no-underline">
          Shop
        </Link>
        <Link to="/about" className="hover:text-blue-600 text-black no-underline">
          About us
        </Link>
        <Link to="/contact" className="hover:text-blue-600 text-black no-underline">
          Contact
        </Link>
        <Link to="/login" className="hover:text-blue-600 text-black no-underline">
          Login/Register
        </Link>
      </div>

      {/* Search + Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Stationery"
            className="px-4 py-2 rounded-full bg-blue-500 text-white placeholder-white focus:outline-none w-56"
          />
          <FaSearch className="absolute right-4 top-3 text-white" />
        </div>

        <Link to="/cart">
          <FaShoppingCart className="text-black cursor-pointer hover:text-blue-600" />
        </Link>
        <Link to="/login">
          <FaUser className="text-black cursor-pointer hover:text-blue-600" />
        </Link>
      </div>
    </nav>
  );
}
