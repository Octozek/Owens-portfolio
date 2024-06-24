import React from 'react';
import '../index.css'; // Ensure the correct path

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="profile-container">
        <img src="/src/assets/images/My-profile.JPG" alt="Ezekiel Owens" className="profile-img" />
        <p className="about-description">Hello, I'm Ezekiel Owens, a passionate web developer with experience in building single-page applications using modern technologies. I enjoy creating dynamic and responsive websites that provide a great user experience.</p>
      </div>
    </section>
  );
}

export default AboutMe;
