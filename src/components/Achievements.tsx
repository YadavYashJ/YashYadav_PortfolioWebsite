import { timeline } from '@/data/portfolioData';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Achievements & Education"
        title="My Journey"
        subtitle="My education, coursework and the projects I have built so far."
      />
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
        {timeline.map((t, i) => (
          <li key={t.title} className="relative">
            <span aria-hidden className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 ring-4 ring-ink sm:-left-[39px]" />
            <Reveal delay={i * 0.05}>
              <article className="card card-hover p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 font-semibold text-cyan-200">{t.category}</span>
                  <span className="text-slate-400">{t.period}</span>
                  {t.placeholder && (
                    <span className="rounded-full border border-amber-300/40 px-2.5 py-0.5 text-amber-200">Sample</span>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{t.detail}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
