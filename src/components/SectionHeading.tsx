import { Reveal } from './Reveal';

type Props = { eyebrow: string; title: string; subtitle?: string };

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-slate-400">{subtitle}</p>}
    </Reveal>
  );
}
