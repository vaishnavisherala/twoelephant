import React from "react";
import Footer from "./Footer";

import eduImg from "../images/edu.jpeg";
import helImg from "../images/hel.jpeg";
import eImg from "../images/e.jpeg";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Education Management System",
      domain: "Education",
      description:
        "A scalable education ERP platform that digitized attendance, fees, communication, and academic workflows.",
      techStack: ["React", "Node.js", "MongoDB", "AWS"],
      image: eduImg,
    },
    {
      title: "Healthcare Patient Portal",
      domain: "Healthcare",
      description:
        "A secure patient portal enabling appointments, medical records access, and automated reminders.",
      techStack: ["Angular", "Express.js", "MySQL", "Azure"],
      image: helImg,
    },
    {
      title: "Retail E-Commerce Platform",
      domain: "E-Commerce",
      description:
        "A high-performance online retail platform with real-time inventory, payments, and admin dashboard.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: eImg,
    },
  ];

  return (
    <div className="case-page">
      {/* HERO (UNCHANGED) */}
      <section
        className="team-hero-banner"
        style={{
          backgroundImage: `url(${require("../images/side.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", color: "#fff" }}>
          <h1 style={{ fontSize: 46, fontWeight: 700 }}>Case Studies</h1>
          <p style={{ fontSize: 20, maxWidth: 720, margin: "0 auto" }}>
            Solving complex business challenges with technology-driven solutions.
          </p>
        </div>
      </section>

      {/* CASE STUDIES – PRAKAT STYLE WITH IMAGES */}
      <section className="prakat-case-section">
        <div className="prakat-case-grid">
          {caseStudies.map((study, index) => (
            <div className="prakat-case-card" key={index}>
              
              {/* IMAGE */}
              <div className="case-img-wrapper">
                <img src={study.image} alt={study.title} />
              </div>

              <span className="case-domain">{study.domain}</span>

              <h3>{study.title}</h3>
              <p className="case-desc">{study.description}</p>

              <div className="case-tech">
                {study.techStack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <button className="case-btn">View Case Study →</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}