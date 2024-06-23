import React from 'react';
import PropTypes from 'prop-types';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
