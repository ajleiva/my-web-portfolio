import React from 'react';
import './About.css'; // Optional for styling
import DoubleDegree from './assets/Double_Degree_Logo.jpg';

const About = () => {
  return (
    <section id="about">
      <h2 className="about-heading">About Me</h2>

      <div className="about-grid">
        <div className="about-left">
          <h3 className="about-name">Hey there! I'm Axel</h3>

          <p className="about-blurb">
            I am a software developer who loves building clean, maintainable applications and
            learning new and emerging tech. I have experience developing frontend applications
            such as this app that you are currently exploring right now! I have extensive
            professional experience in software test development and automation including frontend,
            database, and API testing. I also love diving into data and analytics to extract
            insights and to use it to drive strategic decision-making.
          </p>
        </div>

        <div className="about-center">
          <div className="education">
            <h3>Education</h3>
            <p>I studied <strong>Computer Science</strong> at the University of Waterloo and
            <strong> Business Administration</strong> at Wilfrid Laurier University, which has
            equipped me a unique blend of technical and business acumen.</p>
          </div>

          <div className="dd-wrap" aria-hidden>
            <img src={DoubleDegree} alt="Double Degree logo" className="dd-logo" />
          </div>
        </div>

        <div className="about-right">
          <h3>My Professional Skills</h3>
          <ul className="skills-list">
            <li>Frontend Development</li>
            <li>Testing & Automation</li>
            <li>Backend / APIs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;