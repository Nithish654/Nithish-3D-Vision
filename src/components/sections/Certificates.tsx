import { useState } from 'react';
import { CERTIFICATES } from '../../constants';
import { Certificate } from '../../types';
import { CertificateModal } from '../ui/CertificateModal';
import { ExternalLink, Search, ShieldCheck, Sparkles } from 'lucide-react';

export function Certificates() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const filterTabs = [
    { label: 'All Badges (22)', value: 'All' },
    { label: 'IBM / Coursera (16)', value: 'IBM / Coursera' },
    { label: 'Microsoft (1)', value: 'Microsoft' },
    { label: 'API Architecture (2)', value: 'Specialized Architecture' },
    { label: 'Other Credentials (3)', value: 'Other' },
  ];

  const filteredCertificates = CERTIFICATES.filter((cert) => {
    const matchesCategory =
      selectedFilter === 'All' ? true : cert.category === selectedFilter;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.credentialId && cert.credentialId.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="relative py-28 px-6 md:px-12 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>05. Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              22 Professional Certifications
            </h2>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] max-w-md">
            Complete inventory of all 22 certificates retained with direct Coursera, Microsoft, and API Academy verification links.
          </p>
        </div>

        {/* Controls: Category Glass Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
          {/* Category Glass Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  selectedFilter === tab.value
                    ? 'bg-[#00E5FF]/20 border-[#00E5FF]/60 text-white font-semibold shadow-[0_0_15px_rgba(0,229,255,0.2)] backdrop-blur-md'
                    : 'glass-panel-subtle text-[#94A3B8] hover:border-white/20 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box on Glass */}
          <div className="relative w-full lg:w-72">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Search 22 credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 glass-panel-subtle rounded-xl text-xs font-mono text-white placeholder-[#64748B] focus:outline-none focus:border-[#00E5FF]/60 transition-colors"
            />
          </div>
        </div>

        {/* Certificates Grid — Floating Translucent Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                {/* Header Lockup */}
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#00E5FF] flex items-center gap-1 text-[11px] font-medium">
                    <ShieldCheck size={13} />
                    <span>{cert.issuer}</span>
                  </span>
                  <span className="text-[#64748B] tabular-nums text-[11px]">{cert.date}</span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setActiveCert(cert)}
                  className="text-sm font-semibold text-white group-hover:text-[#00E5FF] transition-colors line-clamp-2 cursor-pointer leading-snug mb-3"
                >
                  {cert.title}
                </h3>
              </div>

              {/* Footer Row */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                {cert.credentialId && (
                  <span className="text-[10px] text-[#64748B] truncate max-w-[150px]">
                    ID: {cert.credentialId}
                  </span>
                )}
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto text-[11px] text-[#00E5FF] hover:underline flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="ml-auto text-[11px] text-[#8FA5B7] hover:text-white"
                  >
                    Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="py-12 text-center text-xs font-mono text-[#64748B]">
            No certificate matched "{searchQuery}". Try searching for Python, Docker, AI, or React.
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      <CertificateModal
        certificate={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}
