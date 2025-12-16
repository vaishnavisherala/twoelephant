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
            <a href="/contact" className="career-btn secondary">
              Contact HR
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
      <section className="career-why">
        <h2>Why Work With Us?</h2>
        <p>
          At Two Elephants, we don’t just hire employees —  
          we build leaders, innovators, and long-term partners.
        </p>

        <div className="career-values">
          <div className="career-card">
            <h4>🚀 Career Growth</h4>
            <p>Structured learning, mentorship & real projects.</p>
          </div>
          <div className="career-card">
            <h4>🤝 Supportive Culture</h4>
            <p>People-first culture with strong team bonding.</p>
          </div>
          <div className="career-card">
            <h4>💼 Real Impact</h4>
            <p>Your work directly impacts clients & communities.</p>
          </div>
        </div>
      </section>

<Footer/>
    </div>
  );
}
