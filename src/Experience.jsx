import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Software Development Engineer in Test",
    company: "CGI – Toronto, Ontario (Hybrid)",
    date: "Oct. 2024 – Present",
    bullets: [
      "Designed and implemented Java-based automation services validating RESTful APIs and UI workflows for banking applications, increasing functional coverage by 95% and improving release stability.",
      "Built API-level validation logic using Rest Assured to test GET/POST/PUT requests, ensuring correct business logic execution and reducing regression defects before deploying to production.",
      "Developed SQL-based data validation layers to verify consistency across application UI, relational databases, and backend services, strengthening end-to-end system reliability.",
      "Integrated automated tests into Jenkins CI/CD pipelines to continuously validate backend services.",
      "Worked in an Agile, production-level environment and delivered presentations to product owners, developers, and business analysts in business reviews to highlight regression and functional testing results before deploying to production."
    ],
  },
  {
    role: "Software Development Engineer in Test Co-op",
    company: "TD – Toronto, Ontario (Hybrid)",
    date: "Sept. 2023 – Dec. 2023",
    bullets: [
      "Developed Java-based API health checks using Rest Assured and automated UI regression tests with Selenium to validate end-to-end banking workflows.",
      "Integrated Applitools AI-powered visual testing into the automation framework to enhance UI testing efficiency.",
    ],
  },
  {
    role: "Software Development Engineer in Test Co-op",
    company: "TD – Toronto, Ontario (Hybrid)",
    date: "Sept. 2022 – Dec. 2022",
    bullets: [
      "Built and maintained 50+ automated UI regression tests in Java and Selenium, improving regression coverage and increasing testing efficiency by 130%.",
      "Refactored and optimized existing automation scripts to improve performance, maintainability, and long-term reliability of the test framework.",
    ],
  },
  {
    role: "Business Analyst Co-op",
    company: "RBC – Toronto, Ontario (Remote)",
    date: "Jan. 2022 – Apr. 2022",
    bullets: [
      "Managed the overall development of a new automated dashboard in Tableau, and utilized SQL and Excel to conduct data analysis on various datasets and databases to create mockup designs for the dashboard.",
      "Automated a monthly email using Python and performed data analysis using Python, SQL, and Excel on financial datasets to support KPI analysis.",
      "Developed structured analytical reports and metrics used in the Technology & Operations Quarterly Business Review, supporting strategic planning and executive decision-making, including RBC’s CEO.",
    ],
  },
  {
    role: "Digital Analytics Engineer Co-op",
    company: "Loblaw Digital – Toronto, Ontario (Remote)",
    date: "Jan. 2021 – Apr. 2021",
    bullets: [
      "Collaborated on a project that impacted all Canadians: Loblaw’s COVID-19 vaccine scheduling web app. Designed and implemented event-based analytics using Google Analytics (GA4 & Universal Analytics) within a React application, enabling structured collection of user interaction data across key product flows.",
      "Built analytics dashboards to visualize insights on user behavior, engagement, and conversion metrics and to drive strategic decision-making.",
      "Gathered business requirements and built technical documents with code specs outlining analytics implementation requirements for a Java mobile project and a React web app.",
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