'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

type ParallaxProps = {
  /** Large title shown between the parallax layers. */
  title?: string;
  /** Layer images, back to front: sky, middle, foreground. */
  images?: [string, string, string];
  /** Content rendered below the parallax header (we place the Hero here). */
  children?: React.ReactNode;
  id?: string;
};

// Stock images from Unsplash (swap for your own in public/ if you prefer).
const DEFAULT_IMAGES: [string, string, string] = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=85',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=85',
];

export function ParallaxComponent({
  title = 'Parallax',
  images = DEFAULT_IMAGES,
  children,
  id,
}: ParallaxProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect users who prefer reduced motion: no parallax, no smooth-scroll hijacking.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '0% 0%',
          end: '100% 0%',
          scrub: 0,
        },
      });

      const layers = [
        { layer: '1', yPercent: 70 },
        { layer: '2', yPercent: 55 },
        { layer: '3', yPercent: 40 },
        { layer: '4', yPercent: 10 },
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          { yPercent: layerObj.yPercent, ease: 'none' },
          idx === 0 ? undefined : '<'
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax" ref={parallaxRef} id={id}>
      <section className="parallax__header" aria-label="Introduction banner">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow"></div>
          <div data-parallax-layers className="parallax__layers">
            <img src={images[0]} loading="eager" decoding="async" width="2400" data-parallax-layer="1" alt="" className="parallax__layer-img parallax__layer-img--back" />
            <img src={images[1]} loading="eager" decoding="async" width="2400" data-parallax-layer="2" alt="" className="parallax__layer-img parallax__layer-img--mid" />
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title">{title}</h2>
            </div>
            <img src={images[2]} loading="eager" decoding="async" width="2400" data-parallax-layer="4" alt="" className="parallax__layer-img parallax__layer-img--front" />
          </div>
          <div className="parallax__fade"></div>
        </div>
      </section>
      <section className="parallax__content">{children}</section>
    </div>
  );
}
