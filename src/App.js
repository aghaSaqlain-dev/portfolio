import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      <div className="cursor-spotlight"></div>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
