import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:text-gray-300">
            Malin Johansson
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline">
              Hem
            </Link>
            <Link to="/portfolio" className="hover:underline">
              Portfolio
            </Link>
            <Link to="/om-mig" className="hover:underline">
              Om Mig
            </Link>
            <Link to="/kontakta-mig" className="hover:underline">
              Kontakta Mig
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-2xl focus:outline-none hover:text-gray-300"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className="hidden md:hidden bg-gray-700 text-white flex flex-col space-y-2 p-4"
        >
          <Link to="/" className="hover:underline">
            Hem
          </Link>
          <Link to="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link to="/om-mig" className="hover:underline">
            Om Mig
          </Link>
          <Link to="/kontakta-mig" className="hover:underline">
            Kontakta Mig
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-grow p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Malin Johansson. Alla rättigheter
        förbehållna.
      </footer>
    </div>
  );
};

export default Layout;
