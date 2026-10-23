import { useState } from 'react';
import { CheckCircle2, Mail, Send, TriangleAlert } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { githubUrl, profile } from '@/data/portfolioData';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Feedback =
  | { type: 'idle' }
  | { type: 'sending' }
  | { type: 'sent' }
  | { type: 'mailto' }
  | { type: 'error'; text: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'That email address looks invalid (example: name@example.com).';
  if (!v.message.trim()) e.message = 'Please write a message.';
  else if (v.message.trim().length < 10) e.message = 'Your message is a bit short. Please add a few more words.';
  return e;
}

const inputCls =
  'w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-slate-100 placeholder:text-slate-500 transition focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40';

export function Contact() {
  const [values, setValues] = useState<Fields>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [feedback, setFeedback] = useState<Feedback>({ type: 'idle' });

  const mailtoHref = () =>
    `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${values.name}`)}&body=${encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`
    )}`;

  const onChange = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // no page reload
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setFeedback({ type: 'error', text: 'Please fix the highlighted fields and try again.' });
      return;
    }

    if (profile.formEndpoint) {
      setFeedback({ type: 'sending' });
      try {
        const res = await fetch(profile.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        setFeedback({ type: 'sent' });
        setValues({ name: '', email: '', message: '' });
      } catch {
        setFeedback({
          type: 'error',
          text: 'Your message could not be sent. Please try again, or use the email link below.',
        });
      }
      return;
    }

    // No backend configured: open the visitor's email app. Be honest that nothing was sent yet.
    window.location.href = mailtoHref();
    setFeedback({ type: 'mailto' });
  };

  const fieldErr = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-sm text-rose-300">
        {errors[k]}
      </p>
    ) : null;

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="Have an idea, an opportunity, or just want to say hello? I'd love to collaborate."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="card h-full space-y-4 p-6">
            <a href={`mailto:${profile.email}`} className="flex min-h-[44px] items-center gap-3 text-slate-200 hover:text-cyan-200">
              <Mail size={20} aria-hidden /> <span className="break-all">{profile.email}</span>
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer noopener" className="flex min-h-[44px] items-center gap-3 text-slate-200 hover:text-cyan-200">
              <Github size={20} aria-hidden /> GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener" className="flex min-h-[44px] items-center gap-3 text-slate-200 hover:text-cyan-200">
              <Linkedin size={20} aria-hidden /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-200">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={onChange('name')}
                aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
                className={`${inputCls} ${errors.name ? 'border-rose-400' : 'border-white/10'}`} placeholder="Your name" />
              {fieldErr('name')}
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-200">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange('email')}
                aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                className={`${inputCls} ${errors.email ? 'border-rose-400' : 'border-white/10'}`} placeholder="you@example.com" />
              {fieldErr('email')}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-200">Message</label>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange('message')}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
                className={`${inputCls} resize-y ${errors.message ? 'border-rose-400' : 'border-white/10'}`} placeholder="How can I help?" />
              {fieldErr('message')}
            </div>

            <button type="submit" disabled={feedback.type === 'sending'}
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-violet-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110 disabled:opacity-60 sm:w-auto">
              <Send size={16} aria-hidden /> {feedback.type === 'sending' ? 'Sending…' : profile.formEndpoint ? 'Send Message' : 'Open in Email App'}
            </button>

            <div aria-live="polite">
              {feedback.type === 'sent' && (
                <p className="flex items-start gap-2 rounded-xl border border-emerald-300/30 bg-emerald-300/10 p-3 text-sm text-emerald-100">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden /> Thanks! Your message was sent.
                </p>
              )}
              {feedback.type === 'mailto' && (
                <p className="flex items-start gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 text-sm text-cyan-100">
                  <Mail size={18} className="mt-0.5 shrink-0" aria-hidden />
                  <span>
                    Your email app should now be open with your message ready. It is <strong>not sent</strong> until you press Send there.
                    Nothing opened? <a className="underline" href={mailtoHref()}>Click here</a> or write to {profile.email}.
                  </span>
                </p>
              )}
              {feedback.type === 'error' && (
                <p className="flex items-start gap-2 rounded-xl border border-rose-300/30 bg-rose-300/10 p-3 text-sm text-rose-100">
                  <TriangleAlert size={18} className="mt-0.5 shrink-0" aria-hidden /> {feedback.text}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
