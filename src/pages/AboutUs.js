import React from "react";

export default function AboutUs() {
  return (
    <div className="about-page">

      {/* HEADER TITLE */}
      <section className="about-header">
        <h1 className="about-title">About Two Elephants</h1>
        <p className="about-subtitle">
          Strength • Care • Honesty — The Promise We Stand On
        </p>
      </section>

      {/* INTRO SECTION */}
      <section className="about-section">
        <div className="about-container">

          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Two Elephants is built on the values that elephants naturally represent —
              unmatched strength, deep loyalty, emotional intelligence, and a
              remarkable memory. These qualities define the way we work with our
              clients: strong enough to tackle any challenge, caring enough to
              understand your needs, and honest enough to always stand by our word.
            </p>
            <p>
              Just like the mother-and-calf symbol in our logo, we guide and support
              every business we work with, helping them grow, evolve, and thrive with
              confidence.
            </p>
          </div>

          <div className="about-image-box">
            🐘🐘
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="vision-section">
        <div className="vision-container">
          <h2 className="vision-title">Our Vision</h2>
          <p className="vision-text">
            This initiative aims to transform Solapur into a model for Tier-2 tech education excellence by:
<ul>
    <p>
    Enhancing student employability and innovation readiness
    Strengthening academia–industry collaboration 
    Establishing Solapur as a beacon of tech-driven education reform </p>
    </ul>


          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <div className="mission-container">
          <h2 className="mission-title">Our Mission</h2>

          <ul className="mission-list">
            <li>✔ Provide strong, reliable, and efficient business solutions.</li>
            <li>✔ Support our clients with empathy, care, and long-term commitment.</li>
            <li>✔ Maintain absolute transparency and honesty in every partnership.</li>
            <li>✔ Deliver growth-driven strategies backed by research and insight.</li>
            <li>✔ Build lasting relationships based on trust, respect, and integrity.</li>
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="choose-section">
        <h2 className="choose-title">Why Choose Us</h2>

        <div className="choose-grid">

          <div className="choose-card">
            <h3>Experience</h3>
            <p>Years of proven industry expertise delivering successful projects.</p>
          </div>

          <div className="choose-card">
            <h3>Skilled Team</h3>
            <p>A passionate team of developers, designers, analysts, and engineers.</p>
          </div>

          <div className="choose-card">
            <h3>On-Time Delivery</h3>
            <p>We value time and ensure every project is delivered as promised.</p>
          </div>

          <div className="choose-card">
            <h3>Quality Assurance</h3>
            <p>Every solution undergoes strict testing for flawless performance.</p>
          </div>

          <div className="choose-card">
            <h3>24/7 Support</h3>
            <p>Round-the-clock support whenever you need us, without fail.</p>
          </div>

          <div className="choose-card">
            <h3>Affordable Pricing</h3>
            <p>Premium quality tech solutions at transparent, fair prices.</p>
          </div>

          <div className="choose-card">
            <h3>Client Satisfaction</h3>
            <p>Your success is our priority — we believe in long-term partnerships.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
