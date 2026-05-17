import React, { useState, useEffect } from 'react';
import { Code, Terminal, Play, CheckCircle2, AlertCircle, RefreshCw, ExternalLink, Zap, ShieldAlert, Cpu, Activity, PlaySquare } from 'lucide-react';

const simulationsData = {
  genai: {
    btnLabel: "Simulate Self-Healing Selector",
    icon: Zap,
    steps: [
      { time: "0.0s", text: "[TEST FAILED] Timeout 5000ms exceeded looking for element 'button#checkout-btn-v2'", status: "error" },
      { time: "0.8s", text: "[AI ADAPTER] Exception intercepted. Capturing DOM tree snapshot...", status: "warning" },
      { time: "1.6s", text: "[OPENAI STREAM] POST /v1/chat/completions (model: gpt-4o)...", status: "info" },
      { time: "2.4s", text: "Streaming tokens: Analyzing semantic graph... Found candidate: <button data-testid='checkout-proceed'> (Sim: 0.99)", status: "info" },
      { time: "3.5s", text: "[HEAL SUCCESS] Selector updated. Test resumed automatically. Flakiness eliminated!", status: "success" }
    ]
  },
  salesforce: {
    btnLabel: "Simulate Data-Driven Matrix",
    icon: Cpu,
    steps: [
      { time: "0.0s", text: "[SECRETS] Decrypting Salesforce Org credentials via KMS vault... SUCCESS", status: "success" },
      { time: "0.7s", text: "[WINSTON] Initializing parallel multi-org execution matrix (4 workers)...", status: "info" },
      { time: "1.5s", text: "[WORKER 1] CPQ Quote generation flow... OK (1.4s)", status: "success" },
      { time: "2.2s", text: "[WORKER 2] Advanced Billing calculation validation... OK (2.1s)", status: "success" },
      { time: "3.0s", text: "[SUMMARY] 100% Enterprise Test Coverage Verified. Zero regressions.", status: "success" }
    ]
  },
  sentinel: {
    btnLabel: "Simulate Contract Validation",
    icon: ShieldAlert,
    steps: [
      { time: "0.0s", text: "[AJV ENGINE] Loading OpenAPI 3.1 schema specification from repo...", status: "info" },
      { time: "0.6s", text: "[INTERCEPT] Capturing live production HTTP GET /api/v1/users/profile response...", status: "info" },
      { time: "1.4s", text: "[CONTRACT DIFF] Found unexpected property type: 'age' expected number, received string '32'", status: "warning" },
      { time: "2.5s", text: "[SENTINEL ALERT] Breaking API contract change blocked before deployment!", status: "success" }
    ]
  }
};

