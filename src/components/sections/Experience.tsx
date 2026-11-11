import { useState } from 'react';
import { EXPERIENCES } from '../../constants';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, Sparkles } from 'lucide-react';

export function Experience() {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);

  const selectedExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>03. Professional Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Internship & Industry Experience
            </h2>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] max-w-md">
            All internship engagements preserved, highlighting hands-on contributions across data analytics, full-stack engineering, and enterprise Java applications.
          </p>
        </div>

        {/* Master-Detail Interactive Timeline Layout on Translucent Glass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Experience Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#00E5FF]/20 border-[#00E5FF]/60 shadow-[0_0_20px_rgba(0,229,255,0.2)] text-white backdrop-blur-md'
                      : 'glass-panel-subtle glass-panel-hover text-[#94A3B8] hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00E5FF] font-medium">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-[#64748B] tabular-nums">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-display mb-1 flex items-center justify-between">
                    <span>{exp.role}</span>
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${isSelected ? 'translate-x-1 text-[#00E5FF]' : 'text-transparent'}`}
                    />
                  </h3>

                  <div className="text-xs font-mono text-[#94A3B8]">
                    {exp.company}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Deep-Dive Glass Panel */}
          <div className="lg:col-span-7 glass-panel glass-panel-hover rounded-2xl p-6 sm:p-9 shadow-2xl">
            {/* Header Lockup */}
            <div className="pb-6 border-b border-white/10 mb-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8FA5B7] mb-2">
                <span className="flex items-center gap-1.5 text-[#00E5FF]">
                  <Briefcase size={13} />
                  <span>{selectedExp.type}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>{selectedExp.duration}</span>
                </span>
                {selectedExp.location && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      <span>{selectedExp.location}</span>
                    </span>
                  </>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                {selectedExp.role}
              </h3>

              <div className="text-sm font-mono text-[#00E5FF]">
                {selectedExp.company}
              </div>
            </div>

            {/* Core Responsibilities */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#7C4DFF] mb-4">
                KEY RESPONSIBILITIES & CONTRIBUTIONS
              </h4>
              <ul className="space-y-3 text-sm text-[#94A3B8] leading-relaxed">
                {selectedExp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-[#00E5FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Highlights */}
            {selectedExp.impactPoints && (
              <div className="mb-8 p-4 glass-panel-subtle rounded-xl">
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#38BDF8] mb-3">
                  MEASURABLE IMPACT
                </h4>
                <ul className="space-y-2 text-xs font-mono text-[#CBD5E1]">
                  {selectedExp.impactPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-[#00E5FF]">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Applied */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-3">
                TECHNOLOGY ENVIRONMENT
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedExp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 glass-panel-subtle rounded-lg text-xs font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
