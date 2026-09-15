import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page">
      <div className="hero">
        <div>
          <span className="tag">✨ Student Friendly Project</span>
          <h1>Welcome to <span>Student Hub</span></h1>
          <p>Learn, build and explore with a simple React project using components and routing.</p>
          <Link className="button" to="/services">Explore Now →</Link>
        </div>
        <div className="hero-card">
          <div>⚛️</div>
          <strong>React + Router</strong>
          <small>Simple. Colorful. Easy to understand.</small>
        </div>
      </div>

      <div className="section-title">
        <h2>What We Offer</h2>
        <p>Small features that are perfect for a student project.</p>
      </div>

      <div className="cards">
        <div className="card"><div className="icon">📚</div><h3>Learn</h3><p>Practice React concepts with simple pages and components.</p></div>
        <div className="card"><div className="icon">⚛️</div><h3>React</h3><p>Use reusable components and React Router navigation.</p></div>
        <div className="card"><div className="icon">🚀</div><h3>Projects</h3><p>Build a clean project that is easy to explain in a viva.</p></div>
      </div>
    </section>
  );
}

export default Home;