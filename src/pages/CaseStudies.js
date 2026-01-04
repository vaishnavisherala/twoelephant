import React from "react";
import Footer from "./Footer";
import bannerImg from "../images/edu.jpg";
import aiImg from "../images/img1.jpg"; // use any AI-related image

export default function CaseStudyAI() {
  return (
    <div className="case-detail-page">
      {/* ===================== HERO ===================== */}
      <section
        className="case-detail-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="case-detail-overlay" />
        <div className="case-detail-hero-content">
          <span className="case-tag">CASE STUDY</span>
          <h1>
            AI-Driven Computer Vision Solutions for Smart Surveillance &
            Automation
          </h1>
        </div>
      </section>

      {/* ===================== OVERVIEW ===================== */}
      <section className="case-section light-bg">
        <div className="case-container two-col">
          <div>
            <span className="case-tag green">AI SOLUTION</span>
            <h2>Empowering Intelligent Vision Systems</h2>
          </div>

          <div>
            <h3>OVERVIEW</h3>
            <p>
              Two Elephants designed and delivered an AI-powered computer vision
              platform to automate identity recognition, vehicle monitoring, and
              real-time surveillance across enterprise and public
              infrastructure environments.
            </p>
            <p>
              The solution leverages advanced machine learning and deep learning
              models to enable facial recognition, vehicle number plate
              detection, and behavior analysis with high accuracy and
              scalability.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CHALLENGES ===================== */}
      <section className="case-section">
        <div className="case-container">
          <h3>CHALLENGES</h3>
          <ul className="case-list">
            <li>
              Manual identity verification and monitoring processes leading to
              inefficiencies and security gaps.
            </li>
            <li>
              Difficulty in accurately identifying individuals and vehicles in
              real-time video streams.
            </li>
            <li>
              High false-positive rates in traditional surveillance systems.
            </li>
            <li>
              Need for scalable AI systems capable of processing large volumes
              of video data.
            </li>
          </ul>
        </div>
      </section>

      {/* ===================== SOLUTION ===================== */}
      <section className="case-section light-bg">
        <div className="case-container">
          <h3>SOLUTION IMPLEMENTED</h3>
          <ul className="case-list">
            <li>
              Developed AI-based Face Recognition systems using deep neural
              networks for accurate identity verification.
            </li>
            <li>
              Implemented Automatic Number Plate Recognition (ANPR) for vehicle
              detection and tracking.
            </li>
            <li>
              Enabled real-time video analytics for anomaly detection and
              behavioral insights.
            </li>
            <li>
              Integrated role-based dashboards for security teams and
              administrators.
            </li>
            <li>
              Deployed cloud-ready and edge-optimized AI models for scalability
              and low latency.
            </li>
          </ul>
        </div>
      </section>

      {/* ===================== TECHNOLOGIES ===================== */}
      <section className="case-section">
        <div className="case-container">
          <h3>TECHNOLOGIES USED</h3>
          <div className="case-tech">
            <span style={{fontSize:"18px"}}>Python</span>
            <span style={{fontSize:"18px"}}>OpenCV</span>
            <span style={{fontSize:"18px"}}>TensorFlow</span>
            <span style={{fontSize:"18px"}}>PyTorch</span>
            <span style={{fontSize:"18px"}}>YOLO</span>
            <span style={{fontSize:"18px"}}>Deep Learning</span>
            <span style={{fontSize:"18px"}}>Computer Vision</span>
            <span style={{fontSize:"18px"}}>AWS</span>
            <span style={{fontSize:"18px"}}>Edge AI</span>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
