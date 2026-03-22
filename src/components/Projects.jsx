import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Playwright-GenAI-Auto",
      description: "A comprehensive End-to-End automation framework utilizing Playwright and generative AI for self-healing tests. Reduces test maintenance by autogenerating robust selectors upon failure.",
      tags: ["Playwright", "TypeScript", "OpenAI API", "GitHub Actions"],
      link: "https://github.com/theravijadav/Playwright-GenAI-Auto"
    },
    {
      title: "Playwright-Salesforce-Enterprise",
      description: "A robust boilerplate test automation framework specialized for Salesforce. It features data-driven testing, deep logging with Winston, and encrypted secrets.",
      tags: ["Playwright", "TypeScript", "Enterprise QA", "Salesforce"],
      link: "https://github.com/theravijadav/Playwright-Salesforce-Enterprise"
    },
    {
      title: "API-Contract-Sentinel",
      description: "Automated contract testing CLI tool that continuously monitors OpenAPI schemas against deployed robust backend endpoints to prevent breaking changes.",
      tags: ["JavaScript", "OpenAPI", "Docker"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
          <p className="text-muted max-w-2xl text-lg">Open-source contributions and personal frameworks designed to push the boundaries of automated testing and CI/CD pipelines.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass p-8 rounded-2xl flex flex-col h-full group hover:bg-white/10 transition-colors border border-white/5 hover:border-primary/50 relative overflow-hidden">
              {/* Hover gradient effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-6 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{project.description}</p>
              </div>
              
              <div className="mt-auto z-10 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                  View Repository 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
