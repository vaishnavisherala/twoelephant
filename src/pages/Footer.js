import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Footer content blocks */}
          <div className="footer-column footer-brand">
            <img src="/assets/logo.png" alt="Two Elephants" className="footer-logo-img" />
            <h3 className="footer-logo">Two Elephants</h3>
            <p className="footer-desc">
              Advanced digital engineering solutions and IT services for enterprises worldwide.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/career">Careers</a></li>
              <li><a href="/contact">Contact US</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Our Services</h4>
            <ul className="footer-menu">
              <li><a href="/services">Digital Transformation</a></li>
              <li><a href="/services">AI Solutions</a></li>
              <li><a href="/services">Cybersecurity</a></li>
              <li><a href="/services">Product Engineering</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Contact Us</h4>
            <p className="footer-contact"><br />India: 155/4/3 Gandhi Nagar Akkalkot Road<br />
              Solapur – 413005</p>
            <p className="footer-contact"><br />info@twoelephants.org</p>
            <p className="footer-contact"><br />www.twoelephants.org</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Two Elephants. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
