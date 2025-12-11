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
      x: -180,
      y: -80,
    },
    {
      title: "HONESTY",
      icon: <Scale size={32} strokeWidth={1.5} />,
      text: "Transparency and ethics guide every decision we make.",
      angle: -20,
      x: -10,
      y: -150,
    },
    {
      title: "QUALITY",
      icon: <Award size={32} strokeWidth={1.5} />,
      text: "World-class execution with consistency and precision.",
      angle: 20,
      x: 180,
      y: -80,
    },
    {
      title: "CUSTOMERS",
      icon: <Users size={32} strokeWidth={1.5} />,
      text: "Customer success is the core of our purpose.",
      angle: 60,
      x: 220,
      y: 120,
    },
    {
      title: "GOALS",
      icon: <Target size={32} strokeWidth={1.5} />,
      text: "Clear objectives aligned with business growth.",
      angle: 140,
      x: 0,
      y: 210,
    },
    {
      title: "INNOVATION",
      icon: <Lightbulb size={32} strokeWidth={1.5} />,
      text: "Ideas that reshape industries and possibilities.",
      angle: -140,
      x: -220,
      y: 120,
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
      <div className="wheel-container">
        <h2>Core values</h2>
        {/* Arc segments */}
        {segments.map((s, i) => (
          <React.Fragment key={i}>
            {/* Text outside */}
            <div
              className="outside-text"
              style={{
                transform: `translate(${s.x}px, ${s.y}px)`,
              }}
            >
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
            <div className="case-preview-content">
              <span className="case-label">CASE STUDY</span>
              <h3 className="case-preview-title">Digital Transformation Success</h3>
              <p className="case-preview-desc">
                Discover how we helped a leading organization modernize their systems, 
                improve efficiency, and drive innovation through cutting-edge technology solutions.
              </p>
              <button 
                onClick={() => window.location.href = '/case-studies'} 
                className="btn case-link-btn"
              >
                View Case Studies <ArrowRight className="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT CTA ===================== */}
      <section id="contact" className="contact-section">
        <div className="contact-cta-content">
          <h2 className="contact-cta-title">Ready to Transform Your Business?</h2>
          <p className="contact-cta-text">
            Let's build something strong together. Contact us today to discover how
            we can elevate your business with innovative IT solutions.
          </p>
          <div className="contact-buttons">
            <button 
              onClick={() => window.location.href = '/contact'} 
              className="btn contact-btn primary"
            >
              Get Started <ChevronRight className="icon" />
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="btn contact-btn secondary"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column footer-brand">
           <img src="/assets/logo.png" alt="Two Elephants" className="footer-logo-img" />

            <h3 className="footer-logo">Two Elephants</h3>
            <p className="footer-desc">Advanced digital engineering solutions and IT services for enterprises worldwide.</p>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/career">Careers</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Our Services</h4>
            <ul className="footer-menu">
              <li><a href="/services">Web Development</a></li>
              <li><a href="/services">Mobile Apps</a></li>
              <li><a href="/services">Cloud Services</a></li>
              <li><a href="/services">IT Consulting</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Contact Us</h4>
            <p className="footer-contact"><strong></strong><br />Your Office Address</p>
            <p className="footer-contact"><strong></strong><br />info@twoelephants.com</p>
            <p className="footer-contact"><strong></strong><br />www.twoelephants.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Two Elephants. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
