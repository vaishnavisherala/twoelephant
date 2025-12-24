import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Careers from './pages/Careers';
import { Menu, X } from "lucide-react";
import Industries from './pages/Industries';
import Team from './pages/Team';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import logo from "../src/images/image1.png"


export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <nav className="nav responsive-nav">
        <div className="brand">
          <img src={logo} alt="Two Elephants" className="logo" />
          <span className="brand-text">TWO ELEPHANTS</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links desktop-menu">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/team">Team</Link>

           <div className="dropdown">
    <button className="dropdown-btn">
      Services ▾
    </button>

    <div className="dropdown-menu">
      <Link to="/services">Our Services</Link>
      <Link to="/industries">Industries We Serve</Link>
          </div>
  </div>
          <Link to="/case-studies">Case Studies</Link>

          <Link to="/careers">Career</Link>
          {/* <Link to="/login">Login</Link> */}
          {/* <Link to="/register">Register</Link> */}
          <Link className="nav-contact-btn" to="/contact">Contact Us</Link>

        </div>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
{menuOpen && (
  <div className="mobile-menu">

    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

    <Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link>

    <details className="mobile-dropdown">
      <summary>Services</summary>
      <div className="mobile-dropdown-list">
        <Link to="/services" onClick={() => setMenuOpen(false)}>
          Our Services
        </Link>
        <Link to="/industries" onClick={() => setMenuOpen(false)}>
          Industries We Serve
        </Link>
      </div>
    </details>

    <Link to="/case-studies" onClick={() => setMenuOpen(false)}>
      Case Studies
    </Link>

    <Link to="/careers" onClick={() => setMenuOpen(false)}>
      Career
    </Link>

    <Link to="/about-us" onClick={() => setMenuOpen(false)}>
      About Us
    </Link>

    <Link
      className="nav-contact-btn"
      to="/contact"
      onClick={() => setMenuOpen(false)}
    >
      Contact Us
    </Link>

  </div>
)}

      </nav>

      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/careers' element={<Careers/>}/>
          <Route path='/industries' element={<Industries/>}/>
          <Route path="/team" element={<Team />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

     
    </div>
  );
}
