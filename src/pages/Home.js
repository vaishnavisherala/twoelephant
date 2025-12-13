import React, { useState, useEffect, useRef } from "react";
import { Scale, Award,  Settings } from "lucide-react";

import { 
  ChevronRight, 
  Code, 
  Smartphone, 
  Cloud, 
  Cpu, 
  MonitorCheck,
  Layout,
  Lightbulb,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Building2,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Target,
  Users,
  TrendingUp,
  Play,
  BarChart3,
  Database,
  Globe
} from "lucide-react";
import image1 from "../images/image1.png";
import image from "../images/image.png";
import side from "../images/side.jpg";
import casestudyImg from "../images/casestudy.jpeg";
import Footer from "./Footer";

export default function Home() {
  const slides = [
    {
      title: "Digital Engineering Solutions",
      subtitle: "Advanced IT Services & Software Development",
      description:
        "Transforming businesses with innovative technology solutions. From custom software to cloud infrastructure, we deliver excellence that drives growth.",
    },
    {
      title: "Empowering Businesses",
      subtitle: "Technology • Innovation • Trust",
      description:
        "We deliver future-ready IT solutions that help companies grow smarter, faster, and stronger. Your trusted partner in digital transformation.",
    },
    {
      title: "Your Trusted Technology Partner",
      subtitle: "Strategy • Execution • Support",
      description:
        "From idea to deployment — we guide you with clarity, strength, and transparency. Building strong foundations for your business success.",
    },
  ];


  const segments = [
    {
      title: "TEAMWORK",
      icon: <Users size={32} strokeWidth={1.5} />,
      text: "Collaboration that strengthens our ability to succeed.",
      angle: -60,
      x: -219,
      y: -220,
    },
    {
      title: "HONESTY",
      icon: <Scale size={32} strokeWidth={1.5} />,
      text: "Transparency and ethics guide every decision we make.",
      angle: -20,
      x: -10,
      y: -270,
    },
    {
      title: "QUALITY",
      icon: <Award size={32} strokeWidth={1.5} />,
      text: "World-class execution with consistency and precision.",
      angle: 20,
      x: 220,
      y: -220,
    },
    {
      title: "CUSTOMERS",
      icon: <Users size={32} strokeWidth={1.5} />,
      text: "Customer success is the core of our purpose.",
      angle: 60,
      x: 220,
      y: 30,
    },
    {
      title: "GOALS",
      icon: <Target size={32} strokeWidth={1.5} />,
      text: "Clear objectives aligned with business growth.",
      angle: 140,
      x: 0,
      y: 140,
    },
    {
      title: "INNOVATION",
      icon: <Lightbulb size={32} strokeWidth={1.5} />,
      text: "Ideas that reshape industries and possibilities.",
      angle: -140,
      x: -220,
      y: 30,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Mouse move effect for hero section
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  

  return (
    <div className="home-page">
      {/* ===================== HERO SECTION WITH SLIDER ===================== */}
      <section 
        id="home" 
        className="hero-slider-section"
        ref={heroRef}
        style={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
          backgroundImage: `url(${side})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="hero-watermark"></div>
        <div className="hero-animated-bg">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        <div className="hero-slider-container">
          <div className="hero-slide fade-animation">
            <div className="hero-content-wrapper">
              <div className="hero-text-content">
                <h1 className="hero-title">{slides[currentSlide].title}</h1>
                <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
                <p className="hero-description">{slides[currentSlide].description}</p>
                <div className="hero-buttons">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="btn hero-btn primary"
                  >
                    Learn More <ChevronRight className="icon" />
                  </button>
                
                </div>
              </div>
              <div className="hero-visual-content">
              </div>
            </div>
          </div>
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active-dot" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      

      

      {/* ===================== CORE VALUES (Circular Infographic) ===================== */}
     <section className="values-wheel-section">
      <div className="values-intro">
        <p className="values-intro-text">Two Elephants is built on the values that elephants naturally represent — unmatched strength, deep loyalty, emotional intelligence, and a remarkable memory. These qualities define the way we work with our clients: strong enough to tackle any challenge, caring enough to understand your needs, and honest enough to always stand by our word.</p>
      </div>
      <div className="wheel-container">
<div className="core-values-center-text">CORE VALUES</div>
        {/* Arc segments */}
        {segments.map((s, i) => (
          <React.Fragment key={i}>
            {/* Text outside */}
            <div
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
          </React.Fragment>
        ))}
      </div>
      
    </section>

      {/* ===================== CASE STUDIES PREVIEW ===================== */}
      <section className="case-studies-preview-section">
        <div className="case-preview-container">
          <div className="case-preview-card">
            <div className="case-preview-grid">
              <div className="case-preview-image">
                <img src={casestudyImg} alt="Digital Transformation Case Study" />
              </div>
              <div className="case-preview-content">
                <span className="case-label">CASE STUDY</span>
                <h3 className="case-preview-title">Digital Transformation Success</h3>
                <p className="case-preview-desc">
                  Discover how we helped a leading organization modernize their systems, 
                  improve efficiency, and drive innovation through cutting-edge technology solutions.
                </p>
                
                <div className="case-highlights">
                  <div className="highlight-item">
                    <span className="highlight-label">Challenge</span>
                    <p>Legacy systems hindering scalability and growth</p>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-label">Solution</span>
                    <p>Cloud migration and modern architecture redesign</p>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-label">Result</span>
                    <p>40% improvement in performance and 25% cost reduction</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.location.href = '/case-studies'} 
                  className="btn case-link-btn"
                >
                  View Case Studies <ArrowRight className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT CTA ===================== */}
      

      {/* ===================== FOOTER ===================== */}
      <Footer/>
    </div>
  );
}
