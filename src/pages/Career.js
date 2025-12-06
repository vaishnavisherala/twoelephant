import React from "react";

export default function Career() {
  return (
    <div className="career-page">

      {/* HEADER */}
      <section className="career-header">
        <h1 className="career-title">Careers at Two Elephants</h1>
        <p className="career-subtitle">
          Build your future with a team that values strength, care, and honesty.
        </p>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="career-section">
        <h2 className="section-title">Current Openings</h2>

        <div className="openings-grid">

          <div className="opening-card">
            <h3>Frontend Developer</h3>
            <p>2+ years experience • React, JavaScript, UI/UX</p>
            <button className="btn apply-btn">Apply Now</button>
          </div>

          <div className="opening-card">
            <h3>Backend Developer</h3>
            <p>3+ years experience • Node.js, SQL, APIs</p>
            <button className="btn apply-btn">Apply Now</button>
          </div>

          <div className="opening-card">
            <h3>UI/UX Designer</h3>
            <p>Creative thinker • Figma, Wireframing, Prototyping</p>
            <button className="btn apply-btn">Apply Now</button>
          </div>

        </div>
      </section>

      {/* INTERNSHIP PROGRAM */}
      <section className="internship-section">
        <h2 className="section-title">Internship Program</h2>

        <p className="internship-text">
          Our internship program is designed to nurture talent, offering
          hands-on experience with real-world projects. If you're passionate
          about technology and eager to learn, we want to hear from you.
        </p>

        <ul className="internship-list">
          <li>✔ 3–6 month program</li>
          <li>✔ Mentorship from senior engineers</li>
          <li>✔ Certificate & letter of recommendation</li>
          <li>✔ Opportunity for full-time placement</li>
        </ul>
      </section>

      {/* WORK CULTURE */}
      <section className="culture-section">
        <h2 className="section-title">Our Work Culture</h2>

        <div className="culture-grid">
          <div className="culture-card">
            <h3>Innovation</h3>
            <p>We encourage creativity and growth through constant learning.</p>
          </div>

          <div className="culture-card">
            <h3>Collaboration</h3>
            <p>Strong teamwork, strong results — we succeed together.</p>
          </div>

          <div className="culture-card">
            <h3>Respect</h3>
            <p>
              A workplace where every voice is valued and diversity is celebrated.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        <h2 className="section-title">Employee Benefits</h2>

        <ul className="benefits-list">
          <li>✔ Competitive salary</li>
          <li>✔ Remote / hybrid work flexibility</li>
          <li>✔ Health & wellness support</li>
          <li>✔ Paid leave & holidays</li>
          <li>✔ Employee training programs</li>
        </ul>
      </section>

      {/* APPLY NOW FORM */}
      <section className="apply-section">
        <h2 className="section-title">Apply Now</h2>

        <form className="apply-form">
          <label>
            Full Name
            <input type="text" placeholder="Enter your full name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="Enter your email" required />
          </label>

          <label>
            Position Applying For
            <input type="text" placeholder="Job Title / Internship" required />
          </label>

          <label>
            Why should we hire you?
            <textarea placeholder="Tell us about yourself..." rows="5"></textarea>
          </label>

          <button type="submit" className="btn submit-btn">Submit Application</button>
        </form>
      </section>

    </div>
  );
}
