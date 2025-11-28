import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Why Proce', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'AI Advisor', href: '#ai-advisor' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-brand-500 to-accent-purple flex items-center justify-center">
             <span className="font-bold text-white text-lg">P</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Proce
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-semibold"
          >
            데모 신청하기
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 md:hidden flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-white font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
             href="#contact"
             className="mt-2 w-full text-center py-3 bg-brand-600 rounded-lg text-white font-bold"
             onClick={() => setMobileMenuOpen(false)}
          >
            데모 신청하기
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;