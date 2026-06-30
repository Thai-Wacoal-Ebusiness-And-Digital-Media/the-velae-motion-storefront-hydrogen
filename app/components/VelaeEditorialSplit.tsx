import {Link} from '@remix-run/react';

type Props = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  reverse?: boolean;
};

export function VelaeEditorialSplit({
  image,
  imageAlt,
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  reverse = false,
}: Props) {
  return (
    <section className="bg-[#F7F4EF]">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 min-h-[80vh]`}
      >
        <div
          className={`relative overflow-hidden ${reverse ? 'md:order-2' : ''}`}
        >
          <div className="aspect-[4/5] md:aspect-auto md:absolute md:inset-0">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div
          className={`flex items-center ${
            reverse ? 'md:order-1 md:pr-0' : ''
          }`}
          style={{padding: 'clamp(2rem, 5vw, 5rem) clamp(1.6rem, 3.5vw, 5rem)'}}
        >
          <div className="max-w-lg">
            <p
              className="text-[#9C6B4A] text-xs uppercase tracking-[0.15em] mb-4"
              style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
            >
              {eyebrow}
            </p>
            <h2
              className="text-[#1C1A17] text-2xl sm:text-3xl md:text-4xl leading-[1.15]"
              style={{fontFamily: '"Fraunces", serif', fontWeight: 380}}
            >
              {heading}
            </h2>
            <p
              className="mt-5 text-[#1C1A17]/70 text-sm sm:text-base leading-relaxed max-w-[45ch]"
              style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
            >
              {body}
            </p>
            <Link
              to={ctaHref}
              className="inline-block mt-8 text-[#1C1A17] text-xs uppercase tracking-[0.15em] border-b border-[#1C1A17]/30 pb-1 hover:border-[#1C1A17] transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
