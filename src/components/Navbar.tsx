import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MetallicWordmark } from './ui/MetallicWordmark';

interface NavbarProps {
  activeSection?: string;
}

export function Navbar({ activeSection = 'home' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#home' },
    { label: 'Journey', href: '#about' },
    { label: 'Arsenal', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Showcase', href: '#projects' },
    { label: 'Credentials', href: '#certificates' },
    { label: 'Resume', href: '#resume' },
    { label: 'Connect', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#06080E]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#06080E]/80 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark (NITHISH with metallic shimmer) */}
          <a
            href="#home"
            className="flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5FF] rounded"
            aria-label="Nithish Homepage"
          >
            <MetallicWordmark size="md" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
          </a>

          {/* Zone 2: DESKTOP PERSISTENT HORIZONTAL NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-all whitespace-nowrap shrink-0 relative py-1 hover:text-white ${
                    isActive ? 'text-[#00E5FF] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E5FF] rounded-full shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger Button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-[#0F172A] hover:bg-[#1E293B] border border-white/15 hover:border-[#00E5FF]/50 rounded-lg transition-all shadow-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.25)]"
            >
              <span>Initiate Contact</span>
              <ArrowUpRight size={13} className="text-[#00E5FF]" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#94A3B8] hover:text-white bg-white/5 border border-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION PANEL */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#06080E]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 animate-fade-in">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5"
            >
              <MetallicWordmark size="md" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#94A3B8] hover:text-white bg-white/5 border border-white/10 rounded-lg"
              aria-label="Close navigation"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="flex flex-col gap-4 my-auto">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg sm:text-xl font-display font-bold uppercase tracking-wider py-2 transition-all flex items-center justify-between border-b border-white/5 ${
                    isActive ? 'text-[#00E5FF]' : 'text-[#CBD5E1] hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#64748B]">0{idx + 1}</span>
                </a>
              );
            })}
          </nav>

          {/* Bottom Drawer CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center text-xs font-mono uppercase tracking-wider font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              Initiate Contact
            </a>
            <div className="text-center text-[11px] font-mono text-[#64748B]">
              NITHISH · TAMIL NADU, INDIA
            </div>
          </div>
        </div>
      )}
    </>
  );
}
