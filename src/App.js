import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import { Menu, X } from "lucide-react";


export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <nav className="nav responsive-nav">
        <div className="brand">
          <img src="/assets/logo.png" alt="Two Elephants" className="logo" />
          <span className="brand-text">TWO ELEPHANTS</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links desktop-menu">
          <Link to="/"></Link>
          <Link to="/career">Career</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about-us">About Us</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={() => setMenuOpen(false)}></Link>
            <Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          </div>
        )}
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/about-us' element={<AboutUs/>}/>
          
        </Routes>
      </main>

     
    </div>
  );
}
