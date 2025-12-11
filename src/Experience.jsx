import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Software Development Engineer in Test",
    company: "CGI – Toronto, Ontario (Hybrid)",
    date: "Oct. 2024 – Present",
    bullets: [
      "Developed 1400 automated regression tests in Java, Rest Assured, and Selenium for REST API and UI validations, improving coverage by 95% and reducing manual testing efforts by 99%.",
      "Developed SQL queries to validate data integrity across UI, database, and POST/PUT API requests.",
      "Built and integrated automation pipelines with Jenkins CI/CD for continuous testing.",
    ],
  },
  {
    role: "Software Development Engineer in Test Co-op",
    company: "TD – Toronto, Ontario (Hybrid)",
    date: "Sept. 2023 – Dec. 2023",
    bullets: [
      "Developed 2 automated API health checks in Java and Rest Assured and 65 automated UI regression tests in Java and Selenium, increasing testing efficiency by 130%.",
      "Leveraged Applitools AI in automation framework to increase UI test efficiency.",
    ],
  },
  {
    role: "Software Development Engineer in Test Co-op",
    company: "TD – Toronto, Ontario (Hybrid)",
    date: "Sept. 2022 – Dec. 2022",
    bullets: [
      "Developed 2 automated API health checks in Java and Rest Assured and 65 automated UI regression tests in Java and Selenium, increasing testing efficiency by 130%.",
      "Leveraged Applitools AI in automation framework to increase UI test efficiency.",
    ],
  },
  {
    role: "Business Analyst Co-op",
    company: "RBC – Toronto, Ontario (Remote)",
    date: "Jan. 2022 – Apr. 2022",
    bullets: [
      "Conducted data analysis using Python, SQL, and Excel on various datasets, including KPI analysis.",
      "Delivered actionable insights and analysis for the T&O Quarterly Business Review, guiding strategic decisions for high-ranking executives, including RBC’s CEO.",
    ],
  },
  {
    role: "Digital Analytics Engineer Co-op",
    company: "Loblaw Digital – Toronto, Ontario (Remote)",
    date: "Jan. 2021 – Apr. 2021",
    bullets: [
      "Implemented GA4 and UA analytics into React framework with software engineers.",
      "Created dashboards in Google Analytics to highlight key insights from user behaviour data.",
    ],
  },
];

// Reusable Timeline Card
function TimelineCard({ role, company, date, bullets, position }) {
  return (
    <div className={`timeline-item ${position}`}>
      <div className="timeline-dot" />
      <div className="timeline-content">
        <span className="timeline-date">{date}</span>
        <h3>{role}</h3>
        <p className="company">{company}</p>
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const ExperienceCard = ({ role, company, date, bullets, position }) => {
  return (
    <div className={`experience-item ${position}`}>
      <div className="experience-header">
        <h3>{role}</h3>
        <span className="company">{company}</span>
        <span className="date">{date}</span>
      </div>
      <ul className="experience-details">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
};

// Main Experience Component
/*const Experience = () => {
  return (
    <section id="experience">
      <div className="experience">
        <h1>Experience</h1>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <TimelineCard
              key={i}
              {...exp}
              position={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};*/

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={i}
            role={exp.role}
            company={exp.company}
            date={exp.date}
            bullets={exp.bullets}
            position={i % 2 === 0 ? "left" : "left"}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;