import React from "react";

export default function Header() {
  return (
    <div className="flex" id="header-container">
      <div id="header-logo">DF</div>
      <div id="header-nav">
        <nav id="nav">
          <a className="nav-links" href="#About">
            About
          </a>
          <a className="nav-links" href="#Skills">
            Skills
          </a>
          <a className="nav-links" href="#Projects">
            Projects
          </a>
          <a className="nav-links" href="#Contact">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
