import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between">
    <Link to="/" className="text-xl font-bold">
      Real Estate
    </Link>
    <Link to="/favorites" className="text-blue-500">
      Favorites ♥
    </Link>
  </nav>
);

export default Navbar;
