import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css"; // Import CSS for header styles

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-logo">
        <span className="logo-mark">GM</span>
        <span className="logo-name">Gurudev Market</span>
      </div>
      <nav>
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/about">About Us</Link>
        <Link className="nav-btn" to="/contact">Contact Us</Link>
        <Link className="nav-cta" to="#contact">Book Your Shop</Link>
      </nav>
    </header>
  );
}
