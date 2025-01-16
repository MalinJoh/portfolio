import React from "react";
import { Link } from "gatsby";


const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <h1>
            <Link to="/">Malin Johansson</Link>
          </h1>
          <ul className="nav-links">
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/om-mig">Om mig</Link>
            </li>
            <li>
              <Link to="/kontakta-mig">Kontakta mig</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Huvudinnehåll */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Min Portfolio. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
};

export default Layout;
