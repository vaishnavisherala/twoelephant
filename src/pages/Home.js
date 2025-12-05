import React from "react";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
  <div className="hero-inner">

    <h1 className="hero-title">TWO ELEPHANTS</h1>

    <p className="hero-subtitle">STRENGTH • CARE • HONESTY</p>

    <p className="hero-description">
      Building strong foundations for your business with integrity,
      reliability, and an unwavering commitment to excellence.
    </p>

    <button
      onClick={() => scrollToSection("contact")}
      className="btn hero-btn"
    >
      Get Started <ChevronRight className="icon" />
    </button>

  </div>
</section>


      {/* CORE VALUES */}
      <section className="values-section">
        <h2 className="values-title">Our Core Values</h2>

        <div className="values-container">

          {[
            {
              // icon: "💪",
              title: "STRENGTH",
              description:
                "We deliver robust solutions and unwavering support. Like elephants, we carry the heaviest loads with confidence and capability.",
            },
            {
              // icon: "❤️",
              title: "CARE",
              description:
                "Every client matters. We nurture relationships with empathy, attention, and a dedication to your long-term success.",
            },
            {
              // icon: "🤝",
              title: "HONESTY",
              description:
                "Integrity guides everything we do. We believe in transparency, clear communication, and ethical practices.",
            },
          ].map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}

        </div>
      </section>

          <section id="contact" className="contact-section">
        <h2 style={{color:'white'}}>Ready to Work Together?</h2>
        <p style={{color:'white'}}>
          Let’s build something strong together. Contact us today to discover
          how we can elevate your business.
        </p>
        <button className="btn contact-btn">Contact Us Today</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Two Elephants. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">LinkedIn</a>
        </div>

        <p className="footer-tag">One Promise: Strength • Care • Honesty</p>
      </footer>
    </div>
  );
}
