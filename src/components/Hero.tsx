import { useState } from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { githubUrl, profile } from '@/data/portfolioData';
import { useResume, resumeUrl } from '@/hooks/useResume';
import { scrollToId } from '@/lib/scroll';
import { GradientButton } from '@/components/ui/gradient-button';
import { Reveal } from './Reveal';

export function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const resume = useResume();
  const resumeReady = resume === 'ready';

  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 md:pt-28">
      {/* decorative glow + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <Reveal className="order-2 text-center md:order-1 md:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-medium text-cyan-200 sm:text-sm">
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-cyan-300" aria-hidden />
            {profile.badge}
          </span>
          <p className="text-lg text-slate-300">Hello, I&apos;m</p>
          <h1 className="mt-1 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-slate-100 sm:text-xl">{profile.tagline}</p>
          <p className="mx-auto mt-4 max-w-xl text-slate-400 md:mx-0">{profile.intro}</p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row md:justify-start">
            <GradientButton
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('projects');
              }}
            >
              Explore My Work <ArrowDown size={16} aria-hidden />
            </GradientButton>
            <GradientButton
              variant="secondary"
              href={resumeReady ? resumeUrl : '#resume'}
              {...(resumeReady
                ? { download: profile.resumeFileName }
                : { onClick: (e: React.MouseEvent) => { e.preventDefault(); scrollToId('resume'); } })}
            >
              <Download size={16} aria-hidden /> Download Resume
            </GradientButton>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            <a href={githubUrl} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile"
               className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/60 hover:text-white">
              <Github size={20} />
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile"
               className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/60 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send me an email"
               className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/60 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 flex justify-center md:order-2">
          <div className="relative animate-float">
            <div aria-hidden className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 opacity-40 blur-lg" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-[3px] border-cyan-200/50 bg-panel p-1 ring-4 ring-violet-500/30 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
              {imgOk ? (
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt={`Portrait of ${profile.name}`}
                  width={800}
                  height={800}
                  decoding="async"
                  className="h-full w-full rounded-full object-cover object-center"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div className="grid h-full w-full place-items-center bg-gradient-to-br from-blue-600/40 to-violet-700/40 text-7xl font-extrabold text-white" role="img" aria-label={`${profile.name} avatar`}>
                  {profile.initials}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
