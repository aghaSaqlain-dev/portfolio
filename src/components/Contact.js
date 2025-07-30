import React, { useEffect } from 'react';
import './Contact.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = {
  email: "aghasaqlain.dev@gmail.com",
  phone: "0310-8459082",
  github: "https://github.com/aghaSaqlain-dev",
  linkedin: "https://www.linkedin.com/in/saqlain-kazmi",
  location: "Karachi, Pakistan"
};

const Contact = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className={`contact section-animated ${sectionVisible ? 'visible' : ''}`} id="contact" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title fade-in-up ${sectionVisible ? 'visible' : ''}`}>Get In Touch</h2>
        
        <div className="contact-content">
          <div className={`contact-info fade-in-left ${sectionVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation. Feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <a href={`mailto:${contactInfo.email}`} className="contact-method">
              <div className="method-icon">📧</div>
              <div className="method-details">
                <h4>Email</h4>
                <p>{contactInfo.email}</p>
              </div>
            </a>
            
            <a href={`tel:${contactInfo.phone}`} className="contact-method">
              <div className="method-icon">📱</div>
              <div className="method-details">
                <h4>Phone</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </a>
            
            <div className="contact-method">
              <div className="method-icon">📍</div>
              <div className="method-details">
                <h4>Location</h4>
                <p>{contactInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`contact-form fade-in-right ${sectionVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <h3 className="form-title">Send a Message</h3>
          <form className="message-form">
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            
            <div className="form-group">
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>
            
            <div className="form-group">
              <textarea id="message" name="message" rows="6" placeholder="Your Message" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
      
      <div className="social-links">
        <h3 className="social-title">Connect with me</h3>
        <div className="social-grid">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="social-link github">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
    
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Syed Muhammad Saqlain. All rights reserved.</p>
        <p className="footer-subtitle">Built with React & passion for technology</p>
      </div>
    </footer>
  </section>
  );
};

export default Contact;
