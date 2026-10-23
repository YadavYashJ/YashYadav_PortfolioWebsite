import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';
import { projects } from '@/data/portfolioData';
import { getIcon } from './icons';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const shotBase = `${import.meta.env.BASE_URL}projects/`;

/** Cover screenshot with small thumbnails to switch between pages of the project. */
function Shots({ images, title }: { images: string[]; title: string }) {
  const [i, setI] = useState(0);
  return (
    <div className="relative bg-ink">
      <img
        key={images[i]}
        src={`${shotBase}${images[i]}`}
        alt={`${title} screenshot ${i + 1} of ${images.length}`}
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        className="h-48 w-full object-cover object-top sm:h-52"
      />
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 bg-gradient-to-t from-ink/90 to-transparent px-3 pb-2.5 pt-8">
          {images.map((img, n) => (
            <button
              key={img}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show screenshot ${n + 1} of ${title}`}
              aria-current={n === i}
              className={`h-2.5 rounded-full transition-all ${n === i ? 'w-6 bg-cyan-300' : 'w-2.5 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've Built"
        subtitle="Real projects built during my B.Tech. Use the dots on each card to browse screenshots."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => {
          const Icon = getIcon(p.icon);
          return (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                {p.images?.length ? (
                  <Shots images={p.images} title={p.title} />
                ) : (
                  <div className={`relative grid h-48 place-items-center bg-gradient-to-br sm:h-52 ${p.gradient}`}>
                    <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
                    <Icon size={56} className="relative text-white/90 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-200">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-medium text-slate-100 transition hover:border-cyan-300/60"
                      >
                        <Github size={16} aria-hidden /> GitHub Repository<span className="sr-only"> for {p.title}</span>
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-4 text-sm font-semibold text-white transition hover:brightness-110"
                      >
                        <ExternalLink size={16} aria-hidden /> Preview Website<span className="sr-only"> of {p.title}</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
