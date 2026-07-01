import {useRef, type ReactNode} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Fade-up scroll reveal, fires once per element. When `childSelector` is set,
 * animates matching descendants with a stagger instead of the wrapper itself
 * (e.g. triptych cards left-to-right).
 */
export function Reveal({
  children,
  className,
  childSelector,
  stagger = 0.12,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  childSelector?: string;
  stagger?: number;
  y?: number;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const targets = childSelector
          ? scope.current?.querySelectorAll(childSelector)
          : scope.current;

        if (!targets) return;

        gsap.set(targets, {opacity: 0, y});
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger,
          scrollTrigger: {
            trigger: scope.current,
            start: 'top 85%',
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    {scope},
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
