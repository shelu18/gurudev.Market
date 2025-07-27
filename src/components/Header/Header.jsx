
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import logo from '../../assets/logo/logo.jpg';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-logo">
        <img src={logo} alt="Gurudev Market Logo" className="logo-mark" />
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
