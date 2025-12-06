import React from "react";
import Abhi from "../images/sir.jpeg";
import Au from "../images/mam.jpeg";
import pt from "../images/pt.jpeg"
export default function Team() {
  const leaders = [
    {
      name: "Prashant Rathi",
      role: "Founder & CEO",
      img: pt,
      bio: "Visionary leader focused on innovation, customer trust, and technological excellence.",
    },
    {
      name: "Abhik Biswas",
      role: "Co-Founder & Director",
      img: Abhi,
      bio: "Strategic thinker dedicated to building strong teams and long-term business success.",
    },
    {
      name: "Anuradha Biswas",
      role: "Technical Lead",
      img: Au,
      bio: "Expert in full-stack engineering, cloud architecture, and high-performance systems.",
    },
      ];

  return (
    <div className="team-page">

      {/* HEADER SECTION */}
      <section className="team-header">
        <h1 className="team-title">Leadership & Team</h1>
        <p className="team-subtitle">
          Meet the people who drive innovation, guide our mission, and build the future.
        </p>
      </section>

      {/* LEADERSHIP GRID */}
      <section className="team-section">
        <div className="team-grid">
          {leaders.map((leader, index) => (
            <div className="team-card" key={index}>
              <img src={leader.img} alt={leader.name} className="team-photo" />
              <h3 className="team-name">{leader.name}</h3>
              <p className="team-role">{leader.role}</p>
              <p className="team-bio">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="culture-section">
        <h2 className="section-title">Our Culture</h2>
        <p className="culture-text">
          At Two Elephants, we believe in strength through unity, care for our team and clients,
          and honesty in everything we do. We foster a collaborative environment where talent grows,
          ideas flourish, and innovation thrives.
        </p>
      </section>

    </div>
  );
}
