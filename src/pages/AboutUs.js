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
            unmatched strength, deep loyalty, emotional intelligence, and a remarkable memory.
          </p>
          <p>
            Since our beginning, we have focused on offering reliable technology solutions  
            that empower businesses to scale with trust and innovation.  
          </p>

          <p>
            We believe in long-term partnerships, transparent processes, and delivering  
            value-driven results across every project we handle.
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
            Empowering Solapur and India’s tier-2 cities to become strong tech ecosystems.
          </p>

          <ul>
            <li>Enhancing student innovation & employability</li>
            <li>Strengthening academia–industry partnerships</li>
            <li>Building a sustainable tech future for the region</li>
          </ul>
        </div>

        {/* MISSION BOX */}
        <div className="mission-box">
          <h2>Our Mission</h2>
          <ul>
            <li> Deliver reliable & scalable IT solutions</li>
            <li> Support clients with care & long-term commitment</li>
            <li> Maintain transparency in every partnership</li>
            <li> Build trust-driven business relationships</li>
            <li> Create value using innovation & research</li>
          </ul>
        </div>
      </section>
      <Footer/>

    </div>
  );
}
