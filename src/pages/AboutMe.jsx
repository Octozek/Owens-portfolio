import React from 'react';
import '../index.css';

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="profile-container">
        <img src="/assets/images/My-profile.JPG" alt="Ezekiel Owens" className="profile-img" />
        <p className="about-description">
          Hello, I'm Ezekiel Caleb Owens, a dedicated full-stack developer with a passion for building dynamic and responsive single-page applications. From a young age, I've been fascinated by coding, and I am thrilled to have turned this passion into my profession. 
        </p>
        <p className="about-description">
          I take pride in my ability to create user-friendly websites that offer excellent user experiences. With a solid foundation in both front-end and back-end technologies, I am skilled in delivering comprehensive web solutions. 
        </p>
        <p className="about-description">
          Beyond my technical skills, I am known for my genuine and kind nature. I excel in both team environments and independent projects, always striving to foster positive and productive collaborations. Originally from Chester, Illinois, the home of Popeye, I bring a unique perspective and work ethic to every project. 
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
