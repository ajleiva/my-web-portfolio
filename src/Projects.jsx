import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'My Web Portfolio',
    date: '2025',
    bullets: [
      'Developed my web portfolio with React and Vite, showcasing coding projects and professional working experience.',
      'Implemented a responsive design and accessible navigation for both web and mobile.'
    ],
  },
  {
    title: 'Android Workout App',
    date: '2024',
    bullets: [
      'Developed an Android workout app called Swolebro in Kotlin using Jetpack Compose as part of a mobile development project for CS 346 UW with a group of 3 other students.',
      'Applied Model-View-ViewModel (MVVM) to separate UI components from backend logic.',
      'Developed the app in IntelliJ and built the project with Gradle to automate tests and dependencies.'
    ],
  },
  {
    title: 'Android Planner App',
    date: '2024',
    bullets: [
      'Developed an Android planner app in Kotlin as part of a mobile development project for CS 446 UW with a group of 4 other students.',
      'Applied Model-View-ViewModel (MVVM) and implemented the Observer and Facade design patterns to separate UI components from backend logic.',
      'Implemented Client-Server and Data-Centered architecture to connect the app to a RESTful API and a PostgreSQL database.',
    ],
  },
];

function ProjectCard({ title, date, bullets, position }) {
  return (
    <div className={`projects-item ${position}`}>
      <div className="projects-content">
        <span className="projects-date">{date}</span>
        <h3>{title}</h3>
        <ul className="projects-details">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            date={p.date}
            bullets={p.bullets}
            position={i % 2 === 0 ? 'left' : 'left'}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;