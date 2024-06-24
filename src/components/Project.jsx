import React from 'react';
import PropTypes from 'prop-types';

function Project({ image, repoLink, websiteLink, repoName, websiteName }) {
  return (
    <div className="project">
      <img src={image} alt={repoName} />
      <div className="overlay">
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
          <i className="fab fa-github"></i> {repoName}
        </a>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="website-link">
          {websiteName}
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  websiteLink: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  websiteName: PropTypes.string.isRequired,
};

export default Project;
