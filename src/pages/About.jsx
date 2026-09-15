import React from "react";

function About() {
  return (
    <section className="page simple-page">
      <span className="tag">📖 About Us</span>

      <h1>About Student Hub</h1>

      <p>
        Student Hub is a simple React website made for students. It helps
        students learn basic React concepts in an easy and interesting way.
      </p>

      <div className="info-box">
        🎓 Our goal is to make learning React simple, colorful and easy to
        understand.
      </div>

      <div className="cards">
        <div className="card">
          <div className="icon">📚</div>
          <h3>Easy Learning</h3>
          <p>Learn React with simple pages, components and examples.</p>
        </div>

        <div className="card">
          <div className="icon">⚛️</div>
          <h3>React Practice</h3>
          <p>Practice React Router and reusable components.</p>
        </div>

        <div className="card">
          <div className="icon">🚀</div>
          <h3>Build Projects</h3>
          <p>Create simple and useful projects for your studies.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
