import React from 'react';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p className="resume-message">
        My resume is currently being updated with the latest information from my current job. It will be available soon.
      </p>
      <a href="#" className="download-resume" onClick={(e) => e.preventDefault()}>
        Download Resume (Coming Soon)
      </a>
      <h3>Front-end Proficiencies</h3>
      <ul className="proficiency-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul className="proficiency-list">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>REST</li>
        <li>GraphQL</li>
        <li>Blender</li>
      </ul>
    </section>
  );
}

export default Resume;
