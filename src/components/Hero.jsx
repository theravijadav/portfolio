import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-in">
          <p className="text-primary font-medium tracking-wide flex items-center gap-2 mb-4">
            <span className="w-12 h-[2px] bg-primary rounded-full"></span>
            QA Automation Lead
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Architecting <br />
            <span className="text-gradient">Scalable Automated</span><br />
            Frameworks.
          </h1>
          <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed mix-blend-plus-lighter">
            Over 9 years of expertise in Playwright, Cypress, and JavaScript. Dedicated to enhancing software quality and deployment efficiency through advanced AI-driven automation and modern testing practices.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3.5 glass hover:bg-white/10 text-white rounded-full font-semibold transition-all">
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Right side visual element */}
        <div className="hidden md:flex justify-center animate-slide-up">
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
            <div className="glass rounded-3xl w-full h-full relative overflow-hidden border border-white/10 flex flex-col items-center justify-center p-8 group transition-all duration-500 hover:border-primary/50">
              <div className="w-full mockup-browser bg-black/40 border-b border-white/10 rounded-t-lg px-4 py-2 flex gap-2 w-full absolute top-0 left-0">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-8 w-full">
               <pre className="text-xs text-accent font-mono leading-relaxed overflow-hidden">
                <code>
                  {`> Running full regression suite...
> Setup CI/CD environment... OK
> Initializing Playwright... OK
> Executing API tests... PASSED (124ms)
> E2E UI tests... 
  √ Authentication flow
  √ Data synchronization
  √ Edge case rendering
> 142 tests passed in 4.2s
> Coverage: 98.4%
> Quality check: FLAWLESS`}
                </code>
               </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
