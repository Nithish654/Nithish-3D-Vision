import { HERO_DATA } from '../constants';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { MetallicWordmark } from './ui/MetallicWordmark';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-white/10 bg-[#05070D]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#8FA5B7]">
        {/* Brand & Rights */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <MetallicWordmark size="sm" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
          </div>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>© {new Date().getFullYear()} NITHISH. Three.js 3D Digital Experience & Developer Portfolio.</span>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-5">
          <a
            href={HERO_DATA.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00E5FF] transition-colors"
            title="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={HERO_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00E5FF] transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${HERO_DATA.email}`}
            className="hover:text-[#00E5FF] transition-colors"
            title="Email"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-white hover:text-[#00E5FF] transition-colors ml-2 cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
