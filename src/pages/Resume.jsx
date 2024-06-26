import React from 'react';

function Resume() {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p>
        My resume is currently being updated. I am awaiting information from my current job.
      </p>
      <a href="/resume.pdf" className="download-resume" download>
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      <div className="proficiencies">
        <div className="proficiency-category">
          <h4>Front-end Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="proficiency-category">
          <h4>Back-end Proficiencies</h4>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
