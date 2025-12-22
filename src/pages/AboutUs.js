import React from "react";

import heroImg from "../images/side.jpg";
import Footer from "./Footer";
export default function AboutUs() {
  return (
    <div className="about-page">

      {/* HEADER TITLE */}
      <section style={{
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}  className="about-header">
        <h1 className="about-title">About Two Elephants</h1>
        <p className="about-subtitle">
          Strength • Care • Honesty — The Promise We Stand On
        </p>
      </section>

      {/* INTRO SECTION */}
      <section className="about-hero-section">
        {/* LEFT SIDE - TEXT */}
        <div className="hero-left">
        
          <p>
             Two Elephants is built on core values that elephants naturally represent —
            unmatched strength, deep loyalty, emotional intelligence, a remarkable memory.
             We believe in long-term partnerships and delivering  
            value-driven results across every project we handle.
       
          </p>
          <p>
           Built on years of proven execution across manufacturing, technology, and global IT delivery, Two Elephants brings together an experienced leadership team to establish a scalable IT organization in Solapur, Maharashtra. 
          </p>

          <p>
            With a clear mandate to build a 500-member software engineering team over the next three years, we aim to harness regional talent to deliver high-value technology services to national and international clients, while positioning Solapur as an emerging technology hub.
              </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
       
      </section>

      {/* ===============================
          ABOUT US INFORMATION BLOCK
      =============================== */}
      <section className="about-info-section">

        {/* LEFT VERTICAL TEXT */}
       

        {/* WHITE CARD RIGHT CONTENT */}
         {/* <div className="intro-right">
          <img src={heroImg} alt="About" />
        </div> */}
      </section>



      {/* ===============================
          VISION + MISSION (SIDE-BY-SIDE)
      =============================== */}
      <section className="vision-mission-wrapper">

        {/* VISION BOX */}
        <div className="vision-box">
    <h2>Our Vision</h2>
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
    <h2>Our Mission</h2>
    <ul>
      <li>Design and deliver AI & ML-powered solutions that solve real-world problems</li>
      <li>Build secure, scalable, and ethical AI systems with transparency</li>
      <li>Help businesses unlock insights through data, analytics, and automation</li>
      <li>Support long-term digital transformation with innovation and care</li>
      <li>Create measurable impact using technology-driven intelligence</li>
    </ul>
  </div>
      </section>
      <Footer/>

    </div>
  );
}
