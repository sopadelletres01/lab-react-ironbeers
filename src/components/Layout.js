import React from "react";
import { NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <NavLink to="/">🏠</NavLink>
      </header>
      {children}
    </div>
  );
}

export default Layout;
