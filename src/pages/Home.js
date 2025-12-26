import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Users,
  Scale,
  Award,
  Target,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import side from "../images/img1.jpg";
import image1 from "../images/img.png";
import image from "../images/logo.png";
import casestudyImg from "../images/casestudy.jpeg";
import Footer from "./Footer";

export default function Home() {
  const navigation = useNavigate();
  const heroRef = useRef(null);

  /* ===================== MOBILE DETECTION ===================== */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===================== SLIDES ===================== */
  const slides = [
    {
      isFirstSlide: true,
      title: "Digital Engineering Solutions",
      subtitle: "Advanced IT Services & Software Development",
      description:
        "Transforming businesses with innovative technology solutions. From custom software to cloud infrastructure, we deliver excellence that drives growth.",
      bg: image1,
      logo: image,
      size: "cover",
      textColor: "#ffffff",
    },
    {
      title: "Empowering Businesses",
      subtitle: "Technology • Trust",
      description:
        "We deliver future-ready IT\nsolutions that help companies\ngrow smarter, faster, stronger.\nYour trusted partner in\ndigital transformation",
      bg: side,
      size: "cover",
      mobileSize: "cover",
      position: "center",
      mobilePosition: "center bottom",
      textColor: "#ffffff",
    },
    {
      title: "Your Trusted Technology Partner",
      subtitle: "Strategy • Execution • Support",
      description:
        "From idea to deployment — we guide you with clarity, strength, and transparency.",
      bg: image1,
      size: "cover",
      textColor: "#ffffff",
    },
  ];


   const segments = [
    {
      title: "TEAMWORK",
      icon: <Users size={32} strokeWidth={1.5} />,
      text: "Collaboration that strengthens our ability to succeed.",
      x: -219,
      y: -220,
    },
    {
      title: "HONESTY",
      icon: <Scale size={32} strokeWidth={1.5} />,
      text: "Transparency and ethics guide every decision we make.",
      x: -10,
      y: -270,
    },
    {
      title: "QUALITY",
      icon: <Award size={32} strokeWidth={1.5} />,
      text: "World-class execution with consistency and precision.",
      x: 220,
      y: -220,
    },
    {
      title: "CUSTOMERS",
      icon: <Users size={32} strokeWidth={1.5} />,
      text: "Customer success is the core of our purpose.",
      x: 220,
      y: 30,
    },
    {
      title: "GOALS",
      icon: <Target size={32} strokeWidth={1.5} />,
      text: "Clear objectives aligned with business growth.",
      x: 0,
      y: 140,
    },
    {
      title: "INNOVATION",
      icon: <Lightbulb size={32} strokeWidth={1.5} />,
      text: "Ideas that reshape industries and possibilities.",
      x: -220,
      y: 30,
    },
  ];

  /* ===================== SLIDER STATE ===================== */
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-page">
      {/* ===================== HERO SLIDER ===================== */}
      <section
        id="home"
        ref={heroRef}
        className="hero-slider-section"
        style={{
          backgroundImage: `url(${slides[currentSlide].bg})`,
          backgroundSize:
            isMobile && slides[currentSlide].mobileSize
              ? slides[currentSlide].mobileSize
              : slides[currentSlide].size,
          backgroundPosition:
            isMobile && slides[currentSlide].mobilePosition
              ? slides[currentSlide].mobilePosition
              : slides[currentSlide].position || "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="hero-slider-container">
          <div
            className={`hero-content-wrapper ${
              slides[currentSlide].isFirstSlide ? "hero-split" : ""
            }`}
          >
            {/* TEXT */}
            <div className="hero-text-content">
              <h1
                className="hero-title"
                style={{ color: slides[currentSlide].textColor }}
              >
                {slides[currentSlide].title}
              </h1>

              <p className="hero-subtitle">
                {slides[currentSlide].subtitle}
              </p>

              <p className="hero-description">
                {slides[currentSlide].description}
              </p>

              <div className="hero-buttons">
                <button
                  className="btn hero-btn primary"
                  onClick={() => navigation("/services")}
                >
                  Learn More <ChevronRight className="icon" />
                </button>
              </div>
            </div>

            {/* LOGO – ONLY FIRST SLIDE */}
            {slides[currentSlide].isFirstSlide && (
              <div className="hero-logo-right">
                <img
                  src={slides[currentSlide].logo}
                  alt="Company Logo"
                />
              </div>
            )}
          </div>

          {/* DOTS */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  index === currentSlide ? "active-dot" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* ===================== CORE VALUES ===================== */}
      <section className="values-wheel-section">
        <div className="values-intro">
          <p className="values-intro-text">
Two Elephants is deploying a future-ready technology organization built upon seasoned leadership, proven global engineering practices, and a deeply committed regional talent base. Our overarching objective is the development of a globally competitive IT delivery framework emanating from Solapur that consistently maximizes client value while championing decentralized and inclusive innovation.          </p>
        </div>

        <div className="wheel-container">
          <div className="core-values-center-text">CORE VALUES</div>

          {segments.map((s, i) => (
            <div
              key={i}
              className="outside-text"
              style={{
                left: `calc(50% + ${s.x}px)`,
                top: `calc(50% + ${s.y}px)`,
              }}
            >
              <div className="value-icon-circle">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== CASE STUDY ===================== */}
      <section className="case-studies-preview-section">
        <div className="case-preview-container">
          <div className="case-preview-grid">
            <div className="case-preview-image">
              <img src={casestudyImg} alt="Case Study" />
            </div>

            <div className="case-preview-content">
              <span className="case-label">CASE STUDY</span>
              <h3>Digital Transformation Success</h3>
              <p>
                Modernizing legacy systems to improve scalability, security,
                and operational efficiency.
              </p>
              <button
                className="btn case-link-btn"
                onClick={() => navigation("/case-studies")}
              >
                View Case Studies <ArrowRight className="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
