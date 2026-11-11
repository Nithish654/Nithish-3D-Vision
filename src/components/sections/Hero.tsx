import { HERO_DATA } from '../../constants';
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Sparkles, Gauge } from 'lucide-react';
import { MetallicWordmark } from '../ui/MetallicWordmark';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Semantic Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Metadata Bar (Zero-pill discipline: unboxed text with typographic separators) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8FA5B7] mb-5">
            <span className="flex items-center gap-1.5 text-[#00E5FF]">
              <MapPin size={13} />
              <span>{HERO_DATA.location}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{HERO_DATA.coordinates}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#94A3B8]">{HERO_DATA.availability}</span>
          </div>

          {/* Subheading Kicker */}
          <div className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center gap-2">
            <Gauge size={13} />
            <span>{HERO_DATA.title}</span>
          </div>

          {/* Primary Name Branding Reveal */}
          <div className="mb-4">
            <MetallicWordmark size="hero" />
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.12] mb-5 text-balance">
            {HERO_DATA.headline}
          </h1>

          {/* Lead Paragraph */}
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8">
            Electronics & Communication Engineering graduate crafting high-performance 3D WebGL experiences, full-stack systems, generative AI workflows, and business intelligence dashboards.
          </p>

          {/* Primary Action Row with Verified Working Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] hover:opacity-95 text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-lg shadow-[0_0_25px_rgba(0,229,255,0.35)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles size={14} />
              <span>Explore My Work</span>
            </a>

            <a
              href="./Nithish_VJ_Resume.pdf"
              download="Nithish_VJ_Resume.pdf"
              className="px-6 py-3.5 bg-[#0F172A]/90 hover:bg-[#1E293B] text-white border border-white/15 hover:border-white/30 text-xs font-mono uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download size={14} className="text-[#00E5FF]" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Channels & Proof Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 w-full text-xs font-mono text-[#8FA5B7]">
            <a
              href={HERO_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#00E5FF] transition-colors"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={HERO_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#00E5FF] transition-colors"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${HERO_DATA.email}`}
              className="flex items-center gap-1.5 hover:text-[#00E5FF] transition-colors"
            >
              <Mail size={14} />
              <span>{HERO_DATA.email}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Digital System Telemetry HUD */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end z-10 pointer-events-none sm:pointer-events-auto">
          <div className="w-full max-w-sm glass-panel glass-panel-hover rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#00E5FF] pb-3 border-b border-white/10 flex items-center justify-between">
              <span>SYSTEM TELEMETRY</span>
              <span className="text-[#8FA5B7]">DIGITAL LAB</span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-baseline justify-between py-1">
                <span className="text-xs font-mono text-[#8FA5B7]">ENGINEERING</span>
                <span className="text-xs font-mono font-bold text-white">Full-Stack · AI · BI</span>
              </div>
              <div className="flex items-baseline justify-between py-1">
                <span className="text-xs font-mono text-[#8FA5B7]">GRAPHICS PIPELINE</span>
                <span className="text-xs font-mono font-bold text-[#00E5FF]">Three.js / PBR</span>
              </div>
              <div className="flex items-baseline justify-between py-1">
                <span className="text-xs font-mono text-[#8FA5B7]">ACADEMIC HONORS</span>
                <span className="text-xs font-mono font-bold text-white">B.E. ECE (7.6 CGPA)</span>
              </div>
              <div className="flex items-baseline justify-between py-1">
                <span className="text-xs font-mono text-[#8FA5B7]">VERIFIED BADGES</span>
                <span className="text-xs font-mono font-bold text-[#C4B5FD] tabular-nums">22 Certifications</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#64748B] flex items-center justify-between">
              <span>ROTATE / INSPECT 3D ENVIRONMENT</span>
              <span className="text-[#00E5FF]">REAL-TIME 3D</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-6 md:left-12 flex items-center gap-2 text-xs font-mono text-[#64748B] tracking-wider pointer-events-none">
        <ArrowDown size={14} className="animate-bounce text-[#00E5FF]" />
        <span>SCROLL FOR CINEMATIC TRANSITION</span>
      </div>
    </section>
  );
}
