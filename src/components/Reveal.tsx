import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Props = { children: ReactNode; delay?: number; className?: string };

/** Subtle fade-up on scroll. Renders a plain div when reduced motion is requested. */
export function Reveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
