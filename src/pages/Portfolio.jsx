import React from 'react';
import Project from '../components/Project';
import projects from '../projectsData'; // Adjust the path based on your project structure

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            image={project.image}
            repoLink={project.repoLink}
            websiteLink={project.websiteLink}
            repoName={project.repoName}
            websiteName={project.websiteName}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
