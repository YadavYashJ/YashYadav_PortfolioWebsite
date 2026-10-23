import { Download, Eye, FileText, TriangleAlert } from 'lucide-react';
import { profile } from '@/data/portfolioData';
import { useResume, resumeUrl } from '@/hooks/useResume';
import { GradientButton } from '@/components/ui/gradient-button';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Resume() {
  const status = useResume();
  const ready = status === 'ready';

  return (
    <section id="resume" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Résumé" title="My Résumé" />
      <Reveal>
        <div className="card flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
          <span className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 text-cyan-200">
            <FileText size={44} aria-hidden />
          </span>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{profile.name} – Résumé</h3>
            <p className="mt-1 text-sm text-slate-400">
              A summary of my education, skills, and projects. View it in the browser or download a PDF copy.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <GradientButton
                href={ready ? resumeUrl : undefined}
                target="_blank"
                rel="noreferrer noopener"
                disabled={!ready}
              >
                <Eye size={16} aria-hidden /> View Resume
              </GradientButton>
              <GradientButton
                variant="secondary"
                href={ready ? resumeUrl : undefined}
                download={profile.resumeFileName}
                disabled={!ready}
              >
                <Download size={16} aria-hidden /> Download Resume PDF
              </GradientButton>
            </div>
          </div>
        </div>
      </Reveal>

      {status === 'missing' && (
        <div role="status" className="mt-6 flex gap-3 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm text-amber-100">
          <TriangleAlert size={20} className="mt-0.5 shrink-0" aria-hidden />
          <p>
            <strong>Résumé file not found.</strong> Export your résumé as a PDF, name it <code className="rounded bg-black/30 px-1.5">resume.pdf</code>,
            and place it in the project&apos;s <code className="rounded bg-black/30 px-1.5">public/</code> folder. Then rebuild and redeploy
            (see README). These buttons stay disabled until the file exists.
          </p>
        </div>
      )}
    </section>
  );
}
