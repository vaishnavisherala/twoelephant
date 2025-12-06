import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* HEADER */}
      <section className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We are here to support you with strength, care, and honesty.
        </p>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="contact-section">

        <div className="contact-grid">

          {/* LEFT: CONTACT DETAILS */}
          <div className="contact-info">
            <h2>Get in Touch</h2>

            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>📧 Email:</strong> contact@twoelephants.com</p>
            <p><strong>📍 Address:</strong></p>
            <p>
              Two Elephants Pvt. Ltd.<br />
              Near WIT solapur,<br />
              India – 413005
            </p>

            <h3>Working Hours:</h3>
            <p>Mon – Sat : 10:00 AM – 6:00 PM</p>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <form className="contact-form">
            <label>
              Full Name
              <input type="text" placeholder="Enter your name" required />
            </label>

            <label>
              Email
              <input type="email" placeholder="Enter your email" required />
            </label>

            <label>
              Phone Number
              <input type="text" placeholder="Enter your phone number" />
            </label>

            <label>
              Message
              <textarea placeholder="Write your message..." rows="5"></textarea>
            </label>

            <button type="submit" className="btn contact-btn">Submit</button>
          </form>

        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="map-section">
        <h2 className="section-title">Find Us on the Map</h2>

        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.02404920515!2d77.350737!3d12.954294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f1a662fb%3A0xdeb6d461c9c37b4!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
