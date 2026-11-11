import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function GlassCard({ children, className, hoverEffect = true }: { children: React.ReactNode, className?: string, hoverEffect?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!hoverEffect || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    // Limit rotation to 15 degrees
    setRotateX(yPct * 15);
    setRotateY(xPct * 15);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
      }}
      animate={{
        rotateX: rotateX * -1,
        rotateY: rotateY,
        transformPerspective: 1000
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:border-primary/50 transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
