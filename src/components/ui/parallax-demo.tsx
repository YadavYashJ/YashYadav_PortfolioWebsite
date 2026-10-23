// Standalone demo of the parallax component (not used by the portfolio itself).
import { ParallaxComponent } from '@/components/ui/parallax-scrolling';

export default function ParallaxDemo() {
  return (
    <>
      <ParallaxComponent title="Parallax" />
      <div className="osmo-credits">
        <p className="osmo-credits__p">
          Resource by{' '}
          <a target="_blank" rel="noreferrer" href="https://www.osmo.supply/" className="osmo-credits__p-a">
            Osmo
          </a>
        </p>
      </div>
    </>
  );
}
