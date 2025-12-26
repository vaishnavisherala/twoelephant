import React from "react";
import {
  Cpu,
  ShieldCheck,
  Lightbulb,
  Rocket,
  Code,
  Cloud,
  Share2,
  LineChart,
} from "lucide-react";
 import { useNavigate } from "react-router-dom";
import heroImg from "../images/img1.jpg";
import casetudy1 from "../images/casestudy.jpeg";
import producteng from "../images/productengg.jpg";
import cyber from "../images/cyber.jpg";
import dataAI from "../images/dataAI.png";
import ommimarket from "../images/ommimarket.png";
import Footer from "./Footer";
export default function Services() {
  const navigation= useNavigate();
  const services = [
    {
        image: casetudy1,
       title: "Digital Transformation",
      description:
        "Modernizing processes and building scalable digital systems for education, health, and livelihood platforms.",
      sub:
        "From legacy modernization to workflow automation, we help organizations become future-ready.",
    },
    {
       image: producteng,
      title: "Product Engineering",
      description:
        "Designing and developing inclusive, modular, and secure digital products from concept to launch.",
      sub:
        "Built with scalable architecture, user-centric design, and rigorous quality engineering.",
    },
    {
       image: cyber,
      title: "Cybersecurity & Risk Management",
      description:
        "Protecting sensitive data through vulnerability assessments, compliance frameworks, and continuous monitoring.",
      sub: "Ensuring safety, privacy, and security for communities and partners.",
    },
    {
       image: dataAI,
      title: "AI & Data Solutions",
      description:
        "AI/ML solutions for actionable insights, personalization, and predictive intelligence.",
      sub:
        "Ethical AI practices ensuring fairness, transparency, and data responsibility.",
    },
    {
       image: ommimarket,
      title: "Cognitive & AI-Enabled Solutions",
      description:
        "Deployment of advanced algorithms for process automation",
      sub:
        "Sophisticated predictive analytics, and implementation of intelligent workflows across diverse industry verticals.",
    },
    
  ];

  return (
    <div className="services-page">

      {/* ================= HERO ================= */}
      <section
        className="services-header"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="services-upper">Software Services</h2>
        <h3 className="services-up">Our Services And Works</h3>
        </section>
        {/* ================= FEATURED SERVICES ================= */}
      

      {/* ================= SERVICE DETAILS WITH IMAGES ================= */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`service-detail ${index % 2 === 1 ? "reverse" : ""}`}
        >
          <div className="service-detail-container">
            <div className="service-detail-content">
              {/* <div className="service-detail-icon">{service.icon}</div> */}
              <h2 className="service-detail-title">{service.title}</h2>
              <p className="service-detail-description">{service.description}</p>
              <p className="service-detail-sub">{service.sub}</p>
              <button onClick={() => navigation("/case-studies")} className="service-detail-btn">
                Explore Service <span>→</span>
              </button>
            </div>
            <div className="service-detail-image">
              <div 
                className="service-image-placeholder"
                style={{ background: service.gradient }}
              >
                <img
  src={service.image}
  alt={service.title}
  className="service-image"
/>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ================= CTA SECTION ================= */}


      {/* ================= FOOTER ================= */}
      <Footer/>
    </div>
  );
}
