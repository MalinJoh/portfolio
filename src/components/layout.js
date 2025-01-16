import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf0e6] text-[#333333]">
      {/* Header */}
      <header className="bg-[#ffcccb] text-[#333333] shadow-lg">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold hover:text-[#f7a8a0] tracking-wider">
            Malin Johansson
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-lg">
            <Link to="/" className="hover:text-[#f7a8a0] transition duration-300">
              Hem
            </Link>
            <Link to="/portfolio" className="hover:text-[#f7a8a0] transition duration-300">
              Portfolio
            </Link>
            <Link to="/om-mig" className="hover:text-[#f7a8a0] transition duration-300">
              Om Mig
            </Link>
            <Link to="/kontakta-mig" className="hover:text-[#f7a8a0] transition duration-300">
              Kontakta Mig
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-3xl focus:outline-none hover:text-[#f7a8a0]"
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
          className="hidden md:hidden bg-[#fdf0e6] text-[#333333] flex flex-col space-y-4 p-4"
        >
          <Link to="/" className="hover:text-[#f7a8a0] transition duration-300">
            Hem
          </Link>
          <Link to="/portfolio" className="hover:text-[#f7a8a0] transition duration-300">
            Portfolio
          </Link>
          <Link to="/om-mig" className="hover:text-[#f7a8a0] transition duration-300">
            Om Mig
          </Link>
          <Link to="/kontakta-mig" className="hover:text-[#f7a8a0] transition duration-300">
            Kontakta Mig
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-grow p-6 md:p-12 bg-[#ffffff] shadow-lg rounded-lg my-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#ffcccb] text-[#333333] text-center py-6 shadow-inner">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Malin Johansson. Alla rättigheter förbehållna.
        </p>

      </footer>
    </div>
  );
};

export default Layout;
