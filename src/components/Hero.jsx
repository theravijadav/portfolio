import React, { useState, useEffect } from 'react';
import { Play, CheckCircle2, RotateCcw, Activity, ShieldCheck, Zap, RefreshCw, Terminal, Workflow } from 'lucide-react';

const auditStepsLog = [
  { time: '0.0s', text: 'Initializing Playwright E2E Runner v1.50...', status: 'info', stage: 1 },
  { time: '0.2s', text: 'Injecting AI Self-Healing Adapter into DOM...', status: 'info', stage: 1 },
  { time: '0.5s', text: 'Stage 1 [Initialization]: Verifying Nav Links (#about)...', status: 'success', tag: 'PASSED', stage: 1 },
  { time: '0.9s', text: 'Stage 2 [Quality Core]: Evaluating Bento-Grid matrix...', status: 'success', tag: 'PASSED', stage: 2 },
  { time: '1.4s', text: 'Stage 2.5 [ROI Engine]: Validating reactive formulas...', status: 'success', tag: 'PASSED', stage: 2 },
  { time: '1.9s', text: 'Stage 3 [Automation Suite]: Simulating self-healing fallback...', status: 'warning', tag: 'HEALED BY AI', stage: 3 },
  { time: '2.4s', text: 'Measuring Time-to-Interactive (TTI)... 42ms', status: 'success', tag: 'FLAWLESS', stage: 3 },
  { time: '3.0s', text: 'Stage 4 [CI/CD Log]: Checking build timeline nodes...', status: 'success', tag: 'VERIFIED', stage: 4 },
  { time: '3.6s', text: 'Generating Quality Health Score Dashboard...', status: 'info', stage: 5 },
];

