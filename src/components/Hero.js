import './Hero.css';
import TechItem from './tech-item';
import { 
  SiPrisma, 
  SiReact, 
  SiTailwindcss, 
  SiVercel ,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiCplusplus,
  SiJavascript
} from 'react-icons/si';

const Hero = () => (
  <section className="hero">
    <p className="hero-welcome">
      Welcome to the <span className="highlight">web portfolio</span> of
    </p>
    <h1 className="hero-title">
      <span className="hero-name-first">Syed Muhammad</span>
      <span className="hero-name-last">Saqlain</span>
    </h1>
    <p className="hero-subtitle">
      SCROLL DOWN TO LEARN MORE ABOUT MY SKILLS & EXPERIENCES
    </p>
    
    {/* Tech stack icons */}
    <div className="hero-tech-stack">
      <TechItem icon={SiJavascript} name="JavaScript" />
      <TechItem icon={SiCplusplus} name="C++" />
      <TechItem icon={SiTypescript} name="TypeScript" />
      <TechItem icon={SiMongodb} name="MongoDB" />
      <TechItem icon={SiPostgresql} name="PostgreSQL" />
      <TechItem icon={SiNodedotjs} name="Node.js" />
      <TechItem icon={SiReact} name="React" />
      <TechItem icon={SiTailwindcss} name="Tailwind CSS" />
      <TechItem icon={SiVercel} name="Vercel" />  
      <TechItem icon={SiPrisma} name="Prisma" />
    </div>
    
    <div className="hero-buttons">
      <a href="mailto:aghasaqlain.dev@gmail.com" className="hero-button primary">Contact Me</a>
      <a href="https://github.com/aghaSaqlain-dev" target="_blank" rel="noopener noreferrer" className="hero-button secondary">Github</a>
    </div>
  </section>
);
export default Hero;