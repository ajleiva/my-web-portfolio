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
            to extract insights and to use it to drive strategic decision-making.
          </p>
        </div>

        <div className="about-center">
          <div className="education">
            <h3>Education</h3>
            <p>I studied <strong>Computer Science</strong> at the University of Waterloo and
            <strong> Business Administration</strong> at Wilfrid Laurier University, which has
            equipped me with a unique blend of technical and business expertise.</p>
          </div>

          <div className="dd-wrap" aria-hidden>
            <img src={DoubleDegree} alt="Double Degree logo" className="dd-logo" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-skills">
            <h3 className="skills-heading">My Professional Skills</h3>
            <ul className="skill-details">
              <li className="skill-item">Frontend Development — responsive, accessible UIs</li>
              <li className="skill-item">Testing & Automation — unit, integration and E2E testing</li>
              <li className="skill-item">Backend / APIs — RESTful services and integration</li>
            </ul>

            <h4 className="languages-heading">Programming Languages</h4>
            <ul className="language-list">
              <li>JavaScript / TypeScript</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;