import { useEffect, useState } from 'react';

// Works in dev and after deployment because BASE_URL follows the Vite `base` setting.
export const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

export type ResumeStatus = 'checking' | 'ready' | 'missing';

/** Checks whether public/resume.pdf really exists (a dev-server HTML fallback does not count). */
export function useResume(): ResumeStatus {
  const [status, setStatus] = useState<ResumeStatus>('checking');

  useEffect(() => {
    let cancelled = false;
    fetch(resumeUrl, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') ?? '';
        if (!cancelled) setStatus(res.ok && type.includes('pdf') ? 'ready' : 'missing');
      })
      .catch(() => !cancelled && setStatus('missing'));
    return () => {
      cancelled = true;
    };
  }, []);

  return status;
}
