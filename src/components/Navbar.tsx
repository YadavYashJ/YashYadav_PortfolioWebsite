import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolioData';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useResume, resumeUrl } from '@/hooks/useResume';
import { scrollToId } from '@/lib/scroll';
import { cn } from '@/lib/utils';

const ids = navLinks.map((l) => l.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);
  const resume = useResume();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  const resumeReady = resume === 'ready';

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'border-b border-white/10 bg-ink/80 backdrop-blur-md backdrop-saturate-150' : 'bg-transparent'
      )}
    >
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" onClick={go('home')} className="flex items-center gap-2 text-lg font-bold" aria-label={`${profile.name} - back to top`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={go(l.id)}
                aria-current={active === l.id ? 'page' : undefined}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active === l.id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resumeReady ? resumeUrl : '#resume'}
            {...(resumeReady ? { download: profile.resumeFileName } : { onClick: go('resume') })}
            className="hidden min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110 sm:inline-flex"
          >
            <Download size={16} aria-hidden /> Download Resume
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-200 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 px-4 pb-5 pt-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={go(l.id)}
                  aria-current={active === l.id ? 'page' : undefined}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-medium',
                    active === l.id ? 'bg-white/10 text-white' : 'text-slate-300'
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeReady ? resumeUrl : '#resume'}
                {...(resumeReady ? { download: profile.resumeFileName } : { onClick: go('resume') })}
                className="mt-2 flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-3 font-semibold text-white"
              >
                <Download size={18} aria-hidden /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
