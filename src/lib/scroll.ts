export function scrollToId(id: string) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }
  history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`);
}
