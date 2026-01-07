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
      name: "Prashant Ratthi",
      role: "Co-Founder & CEO,Two Elephants",
      img: pt,
      social:"https://www.linkedin.com/in/prashant-rathi-pr-28b26b7/",
      bio: "Holds an MBA from Sydney and brings strong cross-market business acumen with execution rigor. He contributes to the legacy of Pushpa Textile, a Solapur-based manufacturer with over 50 years of experience",
    },
    {
      name: "Anuradha Biswas",
      role: "Chief Executive Officer & Founder,Prakat Solutions",
      img: Au,
      social:"https://www.linkedin.com/in/anubiswas/",
      bio: "A mentor and catalyst with over two decades of leadership experience. Has architected and scaled innovative businesses and global delivery units for Infosys, Aztec, CyberCash, VeriFone, and CA Technologies.",
    },
  ];

  const otherLeaders = [
    {
      name: "Abhik Biswas",
      role: "Chief Technology Officer & Co-Founder, Prakat Solutions",
      img: Abhi,
      social:"https://www.linkedin.com/in/abhik/",
      bio: "Over three decades of engineering and platform leadership experience. Former senior technology leader at TCS, VeriFone, CA, Cisco, and other global enterprises, driving large-scale systems.",
    },
    {
      name: "Sapna Rathi",
      role: "Co-Founder, Two Elephants",
      img: Sapna,
      social:"https://www.linkedin.com/in/sapna-rathi-44928b3b/",
      bio: "Leads operational governance and process architecture. Specializes in implementing IT-enabled ISO frameworks to build scalable and compliant operating models.",
    },
    {
      name: "Pankaj Rathi",
      role: "Lead",
      img: pankaj,
      social:"https://www.linkedin.com/in/pankajsureshrathi/",
      bio: "He manages our Overseas Operations. He graduated from VJTI Mumbai as Gold Medalist in Textile Engineering & completed Masters degree in Textiles, NY. Currently based in Houstan Texas and leading a Global Shipping Business.",
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
          backgroundImage: `url(${require("../images/img1.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "70px 0px",
          position: "relative",
        }}
      >
        
        <div style={{ position: "absolute", inset: 0}} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", color: "#fff" }}>
          <h1 style={{ fontSize: 46, fontWeight: 500 }}>Leadership & Team</h1>
          <p style={{ color:"orange", fontSize: 22, fontWeight: 600, maxWidth: 800, margin: "0 auto" }}>
            Meet the people who drive innovation, guide our mission, and build the future.
          </p>
        </div>
      </section>

 {/* CULTURE SECTION */}
        <section style={{ marginTop: 50, textAlign: "center" }}>
          <h2 style={{ fontSize: 26, fontWeight: 700 ,color: "#1f355b"}}>Our Culture</h2>
          <p
            style={{
              maxWidth: 900,
              margin: "12px auto",
              lineHeight: 1.7,
              color: "#1f355b",
              fontSize: 19,
              fontWeight: 500,
            }}
          >
            At Two Elephants, we believe in strength through unity, care for our team
            and clients, and honesty in everything we do. We foster a collaborative
            environment where talent grows, ideas flourish, and innovation thrives.
          </p>
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
          className="team-avatar"
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
        <p className="team-bio">{leader.bio}</p>
        {/* VIEW PROFILE → LINKEDIN */}
        {leader.social && (
          <a
            href={leader.social}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Profile
          </a>
        )}
      </div>
    </article>
  );
}

