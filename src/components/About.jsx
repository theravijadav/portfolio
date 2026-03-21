import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white/5 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              I am a QA Automation Lead with 9 years of expertise architecting scalable automation frameworks. My focus is on leveraging modern tools like Playwright, Cypress, and AI-driven solutions to enhance software quality and deployment efficiency.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-8">
              I have a proven track record of transitioning teams to advanced testing practices, establishing robust CI/CD pipelines, and significantly reducing critical production defects through comprehensive E2E automation methodologies.
            </p>
            
            <a href="#experience" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              Explore my experience 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
              <p className="text-lg font-medium text-light/90">Bachelor's Degree in Electronics & Communication</p>
              <p className="text-muted">Gujarat Technological University, India | 2015</p>
            </div>
            
            <div className="glass p-8 rounded-2xl border-l-4 border-l-accent hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
              <ul className="space-y-5">
                <li>
                  <p className="text-lg font-medium text-light/90 text-gradient">ISTQB - CTFL</p>
                  <p className="text-muted">Canadian Software Testing Board (CSTB) | 2021</p>
                </li>
                <li>
                  <p className="text-lg font-medium text-light/90 text-gradient">Project Management</p>
                  <p className="text-muted">Sheridan College | 2020</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
