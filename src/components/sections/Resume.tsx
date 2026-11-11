import { useState } from 'react';
import { Download, FileText, CheckCircle, Sparkles } from 'lucide-react';

export function Resume() {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'fullstack' | 'ai'>('overview');

  const competencies = {
    overview: [
      'B.E. Electronics & Communication Engineering (St. Joseph’s Institute of Technology, CGPA 7.6)',
      'Data Analytics Trainee & Intern at Analytics Avenue (Python, SQL, Power BI, EDA, Statistics)',
      'Full Stack Developer Intern at Zaalima Pvt. Ltd. (React.js, Node.js, AI API Integration)',
      '22 Verified Professional Credentials (IBM Full Stack, Azure AI Agent, Apollo GraphQL, API Academy)',
      'Author of research in Surface Plasmon Resonance (SPR) sensing with photonic crystal fibers',
    ],
    analytics: [
      'Data Cleansing & Normalization: Removing multi-source duplicates and handling missing values with 99.8% data fidelity',
      'Exploratory Data Analysis (EDA): Statistical distribution profiling, correlation discovery, and KPI modeling',
      'Power BI Command Centers: DAX measures, relational data modeling, dynamic drill-through, executive reports',
      'Statistical Formulation: Hypothesis testing, cohort conversion trends, and marketing channel attribution',
    ],
    fullstack: [
      'Modern Frontend: React.js, Tailwind CSS, TypeScript, modern hooks, responsive viewport architectures',
      'Backend Systems: Node.js, Express, RESTful API contract specifications, middleware authorization',
      'Databases & Storage: SQL schema normalization (3NF), Supabase, Firebase, query optimization',
      'Version Control & CI/CD: Git, GitHub Actions, repository health auditing, automated regression sweeps',
    ],
    ai: [
      'Generative AI Integrations: Gemini API, multi-turn prompt engineering, agentic workflow orchestration',
      'Automated Quality Assurance: BugNexus headless automated testing, AI layout displacement detection',
      'Security Monitoring: GitGuard automated vulnerability pattern scanning and dependency health tracking',
      'Group Travel Intelligence: TripTribe collaborative itinerary synthesis using vector preferences',
    ],
  };

  return (
    <section id="resume" className="relative py-28 px-6 md:px-12 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>06. Professional Document</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Curriculum Vitae & Qualifications
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="./Nithish_VJ_Resume.pdf"
              download="Nithish_VJ_Resume.pdf"
              className="px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] hover:opacity-90 text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all cursor-pointer"
            >
              <Download size={14} />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>

        {/* Resume Translucent Glass Inspection Panel */}
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-10 shadow-2xl">
          {/* Top Document Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-[#00E5FF]" />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  NITHISH — RESUME
                </h3>
              </div>
              <p className="text-xs font-mono text-[#8FA5B7] mt-1">
                Data Analyst · Full Stack Developer · Electronics & Communication Engineer
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#64748B]">LOCATION:</span>
              <span className="text-xs font-mono text-white">Tamil Nadu, India</span>
            </div>
          </div>

          {/* Competency Focus Glass Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
            {(['overview', 'analytics', 'fullstack', 'ai'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  activeTab === tab
                    ? 'bg-[#00E5FF]/20 border-[#00E5FF]/60 text-white font-semibold shadow-[0_0_15px_rgba(0,229,255,0.2)] backdrop-blur-md'
                    : 'glass-panel-subtle text-[#94A3B8] hover:text-white'
                }`}
              >
                {tab === 'overview' && 'Executive Summary'}
                {tab === 'analytics' && 'Data Analytics Focus'}
                {tab === 'fullstack' && 'Full Stack Engineering'}
                {tab === 'ai' && 'AI & Automation'}
              </button>
            ))}
          </div>

          {/* Competencies List on Translucent Glass Cards */}
          <div className="space-y-3.5 mb-10">
            {competencies[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="glass-panel-subtle hover:border-[#00E5FF]/30 p-4 rounded-xl flex items-start gap-3 transition-colors"
              >
                <CheckCircle size={16} className="text-[#00E5FF] shrink-0 mt-0.5" />
                <span className="text-sm text-[#CBD5E1] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Notice & Direct CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-[#64748B] text-center sm:text-left">
              PDF file name: <code className="text-white">Nithish_VJ_Resume.pdf</code> (place inside your project's <code className="text-[#00E5FF]">/public</code> folder).
            </p>
            <a
              href="./Nithish_VJ_Resume.pdf"
              download="Nithish_VJ_Resume.pdf"
              className="text-xs font-mono uppercase tracking-wider text-[#00E5FF] hover:underline flex items-center gap-1.5"
            >
              <span>Download Official PDF</span>
              <Download size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
