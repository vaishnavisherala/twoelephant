import React from "react";
import heroImg from "../images/side.jpg";
import casestudy from "../images/casestudy.jpeg";
import manufacturing from "../images/manufacturing.jpg";
import retail from "../images/retail.jpg";
import healthcare from "../images/healthcare.jpg";
import Footer from "./Footer";
export default function Industries() {
  const industries = [
    {
      image: casestudy,
      title: "Education",
      description:
        "Digital learning platforms, assessment systems, student management, and virtual classrooms.",
    },
    {
      image: healthcare,
      title: "Healthcare",
      description:
        "AI-powered diagnosis, telemedicine solutions, EMR systems, and patient engagement platforms.",
    },
    {
      image: retail,
      title: "Retail",
      description:
        "Omnichannel commerce, POS systems, customer analytics, and inventory automation.",
    },
    
   
    {
      image: manufacturing,
      title: "Manufacturing",
      description:
        "IoT systems, ERP modules, process automation, and supply-chain optimization tools.",
    },
    
  ];

  return (
    <div className="industries-page">
      
      {/* ===== HERO ===== */}
      <section 
        className="industries-header"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="industries-title">Industries We Serve</h1>
        <p className="industries-subtitle">
          Building scalable, secure and intelligent digital solutions for global industries.
        </p>
      </section>

      {/* ===== GRID SECTION ===== */}
      <section className="industries-section">
        <div className="industries-grid">
          {industries.map((ind, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-img-wrapper">
                <img src={ind.image} alt={ind.title} className="industry-img" />
              </div>

              <h3 className="industry-title">{ind.title}</h3>
              <p className="industry-desc">{ind.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>

    </div>
  );
}
