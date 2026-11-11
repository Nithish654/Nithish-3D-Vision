import { useState, FormEvent } from 'react';
import { HERO_DATA } from '../../constants';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>07. Initiate Communication</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Let's Build Something Exceptional
            </h2>
          </div>
          <p className="text-sm font-mono text-[#94A3B8] max-w-md">
            Direct channel for engineering opportunities, technical collaborations, and data analytics inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Telemetry Glass Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-[#00E5FF] pb-3 border-b border-white/10 font-semibold">
                DIRECT CONTACT CHANNELS
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#00E5FF]/10 text-[#00E5FF] rounded-xl border border-[#00E5FF]/20 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8FA5B7]">EMAIL INQUIRY</div>
                  <a
                    href={`mailto:${HERO_DATA.email}`}
                    className="text-sm sm:text-base font-mono font-medium text-white hover:text-[#00E5FF] transition-colors break-all"
                  >
                    {HERO_DATA.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7C4DFF]/10 text-[#7C4DFF] rounded-xl border border-[#7C4DFF]/20 shrink-0">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8FA5B7]">LINKEDIN NETWORK</div>
                  <a
                    href={HERO_DATA.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm sm:text-base font-mono font-medium text-white hover:text-[#00E5FF] transition-colors flex items-center gap-1"
                  >
                    <span>in/nithish-v-j</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 text-[#94A3B8] rounded-xl border border-white/10 shrink-0">
                  <Github size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8FA5B7]">GITHUB REPOSITORIES</div>
                  <a
                    href={HERO_DATA.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm sm:text-base font-mono font-medium text-white hover:text-[#00E5FF] transition-colors flex items-center gap-1"
                  >
                    <span>github.com/nithish654</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="p-3 bg-[#00E5FF]/10 text-[#00E5FF] rounded-xl border border-[#00E5FF]/20 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8FA5B7]">LOCATION & COORDINATES</div>
                  <div className="text-sm font-mono text-white font-medium">
                    {HERO_DATA.location}
                  </div>
                  <div className="text-xs font-mono text-[#64748B] mt-0.5">
                    {HERO_DATA.coordinates}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form Glass Panel */}
          <div className="lg:col-span-7 glass-panel glass-panel-hover rounded-2xl p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Transmitted
                </h3>
                <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your communication has been dispatched to{' '}
                  <span className="text-[#00E5FF] font-mono">{HERO_DATA.email}</span>. I will respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-6 px-6 py-2.5 glass-panel-subtle hover:bg-white/10 text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8FA5B7] mb-2">
                      Your Name <span className="text-[#00E5FF]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 glass-panel-subtle rounded-xl text-sm font-mono text-white placeholder-[#64748B] focus:outline-none focus:border-[#00E5FF]/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8FA5B7] mb-2">
                      Email Address <span className="text-[#00E5FF]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 glass-panel-subtle rounded-xl text-sm font-mono text-white placeholder-[#64748B] focus:outline-none focus:border-[#00E5FF]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8FA5B7] mb-2">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack / Data Analytics Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 glass-panel-subtle rounded-xl text-sm font-mono text-white placeholder-[#64748B] focus:outline-none focus:border-[#00E5FF]/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8FA5B7] mb-2">
                    Detailed Message <span className="text-[#00E5FF]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project requirements, scope, or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 glass-panel-subtle rounded-xl text-sm font-mono text-white placeholder-[#64748B] focus:outline-none focus:border-[#00E5FF]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] hover:opacity-90 text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,229,255,0.3)] transition-all cursor-pointer"
                >
                  <Send size={15} />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
