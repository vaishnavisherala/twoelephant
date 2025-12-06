import React from "react";
import { Code, Smartphone, Layout, Cloud, Cpu, Lightbulb, MonitorCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code size={48} />,
      title: "Web Development",
      description:
        "Modern, scalable, and secure web applications built using the latest technologies and best industry standards.",
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile App Development",
      description:
        "High-performance Android and iOS applications designed for seamless user experience and reliability.",
    },
    {
      icon: <MonitorCheck size={48} />,
      title: "Software Solutions",
      description:
        "Custom software tailored to your business needs, improving efficiency, automation, and productivity.",
    },
    {
      icon: <Layout size={48} />,
      title: "UI / UX Design",
      description:
        "Clean, intuitive, and user-friendly interface designs that elevate digital experiences.",
    },
    {
      icon: <Cpu size={48} />,
      title: "AI & Machine Learning",
      description:
        "Intelligent automation, predictive models, analytics, and AI-powered solutions to drive innovation.",
    },
    {
      icon: <Lightbulb size={48} />,
      title: "IT Consulting",
      description:
        "Expert guidance in technology strategy, digital transformation, business optimization, and system integration.",
    },
    {
      icon: <Cloud size={48} />,
      title: "Cloud Services",
      description:
        "Cloud migration, DevOps support, infrastructure setup, and scalable cloud-based solutions.",
    },
  ];

  return (
    <div className="services-page">

      <section className="services-header">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          Empowering businesses with powerful, scalable, and innovative technology solutions.
        </p>
      </section>

      <section className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
