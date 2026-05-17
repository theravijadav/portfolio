import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Zap, Cpu, Server, Code2, Repeat, CheckCircle2, RefreshCw, GitBranch } from 'lucide-react';

const bentoNodes = [
  {
    id: 'playwright',
    title: 'Playwright & MCP Engine',
    subtitle: 'Enterprise E2E Automation Core',
    level: 95,
    span: 'lg:col-span-8',
    color: 'from-cyber/20 to-cyber/5 border-cyber/40',
    accent: 'text-cyber',
    icon: Code2,
    tags: ['TypeScript', 'Playwright MCP', 'Parallel Matrix', 'Sharding'],
    frontDesc: 'Architected robust Page Object Models (POM) and Playwright MCP server adapters for multi-browser, high-concurrency test automation.',
    backContent: {
      heading: 'Custom Configuration Architecture',
      specList: [
        'Parallel Execution: Configured 8-worker threads per runner with sharding distributed across 5 CI nodes.',
        'Playwright MCP: Integrated Model Context Protocol for automated AI test generation and debugging.',
        'Reporters: Multi-format outputs including Allure HTML reports, JUnit XML for CI parsing, and Winston JSON structured logs.',
        'Resilience: Dynamic auto-wait strategies and custom locator retry loops eliminating timing flakiness.'
      ]
    }
  },
  {
    id: 'cypress',
    title: 'Cypress Suite Optimizer',
    subtitle: 'Legacy Framework Architecture',
    level: 90,
    span: 'lg:col-span-4',
    color: 'from-purple-500/20 to-purple-500/5 border-purple-500/40',
    accent: 'text-purple-400',
    icon: Repeat,
    tags: ['Cypress', 'Network Intercepts', 'AST Parsers'],
    frontDesc: 'Managed and optimized extensive Cypress suites with advanced network stubbing and zero-leak memory management.',
    backContent: {
      heading: 'Migration & Optimization Strategy',
      specList: [
        'AST Conversion: Engineered automated AST parsers for seamless migration from Cypress to Playwright.',
        'Network Intercepts: Deep cy.intercept mocking matrix for reliable offline API simulation.',
        'Memory Optimization: Configured experimentalMemoryManagement to prevent out-of-memory crashes in CI.'
      ]
    }
  },
  {
    id: 'ai-healing',
    title: 'AI Self-Healing Adapters',
    subtitle: 'Zero-Maintenance Locator Engine',
    level: 90,
    span: 'lg:col-span-6',
    color: 'from-success/20 to-success/5 border-success/40',
    accent: 'text-success',
    icon: Zap,
    tags: ['OpenAI API', 'Claude 3.5 Sonnet', 'Vector Matching', 'Cursor AI'],
    frontDesc: 'Self-healing test runner adapters that dynamically intercept flaky locators and patch broken selectors in real-time.',
    backContent: {
      heading: 'Self-Healing Engine Architecture',
      specList: [
        'Exception Interceptor: Automatically catches Playwright TimeoutError and ElementNotInteractable exceptions.',
        'DOM Snapshotting: Captures live DOM tree structure and sends semantic vector embeddings to OpenAI/Claude.',
        'Dynamic Healing: Streams fallback selectors in under 1.5s and auto-resumes test without pipeline failure.',
        'Telemetry: Stores healed selectors in a Git patch queue for QA engineer review.'
      ]
    }
  },
  {
    id: 'cicd',
    title: 'CI/CD Pipeline Matrix',
    subtitle: 'Continuous Deployment Infrastructure',
    level: 90,
    span: 'lg:col-span-6',
    color: 'from-amber/20 to-amber/5 border-amber/40',
    accent: 'text-amber',
    icon: Server,
    tags: ['GitHub Actions', 'AWS KMS', 'Docker Containers', 'Bitbucket Pipelines'],
    frontDesc: 'Containerized headless test runners integrated directly into deployment gates with matrix build strategies.',
    backContent: {
      heading: 'DevOps & Pipeline Architecture',
      specList: [
        'Containerization: Custom lightweight Docker images preloaded with WebKit, Chromium, and Firefox binaries.',
        'AWS KMS Vault: Secure credential decryption for multi-org Salesforce and enterprise testing environments.',
        'Parallel Matrix Builds: Dynamic matrix job allocation reducing 45-minute test suites down to 6.2 minutes.',
        'Slack & Linear Alerts: Real-time webhook notifications with direct stack traces and video artifacts.'
      ]
    }
  },
  {
    id: 'contract',
    title: 'API Contract Sentinel',
    subtitle: 'OpenAPI 3.1 Schema Guard',
    level: 95,
    span: 'lg:col-span-12',
    color: 'from-cyber/20 via-purple-500/10 to-success/20 border-white/20',
    accent: 'text-cyber',
    icon: Shield,
    tags: ['Node.js', 'OpenAPI 3.1', 'Ajv Schema Validator', 'Pre-Commit Hooks', 'TDD/BDD'],
    frontDesc: 'Continuous automated contract testing engine preventing backend API regressions and schema drift across microservice endpoints.',
    backContent: {
      heading: 'Contract Verification Architecture',
      specList: [
        'Schema Diffing: Continuously monitors deployed OpenAPI specs against live backend response payloads.',
        'Ajv Validation: High-speed JSON schema validation enforcing strict type checking and required property rules.',
        'CI Gatekeeper: Fails build pipelines instantly if a breaking API response change is detected before UI deployment.',
        'Coverage Matrix: 100% contract validation across REST, GraphQL, and WebSocket streaming endpoints.'
      ]
    }
  }
];

