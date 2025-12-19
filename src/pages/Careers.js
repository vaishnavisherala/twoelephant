import React from "react";
import heroImg from "../images/side.jpg";
import team1 from "../images/team1.jpeg";
import team2 from "../images/team2.jpeg";
import team3 from "../images/team3.jpeg";
import team4 from "../images/team4.jpeg";
import "../pages/Careers.css";
import Footer from "./Footer";

export default function Careers() {
  return (
    <div className="career-page">

      {/* HERO */}
      <section style={{backgroundImage:`url(${heroImg})`,backgroundSize:"cover", display:"flex",height:"800px"}} className="career-hero">
        <div className="career-hero-left">
          <span className="career-badge">CAREERS</span>
          <h1>
            Start Your Career <br />
            <span>at Two Elephants</span>
          </h1>
          <p>
            Build your future with a team that values innovation,
            learning, and long-term growth.  
            We create impact — together.
          </p>

          <div className="career-buttons">
            <a href="#openings" className="career-btn primary">
              View Open Roles
            </a>
           
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="career-hero-right">
          {/* <img src={heroImg} className="hero-main-img" alt="career" /> */}
          <div className="hero-grid">
            <img src={team1} alt="team" />
            <img src={team2} alt="team" />
            <img src={team3} alt="team" />
            <img src={team4} alt="team" />
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section id="openings" className="current-openings">
  <h2 className="section-title">Current Openings</h2>
  <p className="section-subtitle">
    Join our growing team and work on cutting-edge AI & technology solutions
  </p>

  <div className="openings-grid">
    <div className="opening-card">
      <h3>Python Developer</h3>
      <p className="opening-location">📍 Solapur / Remote</p>
      <ul className="opening-points">
        <li>Strong knowledge of Python & backend development</li>
        <li>Experience with Django / Flask / FastAPI</li>
        <li>Database knowledge (PostgreSQL / MySQL)</li>
        <li>REST API development & integrations</li>
      </ul>
    </div>

    <div className="opening-card">
      <h3>AI / ML Intern</h3>
      <p className="opening-location">📍 On-site / Internship</p>
      <ul className="opening-points">
        <li>Basic understanding of Python & ML fundamentals</li>
        <li>Passion for AI, data & problem-solving</li>
        <li>Hands-on learning with real-world projects</li>
        <li>Mentorship from experienced engineers</li>
      </ul>
    </div>
  </div>
</section>



<Footer/>
    </div>
  );
}
