import { Project } from '../../types';
import { X, ExternalLink, Github, Layers, Cpu, CheckCircle, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl glass-panel border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[rgba(10,15,25,0.5)]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#00E5FF] px-2 py-0.5 bg-[#00E5FF]/10 rounded border border-[#00E5FF]/20">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-[#8FA5B7]">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8FA5B7] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Hero Visual Preview */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#00E5FF] mt-1">
                  {project.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-white/10">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] hover:opacity-90 text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-lg flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all"
              >
                <span>Launch Live System</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white border border-white/15 text-xs font-mono uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors"
              >
                <Github size={14} />
                <span>Source Repository</span>
              </a>
            )}
          </div>

          {/* Core Architecture Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#7C4DFF] mb-3">
              SYSTEM OVERVIEW
            </h4>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architectural Details & Engineering Highlights */}
          {project.architectureDetails && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
                ARCHITECTURAL SPECIFICATIONS
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#CBD5E1]">
                {project.architectureDetails.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 bg-[#0B0F1C] border border-white/5 rounded-xl">
                    <CheckCircle size={15} className="text-[#00E5FF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* KPI Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-3 bg-[#0C1220] border border-white/5 rounded-xl text-center">
                  <div className="text-base font-display font-bold text-white tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono text-[#8FA5B7] uppercase tracking-wider mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Array */}
          <div className="pt-4 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#64748B] mb-3">
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 bg-[#0F172A] border border-white/10 rounded-lg text-xs font-mono text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