const BentoCard = ({ node, auditMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = node.icon;

  return (
    <div
      className={`relative h-full min-h-[380px] sm:min-h-[400px] cursor-pointer perspective-1000 ${node.span} ${
        auditMode ? 'audit-box' : ''
      }`}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {auditMode && <div className="audit-tag">data-testid={`bento-${node.id}`} [FLIP CARD]</div>}

      <motion.div
        className="w-full h-full relative transform-style-3d transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Face */}
        <div
          className={`absolute inset-0 backface-hidden glass p-6 sm:p-8 rounded-3xl bg-darker/95 border ${node.color} flex flex-col justify-between overflow-y-auto scrollbar-none shadow-xl hover:shadow-2xl transition-shadow`}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner shrink-0">
                <Icon className={`w-6 h-6 ${node.accent}`} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-muted">COMPETENCY</span>
                <span className={`px-2.5 py-0.5 rounded font-mono font-black text-xs bg-white/5 border border-white/10 ${node.accent}`}>
                  {node.level}%
                </span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-1 tracking-tight">{node.title}</h3>
            <h4 className={`text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 ${node.accent}`}>{node.subtitle}</h4>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6 font-sans">{node.frontDesc}</p>
          </div>

          <div className="space-y-4 pt-4 mt-auto border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {node.tags.map((tag) => (
                <span key={tag} className="text-[10px] sm:text-[11px] font-semibold text-light bg-white/5 border border-white/10 px-2.5 py-1 rounded-full font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs text-cyber font-semibold pt-2 font-sans">
              <span className="flex items-center gap-1.5 animate-pulse">
                <RefreshCw className="w-3.5 h-3.5 shrink-0" /> Hover or click for spec
              </span>
              <span className="shrink-0 font-bold font-mono">Flip →</span>
            </div>
          </div>
        </div>

        {/* Back Face (3D Flipped) */}
        <div
          className="absolute inset-0 backface-hidden glass p-6 sm:p-8 rounded-3xl bg-darker border border-cyber shadow-2xl flex flex-col justify-between overflow-y-auto scrollbar-none"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyber uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber shrink-0" /> Architecture Spec
              </span>
              <span className="text-[9px] sm:text-[10px] bg-cyber/20 text-cyber border border-cyber/30 px-2 py-0.5 rounded font-mono uppercase font-bold shrink-0">
                Active Node
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white mb-4 tracking-tight">{node.backContent.heading}</h4>
            
            <ul className="space-y-3 font-sans text-[11px] sm:text-xs text-light/90">
              {node.backContent.specList.map((spec, sIdx) => {
                const parts = spec.split(':');
                return (
                  <li key={sIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white font-semibold">{parts[0]}:</strong> {parts[1]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-muted font-sans">
            <span className="flex items-center gap-1">
              <GitBranch className="w-3.5 h-3.5 text-cyber shrink-0" /> Version Controlled
            </span>
            <span className="text-cyber font-semibold font-mono shrink-0">← Back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Skills = ({ auditMode }) => {
  return (
    <section id="skills" className="py-12 relative z-10 border-t border-white/5 bg-darker/60">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyber/5 via-transparent to-purple-500/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col items-center text-center mb-16 ${auditMode ? 'audit-box p-4' : ''}`}>
          {auditMode && <div className="audit-tag">section="bento-tech-matrix" [ARIA]</div>}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass bg-white/5 border border-white/10 mb-4 text-xs font-semibold text-success uppercase tracking-wider">
            <Terminal className="w-4 h-4 text-success" />
            <span>Stage 2: Quality Core</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Bento-Grid <span className="text-gradient">Tech Matrix</span>
          </h2>
          <p className="text-muted max-w-2xl text-sm md:text-base leading-relaxed">
            Core technology stack structured into interactive environment nodes. Hover over or click any node card to flip it and reveal custom configuration and parallel execution architectures.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {bentoNodes.map((node) => (
            <BentoCard key={node.id} node={node} auditMode={auditMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
