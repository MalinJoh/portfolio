import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5] text-[#333333]">
      {/* Header */}
      <header className="bg-[#ffcccb] text-[#333333] shadow-md">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:text-[#f5f5f5]">
            Malin Johansson
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-[#ffcccb]">
              Hem
            </Link>
            <Link to="/portfolio" className="hover:text-[#ffcccb]">
              Portfolio
            </Link>
            <Link to="/om-mig" className="hover:text-[#ffcccb]">
              Om Mig
            </Link>
            <Link to="/kontakta-mig" className="hover:text-[#ffcccb]">
              Kontakta Mig
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-2xl focus:outline-none hover:text-[#ffcccb]"
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
          className="hidden md:hidden bg-[#ffe4c4] text-[#333333] flex flex-col space-y-2 p-4"
        >
          <Link to="/" className="hover:text-[#ffcccb]">
            Hem
          </Link>
          <Link to="/portfolio" className="hover:text-[#ffcccb]">
            Portfolio
          </Link>
          <Link to="/om-mig" className="hover:text-[#ffcccb]">
            Om Mig
          </Link>
          <Link to="/kontakta-mig" className="hover:text-[#ffcccb]">
            Kontakta Mig
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-grow p-4 md:p-8">{children}</main>

      {/* Footer */}
      <footer className="bg-[#ffcccb] text-[#333333] text-center py-4 shadow-inner">
        &copy; {new Date().getFullYear()} Malin Johansson. Alla rättigheter
        förbehållna.
      </footer>
    </div>
  );
};

export default Layout;
