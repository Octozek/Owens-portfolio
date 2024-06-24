import React from "react";
import Navigation from "./Navigation";
import "../index.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">Ezekiel Owens</div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
