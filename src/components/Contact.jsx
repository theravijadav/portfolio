import React from 'react';
import { Terminal, Send, Globe, FileText, CheckCircle2 } from 'lucide-react';

const Contact = ({ auditMode }) => {
  const footerLinks = [
    { name: 'GitHub', url: 'https://github.com/ravijadav-dev' },
    { name: 'Twitter', url: '' }, // Leave empty to hide
    { name: 'Resume', url: '/Ravi%20Jadav%20-%20Resume.pdf' }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-darker border-t border-white/5">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-cyber/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className={`max-w-4xl mx-auto px-6 text-center relative z-10 ${auditMode ? 'audit-box p-6' : ''}`}>
        {auditMode && <div className="audit-tag">section="contact-terminal" [ARIA]</div>}

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass bg-white/5 border border-white/10 mb-4 text-xs font-semibold text-cyber uppercase tracking-wider font-mono">
          <CheckCircle2 className="w-4 h-4 text-success" />
          <span>Stage 5: Production Deployment Complete</span>
        </div>

        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Let's Build <span className="text-gradient">Quality</span> Together.</h2>
        <p className="text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
          Whether you're looking to revolutionize your CI/CD pipeline, build a resilient automation framework from scratch, or simply connect.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20 font-mono">
          <a href="mailto:me@ravijadav.dev" className="px-8 py-4 bg-cyber text-darker rounded-full font-black text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(14,165,233,0.4)] w-full sm:w-auto flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Say Hello
          </a>
          <a href="https://linkedin.com/in/ravijadav" target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 border border-white/20">
            <svg className="w-4 h-4 text-cyber fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.5a1.59 1.59 0 0 0-1.59 1.59c0 .88.71 1.59 1.59 1.59.88 0 1.59-.71 1.59-1.59 0-.88-.71-1.59-1.59-1.59" />
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-muted">
          <p>© {new Date().getFullYear()} Ravi Jadav. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              link.url ? (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyber transition-colors flex items-center gap-1 font-bold"
                >
                  {link.name === 'Resume' ? <FileText className="w-3.5 h-3.5 text-success" /> : null}
                  {link.name}
                </a>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
