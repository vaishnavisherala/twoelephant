import React from "react";
import "./AboutUs.css";
import heroBg from "../images/img1.jpg"; // 🔥 use your image here
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div className="about-page">

      {/* ================= HERO HEADER ================= */}
      <section
        className="about-hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <h1>
            Our Story, Vision <br />and Mission
          </h1>
          <p>
            Learn about our commitment to excellence, innovation, and
            the principles that guide our work every day.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="about-content">
        <div className="about-left">
           <blockquote>
            Our team of experts works tirelessly to bring your vision
            to life, ensuring every project we undertake not only meets
            but exceeds expectations.
          </blockquote>
          <p>
            Two Elephants is built on core values that elephants naturally
            represent unmatched strength, deep loyalty, emotional
            intelligence, and a remarkable memory.
          </p>

          <p>
            Built on years of proven execution across manufacturing,
            technology, and global IT delivery, Two Elephants brings
            together an experienced leadership team to establish a
            scalable IT organization in Solapur, Maharashtra.
          </p>

          <p>
            With a clear mandate to build a member's software engineering
            team over the next three years, we aim to harness regional
            talent to deliver high-value technology services to national
            and international clients, while positioning Solapur as an
            emerging technology hub.
          </p>
        </div>

        <div className="about-card">
          <span>ABOUT US</span>
          <p>
            We believe in long-term partnerships and delivering
            value-driven results across every project we handle.
            Our approach integrates design, technology, and strategy
            to create meaningful digital experiences.<br/>Two Elephants designed and delivered an AI-powered computer vision platform
          </p>
        </div>
      </section>
      <section className="vision-mission-wrapper">

        {/* VISION BOX */}
        <div className="vision-box">
    <h2 style={{color:'#475569'}}>Our Vision</h2>
    <p>
      To leverage Artificial Intelligence and emerging technologies to empower
      organizations and communities with intelligent, ethical, and scalable digital solutions.
    </p>

    <ul>
      <li>Driving AI-led innovation across education, healthcare, and enterprises</li>
      <li>Enabling data-driven decision-making through intelligent systems</li>
      <li>Building future-ready digital ecosystems for sustainable growth</li>
    </ul>
  </div>


        {/* MISSION BOX */}
        <div className="mission-box">
    <h2 style={{color: '#475569'}}>Our Mission</h2>
    <ul>
      <li>Design and deliver AI & ML-powered solutions that solve real-world problems</li>
      <li>Build secure, scalable, and ethical AI systems with transparency</li>
      <li>Help businesses unlock insights through data, analytics, and automation</li>
      <li>Support long-term digital transformation with innovation and care</li>
      <li>Create measurable impact using technology-driven intelligence</li>
    </ul>
  </div>
      </section>


      {/* ================= STATS ================= */}
      
      <Footer />
    </div>
  );
}
