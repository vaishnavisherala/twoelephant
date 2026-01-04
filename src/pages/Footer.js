import React from 'react'
import logo from "../images/logo.png"
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigation= useNavigate();
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Footer content blocks */}
          <div className="footer-column footer-brand">
            <img src={logo} alt="Two Elephants" className="footer-logo-img" />
            <h3 className="footer-logo">Two Elephants<br/>Technologies LLP</h3>
            <p className="footer-desc">
              Advanced digital engineering solutions and IT services for enterprises worldwide.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact US</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Our Services</h4>
            <ul className="footer-menu">
              <li><Link to="/services"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Digital Transformation</Link></li>
              <li><Link to="/case-studies">AI Solutions</Link></li>
              <li><Link to="/services"
      onClick={() => window.scrollTo({ top: 3, behavior: "smooth" })}>Cybersecurity</Link></li>
             
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Contact Us</h4>
            <p className="footer-contact"><br />India: 30/70, Vivekanand House, Padma Nagar, Akkalkot Road, Solapur - 413005<br />
            <br/> USA: 2903 Rutherford Place Ct, Katy<br />
              Houston, TX – 77494</p><br/>
             
<a href="mailto:info@twoelephants.org" className="footer-contact" style={{ textDecoration: "none" }}>
  <br />
  info@twoelephants.org
</a>
<br/>
            <a href="https://www.twoelephants.org" className="footer-contact" style={{ textDecoration: "none" }}>
              <br />
              www.twoelephants.org
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{fontSize:"16px"}}>© 2026 Two Elephants. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
