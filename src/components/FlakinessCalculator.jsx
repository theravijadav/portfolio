import React, { useState } from 'react';
import { Calculator, Zap, DollarSign, Clock, ShieldCheck, ArrowRight, Gauge } from 'lucide-react';

const FlakinessCalculator = ({ auditMode }) => {
  const [flakiness, setFlakiness] = useState(15);
  const [suiteSize, setSuiteSize] = useState(500);
  const [runsPerDay, setRunsPerDay] = useState(5);

  // Calculations
  const falseFailuresPerRun = Math.round(suiteSize * (flakiness / 100));
  // Assume 15 mins (0.25h) spent debugging each false failure
  const hoursLostPerMonth = Math.round(falseFailuresPerRun * (runsPerDay * 20) * 0.25);
  const monthlyCostSaved = hoursLostPerMonth * 85; // $85/hr average QA engineering rate
  const roiMultiplier = (1 + (flakiness / 10) * (suiteSize / 300)).toFixed(1);
  const passRateImprovement = (99.9 - flakiness).toFixed(1);

  return (
    <section id="roi" className="py-12 relative z-10 border-t border-white/5 bg-dark/60">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber/5 via-transparent to-success/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`mb-16 text-center ${auditMode ? 'audit-box p-4' : ''}`}>
          {auditMode && <div className="audit-tag">section="roi-calculator" [WCAG AAA]</div>}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass bg-white/5 border border-white/10 mb-4 text-xs font-semibold text-cyber uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-cyber" />
            <span>Interactive ROI Simulator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            The <span className="text-gradient">Flakiness Calculator</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Toggle the parameters below to calculate the instant ROI, engineering hours recovered, and cost reduction of deploying our custom zero-flakiness framework architecture.
          </p>
        </div>

        <div className={`grid lg:grid-cols-12 gap-8 items-center ${auditMode ? 'audit-box p-6' : ''}`}>
          {auditMode && <div className="audit-tag">container="interactive-controls"</div>}

          {/* Left Column: Sliders */}
          <div className="lg:col-span-6 glass p-8 rounded-3xl bg-darker/90 border border-white/10 shadow-2xl space-y-8 relative">
            <div className="border-b border-white/10 pb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 tracking-tight">
                <Gauge className="w-5 h-5 text-amber" /> Suite Parameters
              </h3>
              <span className="text-xs font-mono text-muted">Real-Time Reactive Model</span>
            </div>

            {/* Slider 1: Flakiness */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-light flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
                  Current App Flakiness Rate
                </span>
                <span className="font-mono text-amber font-extrabold text-base bg-amber/10 px-2.5 py-0.5 rounded border border-amber/20">
                  {flakiness}%
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={flakiness}
                onChange={(e) => setFlakiness(Number(e.target.value))}
                className="w-full h-2 bg-dark rounded-lg appearance-none cursor-pointer accent-amber"
              />
              <div className="flex justify-between text-[10px] text-muted font-mono">
                <span>1% (Stable)</span>
                <span>15% (Average)</span>
                <span>40% (Critical P1 Risk)</span>
              </div>
            </div>

            {/* Slider 2: Suite Size */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-light flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyber"></span>
                  Total Automated E2E Suite Size
                </span>
                <span className="font-mono text-cyber font-extrabold text-base bg-cyber/10 px-2.5 py-0.5 rounded border border-cyber/20">
                  {suiteSize} Tests
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="3000"
                step="50"
                value={suiteSize}
                onChange={(e) => setSuiteSize(Number(e.target.value))}
                className="w-full h-2 bg-dark rounded-lg appearance-none cursor-pointer accent-cyber"
              />
              <div className="flex justify-between text-[10px] text-muted font-mono">
                <span>50 Tests</span>
                <span>1500 Tests</span>
                <span>3000 Tests</span>
              </div>
            </div>

            {/* Slider 3: Runs Per Day */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-light flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success"></span>
                  Pipeline CI Runs Per Day
                </span>
                <span className="font-mono text-success font-extrabold text-base bg-success/10 px-2.5 py-0.5 rounded border border-success/20">
                  {runsPerDay} Runs/Day
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={runsPerDay}
                onChange={(e) => setRunsPerDay(Number(e.target.value))}
                className="w-full h-2 bg-dark rounded-lg appearance-none cursor-pointer accent-success"
              />
              <div className="flex justify-between text-[10px] text-muted font-mono">
                <span>1 Run (Nightly)</span>
                <span>10 Runs</span>
                <span>20 Runs (Continuous)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Results & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Card 1: Cost Reduction */}
              <div className="glass p-6 rounded-3xl bg-gradient-to-br from-success/10 via-darker to-darker border border-success/30 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                <div className="absolute top-0 right-0 p-4 opacity-20 text-success group-hover:opacity-40 transition-opacity">
                  <DollarSign className="w-16 h-16" />
                </div>
                <div className="w-10 h-10 rounded-2xl bg-success/20 flex items-center justify-center text-success mb-4 border border-success/30">
                  <DollarSign className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1">
                  Monthly Cost Saved
                </span>
                <div className="text-4xl font-black font-mono text-white mb-2 flex items-baseline gap-1">
                  <span className="text-success">$</span>{monthlyCostSaved.toLocaleString()}
                  <span className="text-xs font-normal text-muted">/mo</span>
                </div>
                <p className="text-xs text-light/70 leading-relaxed font-sans">
                  Eliminating false failures saves <strong className="text-success">{hoursLostPerMonth} hrs/mo</strong> of engineer debugging at standard $85/hr rate.
                </p>
              </div>

              {/* Card 2: Hours Saved */}
              <div className="glass p-6 rounded-3xl bg-gradient-to-br from-cyber/10 via-darker to-darker border border-cyber/30 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                <div className="absolute top-0 right-0 p-4 opacity-20 text-cyber group-hover:opacity-40 transition-opacity">
                  <Clock className="w-16 h-16" />
                </div>
                <div className="w-10 h-10 rounded-2xl bg-cyber/20 flex items-center justify-center text-cyber mb-4 border border-cyber/30">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider block mb-1">
                  Time Recovered
                </span>
                <div className="text-4xl font-black font-mono text-white mb-2 flex items-baseline gap-1">
                  {hoursLostPerMonth} <span className="text-xs font-normal text-cyber">Hours</span>
                </div>
                <p className="text-xs text-light/70 leading-relaxed font-sans">
                  Reclaimed engineering bandwidth redirected toward high-value test architecture and feature coverage.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Card 3: Architecture Pass Rate */}
              <div className="glass p-6 rounded-3xl bg-darker border border-white/10 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                      Suite Reliability
                    </span>
                    <ShieldCheck className="w-5 h-5 text-success animate-pulse" />
                  </div>
                  <div className="text-3xl font-black font-mono text-success mb-2">
                    {passRateImprovement}%
                  </div>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    AI self-healing and robust locators guarantee near-flawless test pipeline builds.
                  </p>
                </div>
                <div className="w-full bg-dark rounded-full h-1.5 mt-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyber to-success h-full" style={{ width: `${passRateImprovement}%` }}></div>
                </div>
              </div>

              {/* Card 4: Architecture ROI Multiplier */}
              <div className="glass p-6 rounded-3xl bg-darker border border-white/10 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
                      Architecture ROI
                    </span>
                    <Zap className="w-5 h-5 text-amber" />
                  </div>
                  <div className="text-3xl font-black font-mono text-amber mb-2">
                    {roiMultiplier}x <span className="text-xs font-normal text-light">Speedup</span>
                  </div>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    Accelerated release cycles via parallel test sharding across CI/CD workers.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-cyber font-semibold">
                  <span>Explore Framework Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlakinessCalculator;
