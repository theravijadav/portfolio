import React, { useState, useEffect } from 'react';
import { Terminal, Palette, User, Check, Menu, X as CloseIcon, ShieldAlert } from 'lucide-react';

const Navbar = ({ cliMode, setCliMode, theme, setTheme, auditMode, setAuditMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Quality Core', href: '#skills' },
    { name: 'ROI Engine', href: '#roi' },
    { name: 'Test Suite', href: '#projects' },
    { name: 'CI/CD Log', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const themes = [
    { id: 'vscode', name: 'Pipeline Dark', color: 'bg-cyber' },
    { id: 'dracula', name: 'Dracula', color: 'bg-pink-500' },
    { id: 'nord', name: 'Nord', color: 'bg-cyan-500' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
        <a href="#" onClick={(e) => handleScrollTo(e, '#')} className={`text-2xl font-extrabold tracking-tighter text-gradient hover:opacity-80 transition-opacity flex items-center gap-2 select-none ${auditMode ? 'audit-box p-2' : ''}`}>
          {auditMode && <div className="audit-tag">data-testid="brand-logo"</div>}
          <Terminal className="w-6 h-6 text-cyber animate-pulse" />
          <span>Ravi Jadav</span>
        </a>

        {/* Desktop Nav Links */}
        <div className={`hidden lg:flex items-center gap-8 ${auditMode ? 'audit-box px-6 py-2' : ''}`}>
          {auditMode && <div className="audit-tag">role="navigation" [ARIA]</div>}
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-sm font-medium text-light/80 hover:text-cyber transition-colors duration-200">
              {link.name}
            </a>
          ))}
        </div>

        {/* Interactive Controls (Mode Toggle & Theme Picker & Audit Mode Toggle) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Global Audit Mode Switch */}
          <button
            onClick={() => setAuditMode(!auditMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-bold transition-all duration-300 ${
              auditMode
                ? 'bg-cyber/20 border-cyber text-cyber shadow-[0_0_15px_rgba(14,165,233,0.5)] animate-pulse'
                : 'bg-white/5 border-white/10 text-muted hover:border-white/20 hover:text-white'
            }`}
            title="Toggle Live WCAG & Selector Bounding Box Overlay"
          >
            <ShieldAlert className={`w-3.5 h-3.5 ${auditMode ? 'text-success animate-bounce' : ''}`} />
            <span>{auditMode ? 'AUDIT MODE: ON' : 'AUDIT MODE'}</span>
          </button>

          {/* Mode Toggle Switch */}
          <button
            onClick={() => setCliMode(!cliMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-300 ${
              cliMode
                ? 'bg-cyber/20 border-cyber text-cyber shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                : 'bg-white/5 border-white/10 text-light/80 hover:border-white/20'
            }`}
            title="Toggle Developer CLI / Recruiter Mode"
          >
            {cliMode ? <Terminal className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
            <span>{cliMode ? 'Dev CLI Mode' : 'Recruiter Mode'}</span>
          </button>

          {/* Theme Picker Dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-light/80 hover:border-cyber/50 transition-colors"
              title="Select IDE Theme"
            >
              <Palette className="w-3.5 h-3.5 text-secondary" />
              <span className="capitalize">{theme === 'vscode' ? 'Pipeline Dark' : theme}</span>
            </button>

            {themeMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl glass bg-darker/95 border border-white/15 shadow-2xl py-2 z-50 animate-fade-in font-mono text-xs">
                <div className="px-3 py-1 text-[10px] uppercase text-muted tracking-wider border-b border-white/10 mb-1">
                  IDE Theme Presets
                </div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left hover:bg-white/10 transition-colors ${
                      theme === t.id ? 'text-cyber font-bold' : 'text-light/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${t.color}`} />
                      <span>{t.name}</span>
                    </div>
                    {theme === t.id && <Check className="w-3.5 h-3.5 text-cyber" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="px-5 py-2 rounded-full border border-cyber/50 text-cyber hover:bg-cyber/10 transition-colors text-sm font-semibold">
            Hire Me
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setAuditMode(!auditMode)}
            className={`p-2 rounded-full border text-xs transition-all ${
              auditMode ? 'bg-cyber/20 border-cyber text-cyber animate-pulse' : 'bg-white/5 border-white/10 text-muted'
            }`}
            title="Audit Mode"
          >
            <ShieldAlert className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCliMode(!cliMode)}
            className={`p-2 rounded-full border text-xs transition-all ${
              cliMode ? 'bg-cyber/20 border-cyber text-cyber' : 'bg-white/5 border-white/10 text-light'
            }`}
            title="Mode"
          >
            {cliMode ? <Terminal className="w-4 h-4" /> : <User className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-light hover:text-cyber transition-colors"
          >
            {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass bg-darker/95 border-b border-white/10 px-6 py-6 space-y-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-light hover:text-cyber transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-xs uppercase text-muted font-bold tracking-wider">IDE Preset Theme</div>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-mono font-semibold transition-colors ${
                    theme === t.id ? 'bg-cyber/20 border-cyber text-cyber' : 'bg-white/5 border-white/10 text-light'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${t.color}`} />
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="block w-full py-3 text-center rounded-full bg-cyber text-white font-bold text-sm shadow-lg shadow-cyber/30">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
