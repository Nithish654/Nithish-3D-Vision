import { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';
import { ProjectModal } from '../ui/ProjectModal';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectedProject, setInspectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Data Analytics',
    'Generative AI',
    'Full Stack',
    'Research & Hardware',
    'Applications',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>04. Main Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Featured Systems & Research Works
            </h2>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] max-w-md">
            Dedicated visual identities for each milestone project across Business Intelligence, Generative AI, Full-Stack applications, and Optical Sensor research.
          </p>
        </div>

        {/* Filter Bar with Glass Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748B] mr-2">
            <Filter size={13} />
            <span>DOMAIN:</span>
          </div>
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  active
                    ? 'bg-[#00E5FF]/20 border-[#00E5FF]/60 text-white font-semibold shadow-[0_0_15px_rgba(0,229,255,0.25)] backdrop-blur-md'
                    : 'glass-panel-subtle text-[#94A3B8] hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid — Dark Translucent Glass Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Preview */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-black/40 cursor-pointer"
                  onClick={() => setInspectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,25,0.85)] via-transparent to-transparent" />

                  {/* Top Bar on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-white px-2.5 py-1 glass-panel-subtle rounded-md">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00E5FF] px-2.5 py-1 glass-panel-subtle rounded-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay Prompt */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="text-xs font-mono text-white/90 group-hover:text-[#00E5FF] transition-colors flex items-center gap-1.5">
                      <Sparkles size={13} />
                      <span>Click to inspect full architecture</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <h3
                    onClick={() => setInspectedProject(project)}
                    className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <div className="text-xs font-mono text-[#C4B5FD] mb-3">
                    {project.tagline}
                  </div>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* KPI Metrics Strip */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-6 p-3 glass-panel-subtle rounded-xl text-center">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-xs font-mono font-bold text-white tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-[#64748B] uppercase truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 glass-panel-subtle rounded-md text-[11px] font-mono text-[#8FA5B7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-[rgba(10,15,25,0.4)] flex items-center justify-between gap-3">
                <button
                  onClick={() => setInspectedProject(project)}
                  className="text-xs font-mono uppercase tracking-wider text-white hover:text-[#00E5FF] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Architecture</span>
                  <ArrowUpRight size={13} />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-[#8FA5B7] hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Exploration Dialog */}
      <ProjectModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />
    </section>
  );
}
