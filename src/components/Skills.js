import './Skills.css';

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Java", level: 90 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Dart", level: 80 },
      { name: "Python", level: 75 },
    ]
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "HTML/CSS", level: 92 },
      { name: "Redux", level: 80 },
      { name: "Responsive Design", level: 88 },
    ]
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "RESTful APIs", level: 88 },
      { name: "Express.js", level: 80 },
      { name: "MVC Architecture", level: 82 },
    ]
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Oracle", level: 75 },
      { name: "MySQL", level: 78 },
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 82 },
      { name: "Docker", level: 85 },
      { name: "Terraform", level: 80 },
      { name: "Load Balancing", level: 75 },
    ]
  },
  {
    category: "High Performance Computing",
    icon: "🚀",
    skills: [
      { name: "CUDA", level: 85 },
      { name: "OpenMP", level: 80 },
      { name: "Parallel Computing", level: 82 },
      { name: "GPU Programming", level: 78 },
    ]
  }
];

const certifications = [
  {
    title: "Getting started with Accelerated Computing in Modern CUDA C++",
    issuer: "NVIDIA",
    icon: "🏅"
  },
  {
    title: "Flutter & Dart - The Complete Guide",
    issuer: "Udemy",
    icon: "📱"
  },
  {
    title: "Backend Development and APIs Certification",
    issuer: "freeCodeCamp",
    icon: "⚡"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    icon: "🎨"
  }
];

const education = {
  degree: "BS Computer Science",
  institution: "Institute of Business Administration Karachi",
  duration: "Aug 2022 - May 2026",
  description: "Comprehensive computer science program focusing on software engineering, algorithms, and modern development practices."
};

const Skills = () => (
  <section className="skills" id="skills">
    <div className="container">
      <h2 className="section-title">Skills & Education</h2>
      
      {/* Education Section */}
      <div className="education-section">
        <h3 className="subsection-title">Education</h3>
        <div className="education-card">
          <div className="education-header">
            <div className="education-info">
              <h4 className="education-degree">{education.degree}</h4>
              <h5 className="education-institution">{education.institution}</h5>
              <p className="education-duration">{education.duration}</p>
            </div>
            <div className="education-icon">🎓</div>
          </div>
          <p className="education-description">{education.description}</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h3 className="subsection-title">Technical Skills</h3>
        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <div key={i} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h4 className="category-title">{category.category}</h4>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications-section">
        <h3 className="subsection-title">Certifications</h3>
        <div className="certifications-grid">
          {certifications.map((cert, i) => (
            <div key={i} className="certification-card">
              <div className="cert-icon">{cert.icon}</div>
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div className="languages-section">
        <h3 className="subsection-title">Languages</h3>
        <div className="languages-grid">
          <div className="language-item">
            <span className="language-name">Hazaragi</span>
            <span className="language-level">Native</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="language-level">Fluent</span>
          </div>
          <div className="language-item">
            <span className="language-name">Persian</span>
            <span className="language-level">Basic</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
