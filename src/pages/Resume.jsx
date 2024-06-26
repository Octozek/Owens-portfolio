import React from 'react';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <a href="//resume.pdf" className="download-resume" download>
        Download Resume
      </a>
      <div className="proficiency-section">
        <h3>Front-end Proficiencies</h3>
        <ul className="proficiency-list">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="proficiency-section">
        <h3>Back-end Proficiencies</h3>
        <ul className="proficiency-list">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
