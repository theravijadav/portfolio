import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation & Languages",
      skills: [
        { name: "Playwright / Playwright MCP", level: 95 },
        { name: "Cypress", level: 90 },
        { name: "JavaScript / React", level: 70 },
        { name: "Java / Kotlin", level: 50 }
      ]
    },
    {
      title: "Testing & Methodologies",
      skills: [
        { name: "E2E & API Automation", level: 95 },
        { name: "AI Tools (Claude Code, Cursor)", level: 90 },
        { name: "Integration / UI / DB", level: 90 },
        { name: "Scrum / Agile", level: 90 }
      ]
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        { name: "AWS Services", level: 85 },
        { name: "GitHub / Bitbucket / CI-CD", level: 90 },
        { name: "JIRA / Confluence / Linear", level: 85 },
        { name: "Postman / Zephyr", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white/5 relative border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core <span className="text-gradient">Competencies</span></h2>
          <p className="text-muted max-w-2xl">Mastery across the modern testing ecosystem, focusing on robust, resilient pipelines and high-speed feedback loops.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  {/* Simple icon representation */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-light/90">{skill.name}</span>
                      <span className="text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-darker/50 rounded-full h-2 overflow-hidden border border-white/5">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse-slow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
