import { skillGroups } from '@/data/portfolioData';
import { getIcon } from './icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Skills"
        title="What I Work With"
        subtitle="Technologies and skills I use and am still growing in."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g, i) => {
          const Icon = getIcon(g.icon);
          return (
            <Reveal key={g.title} delay={i * 0.08}>
              <article className="card card-hover h-full p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 text-cyan-200">
                    <Icon size={22} aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
