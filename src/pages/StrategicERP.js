import React from "react";
import "./StrategicERP.css";
import Footer from "./Footer";

export default function StrategicERP() {
  return (
    <div className="erp-page">

      {/* HERO */}
      <section className="erp-hero">
        <div className="erp-hero-content">
          <h1>Strategic ERP</h1>
          <h3>Manufacturing ERP for Textile Industry</h3>
          <p>
            Empowering textile manufacturers with intelligent, integrated ERP
            solutions to improve productivity, quality, and profitability.
          </p>
          
        </div>
      </section>

      {/* WHY ERP */}
      <section className="erp-section light">
        <h2>Why Manufacturing ERP?</h2>
        <p className="section-desc">
          StrategicERP simplifies complex manufacturing operations and empowers
          management with real-time insights, automation, and centralized control.
        </p>

        <div className="erp-grid">
          <div className="erp-card">
            <h4>Robust & Standardized Systems</h4>
            <p>Ensures consistency and process transparency across operations.</p>
          </div>
          <div className="erp-card">
            <h4>Increased Production Efficiency</h4>
            <p>Automated planning, BOM management, and scheduling.</p>
          </div>
          <div className="erp-card">
            <h4>Smart Vendor Management</h4>
            <p>Inventory intelligence and supplier optimization.</p>
          </div>
          <div className="erp-card">
            <h4>Cost Reduction & Profitability</h4>
            <p>Lower operational costs and improved margins.</p>
          </div>
        </div>
      </section>

      {/* TEXTILE FEATURES */}
      <section className="erp-section">
        <h2>ERP for Textile Manufacturing</h2>
        <p className="section-desc">
          Designed specifically for textile industry workflows and challenges.
        </p>

        <div className="erp-feature-grid">
          {[
            "Fabric Quality Control",
            "Dye Lot Management",
            "Yarn Inventory Tracking",
            "Machine Scheduling",
            "Batch & Roll Tracking",
            "Compliance & Export Management",
          ].map((item, i) => (
            <div className="erp-feature" key={i}>
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="erp-section light">
        <h2>Comprehensive ERP Modules</h2>

        <div className="erp-modules">
          <div className="module-box">
            <h4>Financial Management</h4>
            <ul>
              <li>General Ledger</li>
              <li>Accounts Payable & Receivable</li>
              <li>Invoicing</li>
              <li>Fixed Assets</li>
            </ul>
          </div>

          <div className="module-box">
            <h4>Warehouse & Inventory</h4>
            <ul>
              <li>Real-time Stock Tracking</li>
              <li>Batch & Lot Control</li>
              <li>Logistics & Dispatch Planning</li>
            </ul>
          </div>
        </div>
      </section>
          <Footer/>
    </div>
  );
}
