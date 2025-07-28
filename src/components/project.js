const projects = [
  {
    title: "Word2Vec Skip-gram with CUDA",
    description: "C++ and CUDA-based implementation achieving up to 130× GPU speedup. Benchmarked across multiple datasets.",
    tech: ["C++", "CUDA", "OpenMP"],
    github: "https://github.com/aghaSaqlain-dev/word2vec-cuda",
  },
  {
    title: "AWS Infra with Terraform",
    description: "Modular, secure AWS infra with Terraform, RDS, EC2, Docker & SSL. Deployed real-time dashboard tools.",
    tech: ["Terraform", "AWS", "Node.js", "Docker"],
  },
  {
    title: "Online Game Store",
    description: "React, Node.js, PostgreSQL-based full-stack app for game buying, renting, and selling.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Chef’s Book",
    description: "Flutter app with Riverpod & Node backend to browse and save 1000+ global recipes.",
    tech: ["Flutter", "Node.js", "MongoDB"],
  },
];

const Projects = () => (
  <section className="projects">
    <h2 className="section-title">Projects</h2>
    <div className="project-grid">
      {projects.map((project, i) => (
        <div key={i} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">View Code →</a>}
        </div>
      ))}
    </div>
  </section>
);
export default Projects;