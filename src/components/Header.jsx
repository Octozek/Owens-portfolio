import React from "react";
import Navigation from "./Navigation";
import "../index.css"; // Ensure the correct path

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          Ezekiel Owens
        </div>
        <div className="nav-container">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
