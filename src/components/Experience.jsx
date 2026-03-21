import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Zendesk",
      period: "March 2026 - Present",
      description: "Architecting a strategic migration of the E2E suite from Cypress to Playwright utilizing AI-driven tools. Integrating new automated frameworks into CI/CD pipelines to improve execution speed while maintaining zero regressions across current Cypress suites.",
      tools: ["Playwright", "Cypress", "AI Tools", "CI/CD"]
    },
    {
      role: "Senior QA Automation Engineer",
      company: "Roofr",
      period: "October 2024 - March 2026",
      description: "Implemented an automation foundation using Playwright and TypeScript, leveraging the Playwright MCP pattern. Automated 100% of the regression suite and drove a monumental product stability improvements, eliminating all critical P1/P2 bugs for three consecutive months.",
      tools: ["Playwright", "TypeScript", "Playwright MCP", "Agile"]
    },
    {
      role: "Intermediate Software Engineer",
      company: "Paramount Commerce (Clik2pay)",
      period: "June 2021 - May 2025",
      description: "Engineered a modular Playwright framework using Page Object Model (POM), achieving 95% test coverage across web, mobile, and API platforms. Oversaw E2E testing for over 50 releases resulting in zero post-launch hot-fixes.",
      tools: ["Playwright", "Mobile Testing", "API Testing", "POM"]
    },
    {
      role: "Senior QA Engineer",
      company: "Cygnet Infotech Pvt. Ltd.",
      period: "June 2015 - August 2019",
      description: "Optimized end-to-end testing pipelines utilizing combinations of smoke, regression, and integration testing strategies. Led test-driven development initiatives and translated business requirements into well-structured technical specs.",
      tools: ["Integration Testing", "TDD", "Confluence", "Smoke Testing"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-darker border-4 border-primary z-10 md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <div className="md:w-5/12 glass p-8 rounded-2xl hover:border-primary/30 transition-all group">
                  <span className="text-sm font-semibold text-accent mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                  <h4 className="text-lg text-light/70 mb-4">{exp.company}</h4>
                  <p className="text-muted leading-relaxed mb-6 text-sm">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map(tool => (
                      <span key={tool} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-light/90">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
