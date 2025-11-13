import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className=" flex items-center gap-3">
          <img src="/logo.svg" alt="AutoCar" className="h-20" />
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cars"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "text-gray-700"
            }
          >
            Cars
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "text-gray-700"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "text-gray-700"
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden md:inline px-4 py-2 border rounded text-sm"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-primary text-white rounded text-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
