import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => handleScrollTo(e, '#')} className="text-2xl font-bold tracking-tighter text-gradient hover:opacity-80 transition-opacity">
          Ravi Jadav
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="text-sm font-medium text-light/80 hover:text-primary transition-colors duration-200">
              {link.name}
            </a>
          ))}
        </div>
        <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hidden md:inline-block px-5 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors text-sm font-semibold">
          Hire Me
        </a>
        <button className="md:hidden text-light">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
