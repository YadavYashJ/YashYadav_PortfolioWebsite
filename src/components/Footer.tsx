import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { githubUrl, navLinks, profile } from '@/data/portfolioData';
import { scrollToId } from '@/lib/scroll';

export function Footer() {
  const year = new Date().getFullYear();
  const social = 'grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/60 hover:text-white';

  return (
    <footer className="border-t border-white/10 bg-panel/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold gradient-text">{profile.name}</p>
          <p className="mt-2 text-sm text-slate-400">{profile.tagline}</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollToId(l.id); }}
                   className="inline-flex min-h-[36px] items-center text-slate-400 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-start gap-3 md:justify-end">
          <a href={githubUrl} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className={social}><Github size={18} /></a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className={social}><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className={social}><Mail size={18} /></a>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-500 sm:flex-row sm:px-6">
          <p>© {year} {profile.name}. Built with React.</p>
          <button type="button" onClick={() => scrollToId('home')}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 px-4 text-slate-300 transition hover:border-cyan-300/60 hover:text-white">
            <ArrowUp size={16} aria-hidden /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
