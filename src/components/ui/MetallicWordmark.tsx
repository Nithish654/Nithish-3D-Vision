interface MetallicWordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export function MetallicWordmark({ className = '', size = 'md' }: MetallicWordmarkProps) {
  const sizeClasses = {
    sm: 'text-sm tracking-[0.2em]',
    md: 'text-xl tracking-[0.22em]',
    lg: 'text-3xl tracking-[0.25em]',
    hero: 'text-5xl sm:text-7xl md:text-8xl tracking-[0.18em]',
  };

  return (
    <span
      className={`relative inline-block font-display font-black uppercase select-none ${sizeClasses[size]} ${className}`}
    >
      {/* Polished Metallic Gradient Base */}
      <span className="bg-gradient-to-r from-[#E2E8F0] via-[#FFFFFF] via-[#94A3B8] via-[#F8FAFC] to-[#CBD5E1] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.12)]">
        NITHISH
      </span>

      {/* Shimmering Metallic Specular Light Sweep */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent bg-clip-text text-transparent pointer-events-none animate-shimmer-sweep"
        style={{
          backgroundSize: '200% 100%',
        }}
      >
        NITHISH
      </span>
    </span>
  );
}
