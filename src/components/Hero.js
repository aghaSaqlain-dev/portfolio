import React from 'react';
import './Hero.css';
import TechItem from './tech-item';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
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
  SiJavascript,
  SiChatbot
} from 'react-icons/si';

const Hero = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className={`hero section-animated ${heroVisible ? 'visible' : ''}`} ref={heroRef}>
      <p className={`hero-welcome fade-in-up ${heroVisible ? 'visible' : ''}`}>
        Welcome to the <span className="highlight">web portfolio</span> of
      </p>
      <h1 className={`hero-title fade-in-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
        <span className="hero-name-first">Syed Muhammad</span>
        <span className="hero-name-last">Saqlain</span>
      </h1>
      <p className={`hero-subtitle fade-in-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
        SCROLL DOWN TO LEARN MORE ABOUT MY SKILLS & EXPERIENCES
      </p>
      
      {/* Tech stack icons */}
      <div className={`hero-tech-stack fade-in-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
        <TechItem icon={SiJavascript} name="JavaScript" />
        <TechItem icon={SiCplusplus} name="C++" />
        <TechItem icon={SiTypescript} name="TypeScript" />
        <TechItem icon={SiMongodb} name="MongoDB" />
        <TechItem icon={SiPostgresql} name="PostgreSQL" />
        <TechItem icon={SiNodedotjs} name="Node.js" />
        <TechItem icon={SiChatbot} name="Gen Ai" />
        <TechItem icon={SiReact} name="React" />
        <TechItem icon={SiTailwindcss} name="Tailwind CSS" />
        <TechItem icon={SiVercel} name="Vercel" />  
        <TechItem icon={SiPrisma} name="Prisma" />
      </div>
      
      <div className={`hero-buttons fade-in-up ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}>
        <a href="mailto:aghasaqlain.dev@gmail.com" className="hero-button primary">Contact Me</a>
        <a href="https://github.com/aghaSaqlain-dev" target="_blank" rel="noopener noreferrer" className="hero-button secondary">Github</a>
      </div>
    </section>
    );
  };
export default Hero;