const Hero = ({ onOpenCli, auditMode, onStartGlobalAudit, activePipelineStage }) => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState(0);
  const [auditComplete, setAuditComplete] = useState(false);

  useEffect(() => {
    let timer;
    if (isAuditing && auditStep < auditStepsLog.length) {
      timer = setTimeout(() => {
        setAuditStep((prev) => prev + 1);
        if (onStartGlobalAudit) {
          onStartGlobalAudit(auditStepsLog[auditStep]?.stage || 1, true);
        }
      }, 1500);
    } else if (isAuditing && auditStep === auditStepsLog.length) {
      timer = setTimeout(() => {
        setAuditComplete(true);
        setIsAuditing(false);
        if (onStartGlobalAudit) {
          onStartGlobalAudit(5, false); // Complete
        }
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [isAuditing, auditStep]);

  const handleStartAudit = () => {
    setIsAuditing(true);
    setAuditStep(0);
    setAuditComplete(false);
    if (onStartGlobalAudit) {
      onStartGlobalAudit(1, true);
    }
  };

  // Real-time reactive numbers during scan
  const scoreVal = auditStep < 3 ? "25.0%" : auditStep < 5 ? "68.4%" : auditStep < 8 ? "92.1%" : "99.8%";
  const accVal = auditStep < 4 ? "Scanning" : "100%";
  const flakeVal = auditStep < 6 ? "Testing" : "0.0%";
  const speedVal = auditStep < 7 ? "Measuring" : "42ms";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-dark">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber/15 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* Left Intro Text (Span 6) */}
        <div className={`lg:col-span-6 animate-fade-in z-10 space-y-6 ${auditMode ? 'audit-box p-6' : ''}`}>
          {auditMode && <div className="audit-tag">container="hero-intro" [WCAG AAA]</div>}

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass bg-white/5 border border-white/10 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cyber animate-pulse"></span>
            <span className="font-semibold text-cyber tracking-wide uppercase">Senior QA Automation Lead</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white font-sans">
            Architecting <br />
            <span className="text-gradient font-black font-sans">Scalable Automated</span><br />
            Frameworks.
          </h1>

          <p className="text-lg text-muted max-w-xl leading-relaxed font-sans">
            Over 9 years of expertise in Playwright, Cypress, and TypeScript. Dedicated to enhancing software quality and deployment efficiency through advanced AI-driven automation and zero-flakiness testing practices.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button
              onClick={handleStartAudit}
              className="flex items-center gap-2.5 px-8 py-4 bg-cyber text-darker rounded-full font-black shadow-lg shadow-cyber/30 hover:bg-cyber/90 hover:scale-105 transition-all text-sm group font-mono uppercase tracking-wider"
            >
              <Play className="w-4 h-4 fill-darker group-hover:scale-110 transition-transform" />
              <span>Run Live Portfolio Audit</span>
            </button>
            <a
              href="#projects"
              className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-bold transition-all text-sm border border-white/20 font-mono uppercase tracking-wider"
            >
              Explore Frameworks
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-muted font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span className="font-semibold">100% Robust Locators</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber animate-pulse" />
              <span className="font-semibold">AI Self-Healing Active</span>
            </div>
          </div>
        </div>

        {/* Right Side Visual Component: Live Site Auditor Terminal (Span 6) */}
        <div className={`lg:col-span-6 animate-slide-up w-full ${auditMode ? 'audit-box p-4' : ''}`}>
          {auditMode && <div className="audit-tag">data-testid="live-auditor-terminal"</div>}

          <div className="relative w-full max-w-xl mx-auto lg:max-w-none font-mono">
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber/20 via-purple-500/15 to-success/15 rounded-3xl blur-3xl -z-10"></div>

            {/* Terminal Window Box */}
            <div className={`glass rounded-3xl w-full relative overflow-hidden border transition-all duration-300 ${
              isAuditing && !auditComplete ? 'border-amber shadow-[0_0_30px_rgba(245,158,11,0.3)] bg-darker/95' : 'border-white/15 bg-darker/90 shadow-2xl'
            } flex flex-col min-h-[480px]`}>
              
              {/* Terminal Titlebar */}
              <div className="bg-white/5 border-b border-white/10 px-6 py-3.5 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-xs text-muted ml-3 font-mono flex items-center gap-1.5 font-semibold text-cyber">
                    <Activity className="w-3.5 h-3.5 text-cyber animate-pulse" /> live-pipeline-telemetry.sh
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono">
                  {isAuditing && !auditComplete && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber/10 border border-amber/20 text-[10px] font-bold text-amber animate-pulse uppercase tracking-wider">
                      <RefreshCw className="w-3 h-3 animate-spin text-amber" /> Stage {activePipelineStage} Active
                    </span>
                  )}
                  {auditComplete && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-success/10 border border-success/20 text-[10px] font-bold text-success uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-success" /> Pipeline Flawless
                    </span>
                  )}
                </div>
              </div>

              {/* Scanning Laser Line (when auditing) */}
              {isAuditing && !auditComplete && (
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber to-transparent animate-scan z-20 shadow-[0_0_15px_rgba(245,158,11,0.9)]"></div>
              )}

              {/* Terminal Screen Contents */}
              <div className="p-6 flex-1 flex flex-col font-mono text-xs overflow-hidden relative">
                {!isAuditing && !auditComplete && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4 font-mono">
                    <div className="w-16 h-16 rounded-full bg-cyber/10 border border-cyber/20 flex items-center justify-center text-cyber mb-2 shadow-[0_0_25px_rgba(14,165,233,0.25)]">
                      <Workflow className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight font-mono">Premium Pipeline Visualizer</h3>
                    <p className="text-muted text-sm max-w-sm leading-relaxed font-sans">
                      Click below to trigger an explicit visual scanning micro-animation across the portfolio's execution blocks and update the Quality Health Score in real-time.
                    </p>
                    <button
                      onClick={handleStartAudit}
                      className="mt-4 px-6 py-3 rounded-full bg-cyber text-darker font-black tracking-wider hover:bg-cyber/90 hover:scale-105 transition-all inline-flex items-center gap-2 uppercase font-mono shadow-lg shadow-cyber/20"
                    >
                      <Play className="w-3.5 h-3.5 fill-darker" /> Start Live Audit Scan
                    </button>
                  </div>
                )}

                {/* Audit Steps Streaming Log */}
                {isAuditing && (
                  <div className="space-y-3 flex-1 overflow-y-auto scrollbar-none pr-2 font-mono">
                    <div className="text-[10px] text-muted border-b border-white/10 pb-2 mb-3 uppercase tracking-wider flex items-center justify-between">
                      <span>Telemetry Stream</span>
                      <span>Targeting Stage {activePipelineStage}</span>
                    </div>

                    {auditStepsLog.slice(0, auditStep).map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 animate-fade-in text-light/95 leading-relaxed">
                        <span className="text-cyber select-none font-bold">[{step.time}]</span>
                        <span className="flex-1">{step.text}</span>
                        {step.tag && (
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-black tracking-wider border ${
                              step.status === 'success'
                                ? 'bg-success/10 border-success/30 text-success font-bold'
                                : step.status === 'warning'
                                ? 'bg-amber/10 border-amber/30 text-amber font-bold'
                                : 'bg-cyber/10 border-cyber/30 text-cyber font-bold'
                            }`}
                          >
                            {step.tag}
                          </span>
                        )}
                      </div>
                    ))}
                    {auditStep < auditStepsLog.length && (
                      <div className="flex items-center gap-2 text-amber text-xs pt-2 animate-pulse font-mono font-bold">
                        <span className="w-2 h-2 rounded-full bg-amber"></span>
                        <span>Scanning Stage {auditStepsLog[auditStep]?.stage || activePipelineStage}...</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Real-Time Reactive Quality Health Score Dashboard */}
                {(isAuditing || auditComplete) && (
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-col justify-between animate-fade-in space-y-4 font-mono">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-black text-white tracking-tight flex items-center gap-2 font-mono">
                          <CheckCircle2 className="w-4 h-4 text-success" /> Live Quality Health Dashboard
                        </h4>
                        <p className="text-muted text-[11px] mt-0.5 font-sans">Real-time verification metrics from active pipeline nodes</p>
                      </div>
                      {auditComplete && (
                        <button
                          onClick={handleStartAudit}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyber/50 hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs text-light"
                          title="Re-run scan"
                        >
                          <RotateCcw className="w-3.5 h-3.5 text-cyber" /> Re-run
                        </button>
                      )}
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1 font-mono">
                      <div className={`glass p-3 rounded-xl border flex flex-col items-center text-center transition-all ${
                        auditComplete ? 'bg-success/10 border-success/40' : 'bg-darker border-white/10'
                      }`}>
                        <span className="text-[10px] text-muted mb-1 font-semibold uppercase tracking-wider">Overall Score</span>
                        <span className="text-xl font-black text-white font-mono">{scoreVal}</span>
                        <span className="text-[9px] text-success mt-1 font-bold">Grade: FLAWLESS</span>
                      </div>

                      <div className="glass p-3 rounded-xl border border-white/10 flex flex-col items-center text-center bg-darker">
                        <span className="text-[10px] text-muted mb-1 font-semibold uppercase tracking-wider">Accessibility</span>
                        <span className="text-xl font-black text-white font-mono">{accVal}</span>
                        <span className="text-[9px] text-cyber mt-1 font-bold">WCAG AAA</span>
                      </div>

                      <div className="glass p-3 rounded-xl border border-white/10 flex flex-col items-center text-center bg-darker">
                        <span className="text-[10px] text-muted mb-1 font-semibold uppercase tracking-wider">Flakiness Index</span>
                        <span className="text-xl font-black text-success font-mono">{flakeVal}</span>
                        <span className="text-[9px] text-muted mt-1 font-semibold">AI Auto-Healed</span>
                      </div>

                      <div className="glass p-3 rounded-xl border border-white/10 flex flex-col items-center text-center bg-darker">
                        <span className="text-[10px] text-muted mb-1 font-semibold uppercase tracking-wider">Speed (TTI)</span>
                        <span className="text-xl font-black text-white font-mono">{speedVal}</span>
                        <span className="text-[9px] text-purple-400 mt-1 font-bold">Ultra-Fast</span>
                      </div>
                    </div>

                    {/* Footer note & trigger Dev CLI */}
                    <div className="pt-2 flex items-center justify-between text-[11px] text-muted font-sans">
                      <span>Powered by Playwright E2E Engine</span>
                      {onOpenCli && (
                        <button
                          onClick={onOpenCli}
                          className="text-cyber hover:underline font-bold font-mono flex items-center gap-1"
                        >
                          Open Dev CLI Mode →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
