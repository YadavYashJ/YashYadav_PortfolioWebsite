import { about, profile } from '@/data/portfolioData';
import { getIcon } from './icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="About Me" title="Who I Am" />
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="text-slate-400">
              <span className="font-semibold text-slate-200">College:</span> {about.college}
              <span className="block text-sm text-slate-500">Enrollment No. {profile.enrollmentNo} · {profile.location}</span>
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {about.cards.map((c, i) => {
            const Icon = getIcon(c.icon);
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="card card-hover h-full p-5">
                  <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 text-cyan-200">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{c.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
