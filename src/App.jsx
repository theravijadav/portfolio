import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FlakinessCalculator from './components/FlakinessCalculator';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import DeveloperCli from './components/DeveloperCli';
import { Workflow, ShieldAlert } from 'lucide-react';

function App() {
  const [cliMode, setCliMode] = useState(false);
  const [auditMode, setAuditMode] = useState(false);
  const [activePipelineStage, setActivePipelineStage] = useState(1);
  const [isPipelineRunning, setIsPipelineRunning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(2);
  const [nodePositions, setNodePositions] = useState({ s1: 3, s2: 28, s3: 60, s4: 85 });
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'vscode');

  // Sync theme with document element and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Calculate exact percentage positions of each section relative to the main container
  useEffect(() => {
    const calculatePositions = () => {
      const mainEl = document.getElementById('main-stages-container');
      const aboutEl = document.getElementById('about');
      const skillsEl = document.getElementById('skills');
      const projectsEl = document.getElementById('projects');
      const experienceEl = document.getElementById('experience');

      if (mainEl && aboutEl && skillsEl && projectsEl && experienceEl) {
        const mainHeight = mainEl.offsetHeight || 1;
        // Since main is relative, offsetTop is exactly relative to main
        const s1 = (aboutEl.offsetTop / mainHeight) * 100;
        const s2 = (skillsEl.offsetTop / mainHeight) * 100;
        const s3 = (projectsEl.offsetTop / mainHeight) * 100;
        const s4 = (experienceEl.offsetTop / mainHeight) * 100;

        setNodePositions({
          s1: Math.min(Math.max(s1 + 2.5, 1), 95),
          s2: Math.min(Math.max(s2 + 2.5, 1), 95),
          s3: Math.min(Math.max(s3 + 2.5, 1), 95),
          s4: Math.min(Math.max(s4 + 2.5, 1), 95),
        });
      }
    };

    window.addEventListener('resize', calculatePositions);
    const timer = setTimeout(calculatePositions, 300);
    return () => {
      window.removeEventListener('resize', calculatePositions);
      clearTimeout(timer);
    };
  }, []);

  // Scroll handler using robust getBoundingClientRect to dynamically calculate active stages and precise line filling
  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.55; // Center/Top 55% of viewport
      const experienceRect = document.getElementById('experience')?.getBoundingClientRect();
      const projectsRect = document.getElementById('projects')?.getBoundingClientRect();
      const skillsRect = document.getElementById('skills')?.getBoundingClientRect();
      const aboutRect = document.getElementById('about')?.getBoundingClientRect();

      if (experienceRect && experienceRect.top <= triggerY) {
        setActivePipelineStage(4);
      } else if (projectsRect && projectsRect.top <= triggerY) {
        setActivePipelineStage(3);
      } else if (skillsRect && skillsRect.top <= triggerY) {
        setActivePipelineStage(2);
      } else if (aboutRect && aboutRect.top <= triggerY) {
        setActivePipelineStage(1);
      }

      // Precise scroll progress calculation relative to the main stages container
      const mainEl = document.getElementById('main-stages-container');
      if (mainEl) {
        const rect = mainEl.getBoundingClientRect();
        const triggerOffset = window.innerHeight * 0.5;
        const scrolledInMain = triggerOffset - rect.top;
        const totalMainHeight = mainEl.offsetHeight;

        if (totalMainHeight > 0) {
          const rawProgress = (scrolledInMain / totalMainHeight) * 100;
          setScrollProgress(Math.min(Math.max(rawProgress, nodePositions.s1), 100));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nodePositions]);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
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

  // Handler when "Run Live Portfolio Audit" is triggered in Hero
  const handleStartGlobalAudit = (stage, isRunning = false) => {
    setActivePipelineStage(stage);
    setIsPipelineRunning(isRunning);
    const targetId = stage === 1 ? 'about' : stage === 2 ? 'skills' : stage === 3 ? 'projects' : stage === 4 ? 'experience' : 'home';
    const element = document.getElementById(targetId);
    if (element && stage > 1) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`bg-dark text-light min-h-screen font-sans selection:bg-cyber/30 selection:text-cyber relative scroll-smooth overflow-x-hidden transition-colors duration-500 ${auditMode ? 'audit-mode-active' : ''}`}>
      {/* Background radial gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark via-darker to-black -z-50 pointer-events-none transition-colors duration-500"></div>
      
      {/* Floating Audit Mode Status Overlay */}
      {auditMode && (
        <div className="fixed bottom-6 left-6 z-50 glass bg-cyber/90 text-darker font-mono text-xs px-4 py-2 rounded-xl shadow-[0_0_30px_rgba(14,165,233,0.8)] border border-white/20 animate-pulse flex items-center gap-2 font-bold pointer-events-none">
          <ShieldAlert className="w-4 h-4 text-darker" />
          <span>AUDIT MODE: INSPECTING DOM & WCAG ARIA TARGETS</span>
        </div>
      )}

      <Navbar
        cliMode={cliMode}
        setCliMode={setCliMode}
        theme={theme}
        setTheme={setTheme}
        auditMode={auditMode}
        setAuditMode={setAuditMode}
      />

      {/* Hero Section - Completely Independent & Pristine */}
      <div className="relative z-20">
        <Hero
          onOpenCli={() => setCliMode(true)}
          auditMode={auditMode}
          onStartGlobalAudit={handleStartGlobalAudit}
          activePipelineStage={activePipelineStage}
        />
      </div>

      {/* Main Stages Container with Left-Side SVG Pipeline Track */}
      <main id="main-stages-container" className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-20 z-10 overflow-hidden">
        
        {/* Left-Side SVG Pipeline Background */}
        <div className="absolute inset-y-0 left-4 lg:left-12 w-12 pointer-events-none z-0 hidden lg:block">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="leftRadiantGrad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="30%" stopColor="#0EA5E9" />
                <stop offset="65%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            
            {/* 1. The Background Dotted Line waiting to be connected */}
            <path
              d="M 50,0 V 100"
              fill="none"
              stroke="#334155"
              strokeWidth="2"
              strokeDasharray="6 6"
              vectorEffect="non-scaling-stroke"
              className="opacity-50"
            />

            {/* 2. The Glowing Active Connecting Line drawing downwards dynamically as user scrolls with radiant fill */}
            <path
              d={`M 50,0 V ${scrollProgress}`}
              fill="none"
              stroke="url(#leftRadiantGrad)"
              strokeWidth="5"
              vectorEffect="non-scaling-stroke"
              className="filter drop-shadow-[0_0_20px_#10B981] transition-all duration-300"
            />

            {/* Glowing animated token traveling straight down ONLY when pipeline is running */}
            {isPipelineRunning ? (
              <circle r="7" cx="50" fill="#10B981" className="filter drop-shadow-[0_0_25px_#10B981]">
                <animateMotion
                  path="M 50,0 V 100"
                  dur="13.5s"
                  repeatCount="1"
                />
              </circle>
            ) : (
              /* Glowing interactive audit packet moving with manual scroll */
              <circle
                r="7"
                cx="50"
                cy={scrollProgress}
                fill="#10B981"
                className="filter drop-shadow-[0_0_25px_#10B981] transition-all duration-300 animate-pulse"
              />
            )}
          </svg>

          {/* Glowing Static Stage Nodes placed exactly at the top header of each section */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 flex items-center justify-center font-mono font-black text-xs transition-all duration-500 z-20 ${
              activePipelineStage >= 1 ? 'bg-darker border-cyber text-cyber shadow-[0_0_25px_#0EA5E9] scale-125' : 'bg-dark border-white/20 text-muted shadow-none'
            }`}
            style={{ top: `${nodePositions.s1}%` }}
          >
            1
          </div>
          <div
            className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 flex items-center justify-center font-mono font-black text-xs transition-all duration-500 z-20 ${
              activePipelineStage >= 2 ? 'bg-darker border-purple-400 text-purple-400 shadow-[0_0_25px_#A855F7] scale-125' : 'bg-dark border-white/20 text-muted shadow-none'
            }`}
            style={{ top: `${nodePositions.s2}%` }}
          >
            2
          </div>
          <div
            className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 flex items-center justify-center font-mono font-black text-xs transition-all duration-500 z-20 ${
              activePipelineStage >= 3 ? 'bg-darker border-amber text-amber shadow-[0_0_25px_#F59E0B] scale-125' : 'bg-dark border-white/20 text-muted shadow-none'
            }`}
            style={{ top: `${nodePositions.s3}%` }}
          >
            3
          </div>
          <div
            className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 flex items-center justify-center font-mono font-black text-xs transition-all duration-500 z-20 ${
              activePipelineStage >= 4 ? 'bg-darker border-success text-success shadow-[0_0_25px_#10B981] scale-125' : 'bg-dark border-white/20 text-muted shadow-none'
            }`}
            style={{ top: `${nodePositions.s4}%` }}
          >
            4
          </div>
        </div>

        {/* Section Content Stack widened to full container width with a reserved left margin for the track */}
        <div className="relative z-10 w-full pl-0 lg:pl-24 space-y-12 lg:space-y-16">
          <div className="animate-on-scroll transition-all duration-700 pt-4">
            <About auditMode={auditMode} />
          </div>
          
          <div className="animate-on-scroll transition-all duration-700">
            <Skills auditMode={auditMode} />
          </div>
          
          <div className="animate-on-scroll transition-all duration-700">
            <Projects auditMode={auditMode} />
          </div>

          <div className="animate-on-scroll transition-all duration-700 pb-12">
            <Experience auditMode={auditMode} />
          </div>
        </div>
      </main>

      {/* Standalone Interactive Utility Section */}
      <div className="animate-on-scroll transition-all duration-700 relative z-20 py-12 bg-darker/60 border-y border-white/5">
        <FlakinessCalculator auditMode={auditMode} />
      </div>

      <div className="animate-on-scroll transition-all duration-700 relative z-20">
        <Contact auditMode={auditMode} />
      </div>

      <DeveloperCli
        isOpen={cliMode}
        onClose={() => setCliMode(false)}
        theme={theme}
        setTheme={setTheme}
        onTriggerAudit={() => {
          setCliMode(false);
          const target = document.getElementById('home');
          target?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default App;
