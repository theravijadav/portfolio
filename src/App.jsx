import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-darker text-light min-h-screen font-sans selection:bg-primary/30 selection:text-primary relative scroll-smooth overflow-x-hidden">
      {/* Background radial gradient overlay for consistent themeing */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark via-darker to-black -z-50 pointer-events-none"></div>
      
      <Navbar />

      <main className="relative">
        <Hero />
        
        <div className="animate-on-scroll opacity-0">
          <About />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <Experience />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <Skills />
        </div>
        
        <div className="animate-on-scroll opacity-0">
          <Projects />
        </div>
        
      </main>

      <div className="animate-on-scroll opacity-0">
        <Contact />
      </div>
    </div>
  );
}

export default App;
