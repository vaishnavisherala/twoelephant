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
              Two Elephants is built on the values that elephants naturally
              represent — unmatched strength, deep loyalty, emotional
              intelligence, and a remarkable memory. These qualities define the
              way we work with our clients: strong enough to tackle any challenge,
              caring enough to understand your needs, and honest enough to always
              stand by our word.
            </p>
            <p>
              Just like the mother-and-calf symbol in our logo, we guide and
              support every business we work with, helping them grow, evolve,
              and thrive with confidence.
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
            To become a trusted global partner recognized for empowering
            businesses through strategic guidance, reliable support, and a
            culture rooted in integrity. We envision a world where every business
            — large or small — has the strength and clarity to grow sustainably
            and ethically.
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
            <li>✔ Deliver growth-driven strategies backed by real research and insight.</li>
            <li>✔ Build lasting relationships based on trust, respect, and integrity.</li>
          </ul>
        </div>
      </section>

      {/* BRAND VALUES */}
      
    </div>
  );
}
