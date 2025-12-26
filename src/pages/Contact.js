import React, { useState } from "react";
import heroImg from "../images/img1.jpg";
import Footer from "../pages/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <div className="contact-page">

      {/* HEADER */}
      <section
        className="contact-header"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We are here to support you with strength, care, and honesty.
        </p>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p><strong>📞 Phone:</strong> +91 9175484351, 7249570505</p>
            <p><strong>📧 Email:</strong> support@twoelephants.org</p>

            <p><strong>📍 Address:</strong></p>
            <p>
              India: 30/70, Vivekanand House, Padma Nagar, <br/>Akkalkot Road, Solapur 
              - 413005
            </p>
            <p>
              USA: 2903 Rutherford Place Ct, Katy<br />
              Houston, TX – 77494
            </p>

            <h3>Working Hours</h3>
            <p>Mon – Sat : 10:00 AM – 6:00 PM</p>
          </div>

          {/* RIGHT: FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn contact-btn">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
