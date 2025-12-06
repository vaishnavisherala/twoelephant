import React from "react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Education Management System",
      problem:
        "The client struggled with manual student tracking, inefficient communication, and outdated academic workflows.",
      solution:
        "We developed a complete web-based ERP system for attendance, fees, communication, and performance tracking.",
      techStack: ["React", "Node.js", "MongoDB", "AWS", "Figma"],
      impact:
        "Operational efficiency increased by 70%, communication improved, and academic tasks were automated.",
      images: [
        "/assets/case/edu1.png",
        "/assets/case/edu2.png"
      ]
    },
    {
      title: "Healthcare Patient Portal",
      problem:
        "Hospitals needed a secure digital system for patient appointments, reports, and medical history management.",
      solution:
        "We built a HIPAA-compliant patient portal with secure login, report downloads, appointment booking, and reminders.",
      techStack: ["Angular", "Express.js", "MySQL", "Azure", "Flutter"],
      impact:
        "Patient engagement grew by 55%, appointment no-shows reduced by 30%, and operational load decreased.",
      images: [
        "/assets/case/health1.png",
        "/assets/case/health2.png"
      ]
    },
    {
      title: "Retail E-Commerce Platform",
      problem:
        "Retail brand needed a scalable online store with inventory tracking, offers, and personalized suggestions.",
      solution:
        "We delivered a full e-commerce platform with admin panel, product catalog, secure payments, and real-time inventory.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      impact:
        "Online sales increased by 120% within 6 months, with 40% repeat customer rate.",
      images: [
        "/assets/case/retail1.png",
        "/assets/case/retail2.png"
      ]
    }
  ];

  return (
    <div className="case-page">

      {/* HEADER */}
      <section className="case-header">
        <h1 className="case-title">Case Studies & Portfolio</h1>
        <p className="case-subtitle">
          Real-world success stories powered by innovation, technology, and our commitment to excellence.
        </p>
      </section>

      {/* CASE STUDIES LIST */}
      <section className="case-section">
        {caseStudies.map((study, index) => (
          <div className="case-card" key={index}>
            <h2 className="case-card-title">{study.title}</h2>

            <div className="case-content">
              <div>
                <h3 className="case-label">Client Problem</h3>
                <p className="case-text">{study.problem}</p>

                <h3 className="case-label">Our Solution</h3>
                <p className="case-text">{study.solution}</p>

                <h3 className="case-label">Tech Stack</h3>
                <ul className="tech-list">
                  {study.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <h3 className="case-label">Output / Impact</h3>
                <p className="case-text">{study.impact}</p>
              </div>

              
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
