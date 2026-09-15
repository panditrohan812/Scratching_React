import React, { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="page contact-page">
      <div className="section-title">
        <span className="tag">💬 Contact Us</span>

        <h1>Get in Touch</h1>

        <p>Have a question or suggestion? Send us a message.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" placeholder="Enter your name" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="Enter your email" required />
        </label>

        <label>
          Subject
          <input type="text" placeholder="Enter subject" required />
        </label>

        <label>
          Message
          <textarea
            placeholder="Write your message"
            rows="5"
            required
          ></textarea>
        </label>

        <button className="button" type="submit">
          Send Message 📩
        </button>

        {sent && (
          <p className="success">
            Message sent successfully! Thank you for contacting us. ✅
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
