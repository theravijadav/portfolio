import React from 'react';
import { Terminal, GitCommit, CheckCircle2, Calendar, ShieldCheck, Box, Workflow } from 'lucide-react';

const Experience = ({ auditMode }) => {
  const experiences = [
    {
      buildNum: "BUILD #04 (STABLE)",
      hash: "commit e39f72b",
      role: "Senior Software Engineer",
      company: "Zendesk",
      period: "March 2026 - Present",
      description: "Architecting a strategic migration of the E2E suite from Cypress to Playwright utilizing AI-driven tools. Integrating new automated frameworks into CI/CD pipelines to improve execution speed while maintaining zero regressions across current Cypress suites.",
      tools: ["Playwright", "Cypress", "AI Tools", "CI/CD"],
      status: "PASSED / ACTIVE",
      color: "border-success text-success"
    },
    {
      buildNum: "BUILD #03 (VERIFIED)",
      hash: "commit 84a1d9c",
      role: "Senior QA Automation Engineer",
      company: "Roofr",
      period: "October 2024 - March 2026",
      description: "Implemented an automation foundation using Playwright and TypeScript, leveraging the Playwright MCP pattern. Automated 100% of the regression suite and drove a monumental product stability improvements, eliminating all critical P1/P2 bugs for three consecutive months.",
      tools: ["Playwright", "TypeScript", "Playwright MCP", "Agile"],
      status: "VERIFIED / ZERO BUGS",
      color: "border-cyber text-cyber"
    },
    {
      buildNum: "BUILD #02 (RELEASED)",
      hash: "commit 42b9e11",
      role: "Intermediate Software Engineer",
      company: "Paramount Commerce (Clik2pay)",
      period: "June 2021 - May 2025",
      description: "Engineered a modular Playwright framework using Page Object Model (POM), achieving 95% test coverage across web, mobile, and API platforms. Oversaw E2E testing for over 50 releases resulting in zero post-launch hot-fixes.",
      tools: ["Playwright", "Mobile Testing", "API Testing", "POM"],
      status: "STABLE / 50+ RELEASES",
      color: "border-purple-400 text-purple-400"
    },
    {
      buildNum: "BUILD #01 (ARCHIVED)",
      hash: "commit 10a7c44",
      role: "Senior QA Engineer",
      company: "Cygnet Infotech Pvt. Ltd.",
      period: "June 2015 - August 2019",
      description: "Optimized end-to-end testing pipelines utilizing combinations of smoke, regression, and integration testing strategies. Led test-driven development initiatives and translated business requirements into well-structured technical specs.",
      tools: ["Integration Testing", "TDD", "Confluence", "Smoke Testing"],
      status: "ARCHIVED / FOUNDATION",
      color: "border-muted text-muted"
    }
  ];

  return (
    <section id="experience" className="py-12 relative z-10 border-t border-white/5 bg-darker/80 font-mono">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`mb-16 text-center ${auditMode ? 'audit-box p-4' : ''}`}>
          {auditMode && <div className="audit-tag">section="cicd-build-history" [ARIA]</div>}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass bg-white/5 border border-white/10 mb-4 text-xs font-semibold text-success uppercase tracking-wider font-mono">
            <Workflow className="w-4 h-4 text-success" />
            <span>Stage 4: Continuous Deployment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight font-mono">
            Build History <span className="text-gradient">Log</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-success via-cyber to-purple-500 rounded-full mx-auto mb-4"></div>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto font-sans">
            Career progression rendered as a continuous deployment build history log. Each role represents a successful release cycle in architecting resilient quality infrastructures.
          </p>
        </div>

        {/* Timeline Log Container */}
        <div className="relative space-y-8 pt-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center group ${auditMode ? 'audit-box p-4 mb-8' : ''}`}
            >
              {auditMode && <div className="audit-tag">data-testid={`build-entry-${index}`}</div>}

              {/* Connecting Horizontal Branch Line from master track on the left */}
              <div className="absolute -left-14 lg:-left-20 w-14 lg:w-20 h-0.5 bg-gradient-to-r from-success via-success/50 to-transparent hidden lg:block opacity-40 group-hover:opacity-100 transition-opacity"></div>

              {/* Timeline Commit Node on the left */}
              <div className="absolute -left-14 lg:-left-20 w-7 h-7 rounded-full bg-darker border-4 border-success hidden lg:flex items-center justify-center z-20 shadow-[0_0_15px_rgba(16,185,129,0.8)] group-hover:scale-125 transition-transform -translate-x-1/2">
                <GitCommit className="w-3.5 h-3.5 text-success animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              {/* Experience Log Box */}
              <div className="w-full glass p-8 rounded-3xl bg-dark/95 border border-white/10 hover:border-success/50 transition-all shadow-xl hover:shadow-2xl relative overflow-hidden group-hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                {/* Build Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-success" />
                    <span className="font-black text-white">{exp.buildNum}</span>
                  </div>
                  <span className="text-muted/80 font-mono text-[11px] bg-white/5 px-2 py-0.5 rounded border border-white/10">{exp.hash}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-amber uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                    <span className={`text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded border bg-white/5 ${exp.color}`}>
                      [{exp.status}]
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-extrabold text-white mb-1 tracking-tight group-hover:text-success transition-colors font-mono">{exp.role}</h3>
                  <h4 className="text-base font-bold text-light/80 mb-4 font-sans">{exp.company}</h4>
                  <p className="text-muted leading-relaxed text-sm mb-6 font-sans">{exp.description}</p>
                </div>

                {/* Tools Matrix */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {exp.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-light/90 font-mono flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3 h-3 text-success" />
                      {tool}
                    </span>
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

export default Experience;
