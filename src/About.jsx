import React from 'react';
import './About.css'; // Optional for styling
import DoubleDegree from './assets/Double_Degree_Logo.jpg';

const About = () => {
  return (
    <section id="about">
      <h2 className="about-heading">About Me</h2>

      <div className="about-grid">
        <div className="about-left">
          <h3 className="about-name">Hey there! I'm Axel,</h3>

          <p className="about-blurb">
            I'm a software developer who loves building clean, maintainable applications and
            learning about cutting edge technology. I have experience developing frontend applications
            (such as this app) and I have extensive professional experience in software test
            development and automation including UI, database, and API testing.
            Another one of my passions is diving into data and analytics
            to extract insights and using it to drive strategic decision-making.
          </p>
        </div>

        <div className="about-center">
          <div className="education">
            <h3>Education</h3>
            <p>I studied <strong>Computer Science</strong> at the University of Waterloo and
            <strong> Business Administration</strong> at Wilfrid Laurier University. My educational
            background has equipped me with a practical, user-focused approach to solving real-world problems.</p>
          </div>

          <div className="dd-wrap" aria-hidden>
            <img src={DoubleDegree} alt="Double Degree logo" className="dd-logo" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-skills">
            <h3 className="skills-heading">My Professional Skills</h3>
            <ul className="skill-details">
              <li className="skill-item">Strong background in API development/testing, front-end engineering with React, and CI/CD automation.</li>
              <li className="skill-item">Writing clean, testable code and collaborating in Agile, production-level environments.</li>
            </ul>

            <h4 className="languages-heading">Languages, Frameworks, and Libraries</h4>
            <ul className="language-list">
              <li>Java, C++, Python, SQL, JavaScript, Kotlin, Visual Basic.</li>
              <li>React, Rest Assured, Selenium.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;