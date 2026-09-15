const services = [
  ["📚", "Study Resources", "Simple sections for learning and practice."],
  ["⚛️", "React Practice", "Components, props and routing in one project."],
  ["🎨", "Clean UI", "A colorful interface using basic CSS."],
  ["🚀", "Mini Projects", "A good base for your next student project."],
];

import React from "react";

function Services() {
  return (
    <section className="page">
      <div className="section-title">
        <span className="tag">🛠️ Services</span>

        <h1>Our Services</h1>

        <p>Student Hub provides simple learning features for students.</p>
      </div>

      <div className="cards services-grid">
        <div className="card">
          <div className="icon">📚</div>
          <h3>Study Resources</h3>
          <p>
            Find simple study material and useful learning resources for your
            projects.
          </p>
        </div>

        <div className="card">
          <div className="icon">⚛️</div>
          <h3>React Learning</h3>
          <p>Learn basic React concepts like components, pages and routing.</p>
        </div>

        <div className="card">
          <div className="icon">🎨</div>
          <h3>UI Design</h3>
          <p>Create colorful and attractive websites using basic CSS.</p>
        </div>

        <div className="card">
          <div className="icon">💻</div>
          <h3>Project Practice</h3>
          <p>Practice your coding skills by creating small React projects.</p>
        </div>

        <div className="card">
          <div className="icon">🚀</div>
          <h3>Mini Projects</h3>
          <p>
            Build simple projects that can be used for college assignments and
            practice.
          </p>
        </div>

        <div className="card">
          <div className="icon">🎓</div>
          <h3>Student Support</h3>
          <p>
            Get a simple project structure that is easy to understand and
            explain.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
