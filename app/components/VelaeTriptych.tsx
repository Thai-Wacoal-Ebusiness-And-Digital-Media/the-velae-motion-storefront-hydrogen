import {Link} from '@remix-run/react';

const panels = [
  {
    src: '/assets/triptych-fragrance.jpeg',
    label: 'Fragrance',
    href: '/collections/fragrance',
  },
  {
    src: '/assets/triptych-soap.jpeg',
    label: 'Body & Soap',
    href: '/collections/body-soap',
  },
  {
    src: '/assets/triptych-wardrobe.jpeg',
    label: 'The Wardrobe',
    href: '/collections/the-wardrobe',
  },
];

export function VelaeTriptych() {
  return (
    <section className="bg-[#F7F4EF] py-16 sm:py-24 md:py-32">
      <div className="mx-auto" style={{padding: '0 clamp(1.6rem, 3.5vw, 5rem)'}}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
          {panels.map((panel) => (
            <Link
              key={panel.href}
              to={panel.href}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={panel.src}
                  alt={panel.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p
                className="mt-4 mb-2 text-center text-[#1C1A17] text-xs uppercase tracking-[0.15em]"
                style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
              >
                {panel.label}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <h2
            className="text-[#1C1A17] text-2xl sm:text-3xl md:text-4xl leading-[1.1] max-w-2xl mx-auto"
            style={{fontFamily: '"Fraunces", serif', fontWeight: 380}}
          >
            Made slow, with intention
          </h2>
          <Link
            to="/collections"
            className="inline-block mt-6 text-[#1C1A17] text-xs uppercase tracking-[0.15em] border-b border-[#1C1A17]/30 pb-1 hover:border-[#1C1A17] transition-colors"
          >
            Shop all
          </Link>
        </div>
      </div>
    </section>
  );
}
