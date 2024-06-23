import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'my imgpath.jpg',
      deployedLink: 'https://deployedlink1.com',
      githubLink: 'https://github.com/Octozek/project1'
    },
    // Add five more projects similarly
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
