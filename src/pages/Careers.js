import React from "react";

export default function Careers() {
  const openings = [
    {
      title: "Frontend Developer",
      exp: "1–3 years",
      skills: "React, JavaScript, UI/UX, HTML/CSS",
    },
    {
      title: "Backend Developer",
      exp: "2–4 years",
      skills: "Node.js, APIs, SQL, MongoDB",
    },
    {
      title: "UI/UX Designer",
      exp: "0–2 years",
      skills: "Figma, Wireframing, Prototyping",
    },
    {
      title: "Full Stack Intern",
      exp: "Internship",
      skills: "React, Node.js (Training provided)",
    },
  ];

  return (
    <div className="career-page">

      {/* HEADER */}
      <section className="career-header">
        <h1 className="career-title">Careers</h1>
        <p className="career-subtitle">
          Build your future with strength, care, and honesty — the Two Elephants way.
        </p>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="career-section">
        <h2 className="section-title">Current Openings</h2>

        <div className="openings-grid">
          {openings.map((job, index) => (
            <div key={index} className="opening-card">
              <h3>{job.title}</h3>
              <p><strong>Experience:</strong> {job.exp}</p>
              <p><strong>Skills:</strong> {job.skills}</p>

              <button className="btn apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNSHIP PROGRAM */}
      <section className="internship-section">
        <h2 className="section-title">Internship Program</h2>

        <p className="internship-text">
          Our internship program helps young talent grow with real-world projects,
          mentorship from experts, and hands-on technology experience.
        </p>

        <ul className="internship-list">
          <li>✔ 3–6 month internship</li>
          <li>✔ Work with real industry projects</li>
          <li>✔ Get mentored by senior developers</li>
          <li>✔ Certificate + full-time opportunity</li>
        </ul>
      </section>

      {/* WORK CULTURE */}
      <section className="culture-section">
        <h2 className="section-title">Our Work Culture</h2>

        <div className="culture-grid">
          <div className="culture-card">
            <h3>Teamwork</h3>
            <p>We believe in growing together as a united, supportive team.</p>
          </div>

          <div className="culture-card">
            <h3>Innovation</h3>
            <p>We encourage creative thinking and new ideas every day.</p>
          </div>

          <div className="culture-card">
            <h3>Respect</h3>
            <p>We value diversity and treat everyone with kindness and respect.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        <h2 className="section-title">Employee Benefits</h2>

        <ul className="benefits-list">
          <li>✔ Competitive salary & performance bonuses</li>
          <li>✔ Remote / Hybrid options</li>
          <li>✔ Paid leave & holidays</li>
          <li>✔ Employee wellness programs</li>
          <li>✔ Upskilling training & certifications</li>
        </ul>
      </section>

      {/* APPLY NOW FORM */}
      <section className="apply-section">
        <h2 className="section-title">Apply Now</h2>

        <form className="apply-form">
          <label>
            Full Name
            <input type="text" placeholder="Enter your name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="Enter your email" required />
          </label>

          <label>
            Upload Resume
            <input type="file" accept=".pdf,.doc,.docx" required />
          </label>

          <label>
            Message
            <textarea placeholder="Tell us why you'd be a great fit..." rows="5"></textarea>
          </label>

          <button type="submit" className="btn submit-btn">Submit Application</button>
        </form>
      </section>
    </div>
  );
}
