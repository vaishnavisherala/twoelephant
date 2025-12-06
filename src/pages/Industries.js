import React from "react";
import {
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Building2,
  Plane,
  Factory,
  Layers
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <GraduationCap size={48} />,
      title: "Education",
      description:
        "Smart digital solutions for institutes, e-learning platforms, online assessments, and student management.",
    },
    {
      icon: <Stethoscope size={48} />,
      title: "Healthcare",
      description:
        "AI-powered medical tools, patient management systems, and secure digital transformation for hospitals.",
    },
    {
      icon: <ShoppingBag size={48} />,
      title: "Retail",
      description:
        "E-commerce platforms, POS software, inventory systems, and customer engagement solutions.",
    },
    {
      icon: <Building2 size={48} />,
      title: "Real Estate",
      description:
        "Property listing portals, CRM systems, virtual tour integrations, and automated workflows.",
    },
    {
      icon: <Plane size={48} />,
      title: "Travel",
      description:
        "Booking engines, itinerary management, AI-based recommendation systems, and customer portals.",
    },
    {
      icon: <Factory size={48} />,
      title: "Manufacturing",
      description:
        "Automation tools, ERP systems, supply chain optimization, and IoT-enabled workflows.",
    },
    {
      icon: <Layers size={48} />,
      title: "Custom Industries",
      description:
        "We build tailor-made solutions for unique business needs across any industry.",
    },
  ];

  return (
    <div className="industries-page">

      {/* HEADER */}
      <section className="industries-header">
        <h1 className="industries-title">Industries We Serve</h1>
        <p className="industries-subtitle">
          Delivering technology solutions across multiple domains with precision, innovation, and trust.
        </p>
      </section>

      {/* GRID OF INDUSTRY CARDS */}
      <section className="industries-section">
        <div className="industries-grid">
          {industries.map((ind, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">{ind.icon}</div>
              <h3 className="industry-title">{ind.title}</h3>
              <p className="industry-desc">{ind.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
