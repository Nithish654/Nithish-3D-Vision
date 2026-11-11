import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@react-three/drei';
import { Sparkles } from 'lucide-react';
import { MetallicWordmark } from './ui/MetallicWordmark';

export function Loader({ onComplete }: { onComplete: () => void }) {
  const { progress, active } = useProgress();
  const [displayPercent, setDisplayPercent] = useState(0);

  // Smoothly increment display percentage up to the actual loaded progress
  useEffect(() => {
    const target = Math.max(Math.round(progress), 15);
    const interval = setInterval(() => {
      setDisplayPercent((prev) => {
        if (prev < target) {
          return prev + 1;
        }
        if (prev >= 100 && !active) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
        }
        return prev;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [progress, active, onComplete]);

  // Fallback timer in case progress doesn't trigger active false
  useEffect(() => {
    const fallback = setTimeout(() => {
      setDisplayPercent(100);
      setTimeout(onComplete, 400);
    }, 2800);
    return () => clearTimeout(fallback);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06080E] text-white font-mono px-6 select-none"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center text-center">
        {/* Brand Reveal */}
        <div className="mb-8">
          <MetallicWordmark size="md" />
        </div>

        {/* Loading Progress Box with Glassmorphism */}
        <div className="w-full glass-panel rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
          {/* Progress Bar Track */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00E5FF] to-[#7C4DFF] rounded-full"
              style={{ width: `${displayPercent}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Numerical Percentage & Status */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#8FA5B7] flex items-center gap-1.5">
              <Sparkles size={13} className="text-[#00E5FF]" />
              <span>INITIALIZING DIGITAL ENVIRONMENT</span>
            </span>
            <span className="text-white font-bold tabular-nums text-sm">
              {displayPercent}%
            </span>
          </div>

          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
            <span>ENGINE: THREE.JS / WEBGL</span>
            <span className="text-[#00E5FF]">READY</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
