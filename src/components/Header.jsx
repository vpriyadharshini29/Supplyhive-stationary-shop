import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="./images/logo.png"
          alt="Supplyhive Logo"
          className="w-10 h-10 rounded-full border"
        />
        <h1 className="text-lg font-semibold">Supplyhive</h1>
      </div>

      {/* Desktop Links */}
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
      
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? (
            <FaTimes className="text-black text-2xl" />
          ) : (
            <FaBars className="text-black text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <button
            onClick={toggleMobileMenu}
            className="self-end text-black text-2xl"
            aria-label="Close mobile menu"
          >
            <FaTimes />
          </button>
          <Link
            to="/"
            className="text-black no-underline text-lg hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/office"
            className="text-black no-underline text-lg hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-black no-underline text-lg hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="text-black no-underline text-lg hover:text-blue-600"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          
        </div>
      </div>

      {/* Search + Icons (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
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

      {/* Search + Icons (Mobile) */}
      <div className="flex md:hidden items-center space-x-4">
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