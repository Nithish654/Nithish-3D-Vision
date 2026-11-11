import { useState } from 'react';
import { EDUCATION, TIMELINE_MILESTONES } from '../../constants';
import { GraduationCap, Award, Compass, ArrowRight, Sparkles } from 'lucide-react';

export function About() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>01. Journey & Foundations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Bridging Hardware, AI & Full-Stack Systems
            </h2>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] max-w-md">
            Electronics & Communication Engineering background combined with enterprise data analytics and modern WebGL development.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-[#94A3B8] text-base leading-relaxed">
            <p>
              I am an <span className="text-white font-medium">Electronics and Communication Engineering graduate</span> from{' '}
              <span className="text-[#00E5FF]">St. Joseph's Institute of Technology</span> (CGPA: 7.6/10). My engineering foundation taught me how signals propagate, how microprocessors think, and how hardware architectures execute logic at the lowest level.
            </p>
            <p>
              Driven by curiosity for digital user experiences, I expanded my technical domain into full-stack software development with Java and React, automated QA engines, Generative AI agent architectures, and business intelligence with Power BI and Python.
            </p>
            <p>
              Today, I operate at the intersection of <span className="text-white font-medium">3D interactive engineering</span>, <span className="text-white font-medium">production software systems</span>, and <span className="text-white font-medium">data analytics</span>—transforming raw datasets and complex system logic into intuitive, high-performance digital tools.
            </p>

            {/* Core Competency Floating Glass Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="glass-panel-subtle glass-panel-hover p-4 rounded-xl">
                <div className="text-[#00E5FF] mb-1 font-semibold">HARDWARE & EMBEDDED</div>
                <div className="text-white font-medium">ECE Graduate · IoT Systems</div>
              </div>
              <div className="glass-panel-subtle glass-panel-hover p-4 rounded-xl">
                <div className="text-[#7C4DFF] mb-1 font-semibold">AI & AUTOMATION</div>
                <div className="text-white font-medium">Generative Agents · QA</div>
              </div>
              <div className="glass-panel-subtle glass-panel-hover p-4 rounded-xl">
                <div className="text-[#38BDF8] mb-1 font-semibold">DATA ANALYTICS</div>
                <div className="text-white font-medium">Power BI · EDA · Python</div>
              </div>
            </div>
          </div>

          {/* Education Breakdown — Translucent Glass Panel */}
          <div className="lg:col-span-5 glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00E5FF] pb-4 border-b border-white/10 mb-6">
              <GraduationCap size={16} />
              <span>Academic Credentials</span>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="group">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-[#8FA5B7] tabular-nums shrink-0 ml-2">
                      {edu.year}
                    </span>
                  </div>
                  <div className="text-xs text-[#00E5FF] font-mono mb-2">
                    {edu.institution}
                  </div>
                  {edu.grade && (
                    <div className="text-xs font-mono text-[#C4B5FD] mb-2 font-medium">
                      {edu.grade}
                    </div>
                  )}
                  <ul className="text-xs text-[#94A3B8] space-y-1">
                    {edu.description.map((desc, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Evolutionary Journey Timeline */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#7C4DFF] mb-1">
                PROGRESSIVE MILESTONES
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Evolutionary Engineering Timeline
              </h3>
            </div>
            <div className="text-xs font-mono text-[#8FA5B7] hidden sm:block">
              Click milestone to inspect phase focus
            </div>
          </div>

          {/* Phase Nav Pill Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
            {TIMELINE_MILESTONES.map((milestone, idx) => (
              <button
                key={milestone.phase}
                onClick={() => setActivePhase(idx)}
                className={`p-3.5 text-left rounded-xl font-mono text-xs transition-all cursor-pointer border ${
                  activePhase === idx
                    ? 'bg-[#00E5FF]/20 border-[#00E5FF]/60 text-white shadow-[0_0_15px_rgba(0,229,255,0.25)] backdrop-blur-md'
                    : 'glass-panel-subtle text-[#8FA5B7] hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="text-[10px] text-[#00E5FF] font-semibold">{milestone.phase}</div>
                <div className="font-medium truncate mt-0.5">{milestone.title}</div>
                <div className="text-[10px] text-[#64748B] tabular-nums mt-0.5">{milestone.period}</div>
              </button>
            ))}
          </div>

          {/* Detailed Active Phase Inspection Glass Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4">
              <div>
                <span className="text-xs font-mono text-[#00E5FF] mr-2">
                  {TIMELINE_MILESTONES[activePhase].phase}
                </span>
                <span className="text-lg font-bold text-white font-display">
                  {TIMELINE_MILESTONES[activePhase].title}
                </span>
              </div>
              <span className="text-xs font-mono text-[#8FA5B7] tabular-nums">
                {TIMELINE_MILESTONES[activePhase].period} · {TIMELINE_MILESTONES[activePhase].institution}
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              {TIMELINE_MILESTONES[activePhase].summary}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#64748B]">Core Competencies:</span>
              {TIMELINE_MILESTONES[activePhase].skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 glass-panel-subtle rounded-md text-xs font-mono text-[#C4B5FD]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
