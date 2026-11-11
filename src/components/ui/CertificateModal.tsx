import { Certificate } from '../../types';
import { X, ExternalLink, Award, ShieldCheck, Calendar, Building } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl glass-panel border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
            <Award size={16} />
            <span>VERIFIED CREDENTIAL</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8FA5B7] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#7C4DFF] block mb-1">
              {certificate.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
              {certificate.title}
            </h3>
          </div>

          <div className="p-4 bg-[#0B101D] border border-white/5 rounded-xl space-y-3 text-xs font-mono">
            <div className="flex items-center justify-between">
              <span className="text-[#8FA5B7] flex items-center gap-1.5">
                <Building size={13} />
                <span>Issuing Body</span>
              </span>
              <span className="text-white font-medium">{certificate.issuer}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#8FA5B7] flex items-center gap-1.5">
                <Calendar size={13} />
                <span>Issue Year</span>
              </span>
              <span className="text-white font-medium tabular-nums">{certificate.date}</span>
            </div>

            {certificate.credentialId && (
              <div className="flex items-center justify-between">
                <span className="text-[#8FA5B7] flex items-center gap-1.5">
                  <ShieldCheck size={13} />
                  <span>Credential ID</span>
                </span>
                <span className="text-[#00E5FF] font-mono">{certificate.credentialId}</span>
              </div>
            )}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            {certificate.link ? (
              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] hover:opacity-90 text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all"
              >
                <span>Verify on Official Portal</span>
                <ExternalLink size={14} />
              </a>
            ) : (
              <div className="w-full py-3 bg-[#0F172A] border border-white/10 rounded-lg text-xs font-mono text-[#8FA5B7] text-center">
                Credential verified internally via institutional records
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
