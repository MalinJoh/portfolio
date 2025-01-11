import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Min Portfölj</h1>
      </header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Min Portfölj</footer>
    </div>
  );
};

export default Layout;
