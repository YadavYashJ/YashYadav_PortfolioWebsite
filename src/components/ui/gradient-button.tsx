import React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  disabled?: boolean;
};

const styles: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-blue-500 via-violet-500 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-violet-500/40 hover:brightness-110',
  secondary:
    'border border-slate-600/70 bg-slate-900/60 text-slate-100 hover:border-cyan-300/60 hover:bg-slate-800/70',
};

/** Link styled as a button (all our buttons navigate somewhere real). */
export const GradientButton = React.forwardRef<HTMLAnchorElement, Props>(
  ({ variant = 'primary', className, disabled, children, ...props }, ref) => (
    <a
      ref={ref}
      aria-disabled={disabled || undefined}
      className={cn(
        'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98]',
        styles[variant],
        disabled && 'pointer-events-none opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
);
GradientButton.displayName = 'GradientButton';
