import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 text-center md:text-left", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <h4 className="text-accent font-mono text-sm tracking-wider uppercase mb-2">
            {subtitle}
          </h4>
        )}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative inline-block">
          {title}
          <div className="absolute -bottom-4 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </h2>
      </motion.div>
    </div>
  );
}