const Projects = ({ auditMode }) => {
  const [activeSim, setActiveSim] = useState(null);
  const [simStep, setSimStep] = useState(0);

  useEffect(() => {
    let timer;
    if (activeSim && simStep < simulationsData[activeSim].steps.length) {
      timer = setTimeout(() => {
        setSimStep((prev) => prev + 1);
      }, 750);
    }
    return () => clearTimeout(timer);
  }, [activeSim, simStep]);

  const startSimulation = (id) => {
    if (activeSim === id) {
      setActiveSim(null);
    } else {
      setActiveSim(id);
      setSimStep(0);
    }
  };

  const projects = [
    {
      id: "genai",
      stepNum: "EXECUTION BLOCK 3.1",
      badge: "STABLE",
      title: "Playwright-GenAI-Auto",
      description: "A comprehensive End-to-End automation framework utilizing Playwright and generative AI for self-healing tests. Reduces test maintenance by autogenerating robust selectors upon failure.",
      tags: ["Playwright", "TypeScript", "OpenAI API", "GitHub Actions"],
      link: "https://github.com/theravijadav/Playwright-GenAI-Auto"
    },
    {
      id: "salesforce",
      stepNum: "EXECUTION BLOCK 3.2",
      badge: "PASSED",
      title: "Playwright-Salesforce-Enterprise",
      description: "A robust boilerplate test automation framework specialized for Salesforce. It features data-driven testing, deep logging with Winston, and encrypted secrets.",
      tags: ["Playwright", "TypeScript", "Enterprise QA", "Salesforce"],
      link: "https://github.com/theravijadav/Playwright-Salesforce-Enterprise"
    },
    {
      id: "sentinel",
      stepNum: "EXECUTION BLOCK 3.3",
      badge: "PASSED",
      title: "API-Contract-Sentinel",
      description: "Automated contract testing CLI tool that continuously monitors OpenAPI schemas against deployed robust backend endpoints to prevent breaking changes.",
      tags: ["Node.js", "Playwright", "OpenAPI", "Ajv Engine"],
      link: "https://github.com/theravijadav/API-Contract-Sentinel"
    }
  ];

  return (
    <section id="projects" className="py-12 relative z-10 border-t border-white/5 bg-darker/60">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`mb-16 text-center ${auditMode ? 'audit-box p-4' : ''}`}>
          {auditMode && <div className="audit-tag">section="automation-suite" [ARIA]</div>}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass bg-white/5 border border-white/10 mb-4 text-xs font-semibold text-cyber uppercase tracking-wider">
            <Terminal className="w-4 h-4 text-cyber" />
            <span>Stage 3: Test Automation Suite</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects & Simulators</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber via-purple-500 to-success rounded-full mb-6 mx-auto"></div>
          <p className="text-muted max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
            Open-source contributions and personal frameworks designed to push the boundaries of automated testing and CI/CD pipelines. Click on the simulators to watch the frameworks in action!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const sim = simulationsData[project.id];
            const isSimulating = activeSim === project.id;
            const currentSteps = isSimulating ? sim.steps.slice(0, simStep) : [];
            const isFinished = isSimulating && simStep === sim.steps.length;

            let badgeStatus = project.badge;
            if (isSimulating && !isFinished) {
              badgeStatus = "PIPELINE ACTIVE";
            } else if (isSimulating && isFinished) {
              badgeStatus = "PASSED";
            }

            return (
              <div
                key={project.id}
                className={`glass p-8 rounded-3xl flex flex-col h-full group hover:bg-white/10 transition-all border duration-300 ${
                  isSimulating
                    ? 'border-amber shadow-[0_0_25px_rgba(245,158,11,0.25)] bg-dark/90'
                    : 'border-white/10 hover:border-cyber/50 bg-darker/60 shadow-xl'
                } relative overflow-hidden ${auditMode ? 'audit-box' : ''}`}
              >
                {auditMode && <div className="audit-tag">data-testid={`exec-block-${project.id}`}</div>}

                {/* Hover gradient effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                {/* Step Header & Mini-Status Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 z-10 font-mono">
                  <span className="text-xs font-bold text-cyber tracking-wider flex items-center gap-1.5">
                    <PlaySquare className="w-4 h-4 text-cyber" /> {project.stepNum}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${
                      badgeStatus === 'PIPELINE ACTIVE'
                        ? 'bg-amber/20 text-amber border-amber animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                        : badgeStatus === 'PASSED'
                        ? 'bg-success/20 text-success border-success/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                        : 'bg-cyber/20 text-cyber border-cyber/40 shadow-[0_0_10px_rgba(14,165,233,0.3)]'
                    }`}
                  >
                    [{badgeStatus}]
                  </span>
                </div>

                <div className="mb-6 z-10 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyber/10 border border-cyber/20 flex items-center justify-center text-cyber shadow-inner">
                      <Code className="w-6 h-6" />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-white/10 text-muted hover:text-white transition-colors"
                      title="Open repository"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyber transition-colors">{project.title}</h3>
                  <p className="text-muted leading-relaxed text-sm mb-6 font-sans">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono font-semibold text-light bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Interactive Simulator Section */}
                <div className="mt-auto z-10 border-t border-white/10 pt-6 font-mono">
                  <button
                    onClick={() => startSimulation(project.id)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isSimulating
                        ? 'bg-amber/20 border border-amber/40 text-amber hover:bg-amber/30 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-cyber/20 border border-cyber/40 text-cyber hover:bg-cyber/30 shadow-[0_0_15px_rgba(14,165,233,0.2)]'
                    }`}
                  >
                    {isSimulating ? <RefreshCw className="w-4 h-4 animate-spin text-amber" /> : <sim.icon className="w-4 h-4 text-cyber" />}
                    <span>{isSimulating ? 'Terminate Simulator' : sim.btnLabel}</span>
                  </button>

                  {/* Simulator Sandbox Output */}
                  {isSimulating && (
                    <div className="mt-4 rounded-xl bg-black/95 border border-amber/30 p-4 font-mono text-[11px] leading-relaxed shadow-2xl animate-slide-up max-h-52 overflow-y-auto space-y-2.5">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-muted text-[10px] uppercase font-bold tracking-wider select-none">
                        <span className="flex items-center gap-1.5 text-amber">
                          <Terminal className="w-3 h-3 text-amber animate-pulse" /> Live Telemetry Loop
                        </span>
                        <span className="text-amber">{simStep} / {sim.steps.length}</span>
                      </div>

                      {currentSteps.map((s, idx) => (
                        <div key={idx} className="flex items-start gap-2 animate-fade-in">
                          <span className="text-muted/60 select-none">[{s.time}]</span>
                          <span className={`flex-1 ${
                            s.status === 'error' ? 'text-red-400 font-bold' :
                            s.status === 'warning' ? 'text-amber font-semibold' :
                            s.status === 'success' ? 'text-success font-bold' :
                            'text-light'
                          }`}>
                            {s.text}
                          </span>
                        </div>
                      ))}

                      {!isFinished && (
                        <div className="flex items-center gap-2 text-amber animate-pulse pt-1">
                          <span className="w-2 h-2 rounded-full bg-amber"></span>
                          <span className="text-[10px]">Processing execution block stream...</span>
                        </div>
                      )}

                      {isFinished && (
                        <div className="mt-2 p-2 rounded bg-success/10 border border-success/30 text-success text-center font-bold animate-fade-in flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> Pipeline Step Verified Successfully
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
