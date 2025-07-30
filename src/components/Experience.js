import './Experience.css';

const experiences = [
  {
    company: "Plural Dynamics",
    position: "Frontend Intern",
    duration: "Mar 2025 - Apr 2025",
    description: "Contributed to an accessible React web app for students with visual and hearing impairments, enhancing UI design and user experience.",
    achievements: [
      "Implemented 15+ RESTful API integrations with seamless data flow",
      "Leveraged Redux for efficient state management across the application",
      "Worked closely with cross-functional teams to enhance UI responsiveness",
      "Ensured seamless API communication and error handling"
    ],
    skills: ["React", "Redux", "RESTful APIs", "UI/UX Design", "Accessibility"]
  }
];

const leadership = [
  {
    title: "Chief Finance Officer - Mess Committee",
    organization: "IBA Karachi",
    duration: "Sept 2024 - Jun 2025",
    description: "Managed financial operations for a mess serving 450+ students, ensuring transparency and efficiency in operations.",
    achievements: [
      "Managed financial operations for 450+ students with full transparency",
      "Introduced a mess portal app to streamline payments and reduce delays",
      "Improved cash flow management and operational efficiency",
      "Gained practical experience in operations management and financial planning"
    ]
  },
  {
    title: "Vice President - IBA Student Government",
    organization: "IBA Karachi",
    duration: "Sept 2023 - Jul 2024",
    description: "Engaged with Executive Director and Deans Council, effectively advocating for student concerns and proposing viable solutions.",
    achievements: [
      "Participated in 5+ meetings with Executive Director and Deans Council",
      "Successfully advocated for student concerns and proposed viable solutions",
      "Led security and external relations for Freshman Welcome event",
      "Managed a team of 30 individuals for 2000+ attendees event"
    ]
  }
];

const Experience = () => (
  <section className="experience" id="experience">
    <div className="container">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="experience-section">
        <h3 className="subsection-title">Work Experience</h3>
        <div className="experience-grid">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-card">
              <div className="experience-header">
                <div className="experience-info">
                  <h4 className="experience-position">{exp.position}</h4>
                  <h5 className="experience-company">{exp.company}</h5>
                  <p className="experience-duration">{exp.duration}</p>
                </div>
                <div className="experience-icon">
                  💼
                </div>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <div className="experience-achievements">
                <h6>Key Achievements:</h6>
                <ul>
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="experience-skills">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-section">
        <h3 className="subsection-title">Leadership & Extracurricular</h3>
        <div className="leadership-grid">
          {leadership.map((role, i) => (
            <div key={i} className="leadership-card">
              <div className="leadership-header">
                <div className="leadership-info">
                  <h4 className="leadership-title">{role.title}</h4>
                  <h5 className="leadership-organization">{role.organization}</h5>
                  <p className="leadership-duration">{role.duration}</p>
                </div>
                <div className="leadership-icon">
                  👥
                </div>
              </div>
              
              <p className="leadership-description">{role.description}</p>
              
              <div className="leadership-achievements">
                <h6>Key Accomplishments:</h6>
                <ul>
                  {role.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
