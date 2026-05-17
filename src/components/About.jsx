import React from 'react';
import { Terminal, GraduationCap, Award, CheckCircle2, ChevronRight } from 'lucide-react';

const About = ({ auditMode }) => {
  return (
    <section id="about" className="py-12 relative z-10 border-t border-white/5 bg-darker/60">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber/5 via-transparent to-purple-500/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Intro Text (Span 7) */}
          <div className={`lg:col-span-7 space-y-6 ${auditMode ? 'audit-box p-6' : ''}`}>
            {auditMode && <div className="audit-tag">section="about-initialization" [ARIA]</div>}
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass bg-white/5 border border-white/10 text-xs font-mono font-bold text-cyber uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-cyber" />
              <span>Stage 1: Initialization</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Professional <span className="text-gradient">Overview</span>
            </h2>

            <p className="text-lg text-muted leading-relaxed font-sans">
              I am a QA Automation Lead with 9 years of expertise architecting scalable automation frameworks. My focus is on leveraging modern tools like Playwright, Cypress, and AI-driven solutions to enhance software quality and deployment efficiency.
            </p>

            <p className="text-lg text-muted leading-relaxed font-sans">
              I have a proven track record of transitioning teams to advanced testing practices, establishing robust CI/CD pipelines, and significantly reducing critical production defects through comprehensive E2E automation methodologies.
            </p>
            
            <div className="pt-4 flex items-center gap-6 text-xs font-mono font-bold text-light/80 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Zero Regression Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyber" />
                <span>100% CI/CD Integrated</span>
              </div>
            </div>

            <div className="pt-2">
              <a href="#experience" className="inline-flex items-center gap-2 text-cyber font-bold hover:text-success transition-colors font-mono text-sm">
                <span>Explore my experience timeline</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Right Credentials Cards (Span 5) */}
          <div className={`lg:col-span-5 space-y-8 ${auditMode ? 'audit-box p-4' : ''}`}>
            {auditMode && <div className="audit-tag">container="education-certs"</div>}

            {/* Education Node */}
            <div className="glass p-8 rounded-3xl bg-dark/90 border-l-4 border-l-cyber border-y border-r border-white/10 shadow-2xl hover:-translate-y-1 transition-transform group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyber/10 flex items-center justify-center text-cyber border border-cyber/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-muted uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-0.5 rounded">
                  2015 B.E.
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-cyber transition-colors font-mono">Education</h3>
              <p className="text-base font-semibold text-light/90 mb-1 font-sans">Bachelor's Degree in Electronics & Communication</p>
              <p className="text-xs text-muted font-sans">Gujarat Technological University, India</p>
            </div>
            
            {/* Certifications Node */}
            <div className="glass p-8 rounded-3xl bg-dark/90 border-l-4 border-l-success border-y border-r border-white/10 shadow-2xl hover:-translate-y-1 transition-transform group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-success/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-2xl bg-success/10 flex items-center justify-center text-success border border-success/20">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-success uppercase tracking-wider bg-success/10 border border-success/20 px-2.5 py-0.5 rounded">
                  VERIFIED CERTS
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-success transition-colors font-mono">Certifications</h3>
              <ul className="space-y-6">
                <li className="border-b border-white/5 pb-4">
                  <p className="text-base font-bold text-light/95 font-sans mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                    ISTQB - Certified Tester Foundation Level (CTFL)
                  </p>
                  <p className="text-xs text-muted font-sans pl-3.5">Canadian Software Testing Board (CSTB) | 2021</p>
                </li>
                <li>
                  <p className="text-base font-bold text-light/95 font-sans mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber"></span>
                    Project Management Certification
                  </p>
                  <p className="text-xs text-muted font-sans pl-3.5">Sheridan College | 2020</p>
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
