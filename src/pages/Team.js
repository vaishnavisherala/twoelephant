// src/pages/Team.js
import React, { useState } from "react";

import Abhi from "../images/Abhi.jpeg";
import Au from "../images/Au.jpeg";
import pt from "../images/pt.jpeg";
import Sapna from "../images/Sapna.jpeg";
import pankaj from "../images/pankaj.jpeg";
import Footer from "./Footer";

export default function Team() {
  const [zoomImg, setZoomImg] = useState(null);

  const topLeaders = [
    {
      name: "Prashant Rathi",
      role: "Founder & CEO",
      img: pt,
      bio: "Visionary leader focused on innovation, customer trust, and technological excellence.",
      social: "@prashant.rathi",
    },
    {
      name: "Anuradha Biswas",
      role: "Technical Lead",
      img: Au,
      bio: "Expert in full-stack engineering, cloud architecture, and high-performance systems.",
      social: "@anuradha.b",
    },
  ];

  const otherLeaders = [
    {
      name: "Abhik Biswas",
      role: "Co-Founder & Director",
      img: Abhi,
      bio: "Strategic thinker dedicated to building strong teams and long-term business success.",
      social: "@abhik.b",
    },
    {
      name: "Sapna Rathi",
      role: "Technical Lead",
      img: Sapna,
      bio: "Expert in full-stack engineering, cloud architecture, and high-performance systems.",
      social: "@sapna.rathi",
    },
    {
      name: "Pankaj Rathi",
      role: "Technical Lead",
      img: pankaj,
      bio: "Expert in full-stack engineering, cloud architecture, and high-performance systems.",
      social: "@pankaj.rathi",
    },
  ];

  return (
    <div className="team-page">
      {/* IMAGE ZOOM MODAL */}
      {zoomImg && (
        <div className="image-modal" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="Zoomed" />
        </div>
      )}

      {/* HERO */}
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
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", color: "#fff" }}>
          <h1 style={{ fontSize: 46, fontWeight: 700 }}>Leadership & Team</h1>
          <p style={{ fontSize: 20, maxWidth: 720, margin: "0 auto" }}>
            Meet the people who drive innovation, guide our mission, and build the future.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "40px 30px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 360px))",
            gap: 28,
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          {topLeaders.map((leader, i) => (
            <CompactCard
              key={i}
              leader={leader}
              index={i}
              onImageClick={setZoomImg}
              avatarSize={140}   // 🔥 BIGGER IMAGE
            />
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 320px))",
            gap: 24,
            justifyContent: "center",
          }}
        >
          {otherLeaders.map((leader, i) => (
            <CompactCard
              key={i}
              leader={leader}
              index={i + 2}
              onImageClick={setZoomImg}
              avatarSize={135}   // 🔥 BIGGER IMAGE
            />
          ))}
        </div>
      </section>
       {/* CULTURE SECTION */}
        <section style={{ marginTop: 50, textAlign: "center" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700 }}>Our Culture</h2>
          <p
            style={{
              maxWidth: 760,
              margin: "12px auto",
              lineHeight: 1.7,
              color: "#555",
              fontSize: 15,
            }}
          >
            At Two Elephants, we believe in strength through unity, care for our team
            and clients, and honesty in everything we do. We foster a collaborative
            environment where talent grows, ideas flourish, and innovation thrives.
          </p>
        </section>

      {/* FOOTER */}
      <Footer/>
    </div>
  );
}

/* CARD */
function CompactCard({ leader, index, onImageClick, avatarSize }) {
  const headerHeight = 90;

  // 🔥 REDUCED GAP BETWEEN IMAGE & NAME
  const paddingTop = avatarSize / 2 - 6;

  const colors = [
    "linear-gradient(135deg,#f97316,#fb923c)",
    "linear-gradient(135deg,#06b6d4,#10b981)",
    "linear-gradient(135deg,#6366f1,#8b5cf6)",
    "linear-gradient(135deg,#ef4444,#f97316)",
    "linear-gradient(135deg,#ec4899,#f43f5e)",
  ];

  return (
    <article className="compact-card">
      <div className="card-strip" style={{ background: colors[index % colors.length] }} />

      {/* AVATAR */}
      <div
        className="avatar-wrap"
        style={{ cursor: "zoom-in" }}
        onClick={() => onImageClick(leader.img)}
      >
        <img
          src={leader.img}
          alt={leader.name}
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #fff", // 🔥 THINNER WHITE BORDER
          }}
        />
      </div>

      <div className="card-body" style={{ paddingTop }}>
        <h3 className="team-name">{leader.name}</h3>
        <p className="team-role">{leader.role}</p>
        <p style={{ fontSize: 12, color: "#3498db" }}>{leader.social}</p>
        <p className="team-bio">{leader.bio}</p>
        <button className="btn">View Profile</button>
      </div>
    </article>
  );
}

