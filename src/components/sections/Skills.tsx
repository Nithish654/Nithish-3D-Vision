import { useState } from 'react';
import { SKILL_GROUPS } from '../../constants';
import { Terminal, Layout, Server, Database, Wrench, CheckCircle2, Sparkles } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, typeof Terminal> = {
    'Programming & Logic': Terminal,
    'Frontend Engineering': Layout,
    'Backend & APIs': Server,
    'AI & Data Analytics': Database,
    'Tools & Platforms': Wrench,
  };

  const filteredGroups = activeCategory === 'All'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter(g => g.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Glass Accents */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>02. Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Categorized Engineering Capabilities
            </h2>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] max-w-md">
            Direct, authentic mapping of languages, modern web frameworks, AI interfaces, and analytical tooling rendered on floating glass panels.
          </p>
        </div>

        {/* Category Filter Glass Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
              activeCategory === 'All'
                ? 'bg-[#00E5FF]/20 border-[#00E5FF]/60 text-white font-semibold shadow-[0_0_20px_rgba(0,229,255,0.25)] backdrop-blur-md'
                : 'glass-panel-subtle text-[#94A3B8] hover:text-white hover:border-white/20'
            }`}
          >
            All Categories
          </button>
          {SKILL_GROUPS.map((group) => {
            const Icon = categoryIcons[group.category] || Terminal;
            const active = activeCategory === group.category;
            return (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  active
                    ? 'bg-[#00E5FF]/20 border-[#00E5FF]/60 text-white font-semibold shadow-[0_0_20px_rgba(0,229,255,0.25)] backdrop-blur-md'
                    : 'glass-panel-subtle text-[#94A3B8] hover:text-white hover:border-white/20'
                }`}
              >
                <Icon size={13} className={active ? 'text-[#00E5FF]' : 'text-[#8FA5B7]'} />
                <span>{group.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Clusters Grid — Translucent Dark Glass Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const Icon = categoryIcons[group.category] || Terminal;
            return (
              <div
                key={group.category}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-[#00E5FF]/10 text-[#00E5FF] rounded-lg border border-[#00E5FF]/20">
                        <Icon size={16} />
                      </div>
                      <h3 className="text-base font-bold text-white font-display">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#8FA5B7] tabular-nums">
                      {group.skills.length} Items
                    </span>
                  </div>

                  <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Individual Translucent Glass Skill Cards */}
                  <div className="space-y-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="glass-panel-subtle hover:bg-[rgba(15,23,42,0.55)] hover:border-[#00E5FF]/40 rounded-xl p-3.5 transition-all group flex items-start justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span className="text-[9px] font-mono text-[#00E5FF] bg-[#00E5FF]/10 px-1.5 py-0.5 rounded border border-[#00E5FF]/20 uppercase">
                                Core
                              </span>
                            )}
                          </div>
                          {skill.note && (
                            <p className="text-[11px] font-mono text-[#94A3B8] mt-1 leading-normal">
                              {skill.note}
                            </p>
                          )}
                        </div>
                        <CheckCircle2 size={14} className="text-[#00E5FF]/70 shrink-0 mt-0.5 group-hover:text-[#00E5FF]" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-5 mt-6 border-t border-white/10 text-[11px] font-mono text-[#64748B] flex items-center justify-between">
                  <span>PRODUCTION READY</span>
                  <span className="text-[#00E5FF] font-medium">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
