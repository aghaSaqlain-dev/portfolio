import React, { useEffect } from 'react';
import './Projects.css';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: "Word2Vec Skip-gram with CUDA",
    description: "Implemented Word2Vec (Skip-gram with negative sampling) in C++ and CUDA, achieving up to 130× speedup over single-core and 28× over multi-core CPU implementations.",
    tech: ["C++", "CUDA", "OpenMP"],
    highlights: [
      "130× speedup over single-core implementation",
      "Leveraged OpenMP for multi-threaded CPU training",
      "CUDA GPU parallelization with shared memory optimization",
      "Benchmarked across various embedding and window sizes"
    ],
    github: "https://github.com/aghaSaqlain-dev/word2vec",
  },
  {
    title: "Scalable AWS Infrastructure with Terraform",
    description: "Designed and deployed a modular, secure, and containerized AWS environment using Terraform, featuring Auto Scaling EC2 instances with comprehensive infrastructure setup.",
    tech: ["Terraform", "AWS", "Docker", "Node.js", "MySQL", "PostgreSQL"],
    highlights: [
      "Auto Scaling group of EC2 instances running Nginx, Docker, Node.js",
      "Private RDS instances with SSH tunneling access",
      "Application Load Balancer with HTTPS and SSL via AWS ACM",
      "Multi-stage Dockerized web apps with BI tools integration"
    ],
    github: "https://github.com/aghaSaqlain-dev/devops_final_project"
  },
  {
    title: "Online Game Store",
    description: "Developed a full-stack web application for buying, renting, and selling games with secure transaction processing and optimized database operations.",
    tech: ["React", "Node.js", "PostgreSQL", "RESTful APIs"],
    highlights: [
      "Complete e-commerce functionality for game marketplace",
      "Integrated RESTful APIs for seamless frontend-backend communication",
      "Implemented transactional queries for secure database operations",
      "Optimized database queries for improved performance"
    ],
    github: "https://github.com/aghaSaqlain-dev/online-game-store-databaseproject"
  },
  {
    title: "Chef's Book Mobile App",
    description: "Developed a Flutter mobile application with advanced state management, allowing users to explore and manage recipes across 20+ global cuisines.",
    tech: ["Flutter", "Dart", "Riverpod", "Node.js", "MongoDB"],
    highlights: [
      "Browse, filter, and favorite recipes across 20+ global cuisines",
      "Riverpod state management for efficient app performance",
      "Scalable Node.js (MVC) backend with MongoDB Atlas",
      "Real-time updates and cloud-based storage for 1,000+ recipes"
    ],
    github: "https://github.com/aghaSaqlain-dev/chefs_book"
  },
];

const Projects = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 });
  const [visibleProjects, startProjectAnimation] = useStaggeredAnimation(projects.length, 200);

  useEffect(() => {
    if (sectionVisible) {
      startProjectAnimation();
    }
  }, [sectionVisible, startProjectAnimation]);

  return (
    <section className={`projects section-animated ${sectionVisible ? 'visible' : ''}`} id="projects" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title fade-in-up ${sectionVisible ? 'visible' : ''}`}>
          Projects & Research Work
        </h2>
        <div className="project-grid">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className={`project-card stagger-item ${visibleProjects.has(i) ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              {project.github && (
                <a 
                  href={project.github} 
                  className="project-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View project on GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            
            <div className="project-highlights">
              <h4>Key Achievements:</h4>
              <ul>
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Projects;
