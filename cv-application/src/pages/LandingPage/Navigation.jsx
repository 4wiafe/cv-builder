import { useState } from "react";
import "../../styles/Nav.css";

export default function Navigation({ menuButton, themeButton, menuOpen, onLinkClick }) {
  return (
    <nav>
      <div className="logo">
        <a href="/">QuickCV.</a>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`
        }>
        <li className="link-list">
          <a href="#how-it-works" className="link" onClick={onLinkClick}>How It Works</a>
        </li>
        <li className="link-list">
          <a href="#faq" className="link" onClick={onLinkClick}>FAQ</a>
        </li> 
      </ul>

      <div className="nav-btns">
        <div className="signin-container">
          <a href="#signin" className="signin">Sign in</a>
        </div>
        <div className="menu-theme">
          {menuButton}
          {themeButton}
        </div>
      </div>
    </nav>
  );
}
