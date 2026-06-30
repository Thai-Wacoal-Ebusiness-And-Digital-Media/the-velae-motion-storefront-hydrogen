const pillars = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6c0 0-4 4-4 10s4 10 4 10" />
        <path d="M20 6c0 0 4 4 4 10s-4 10-4 10" />
        <path d="M20 34v-2" />
        <circle cx="20" cy="16" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Small-batch',
    text: 'Every bar poured by hand in our Thai workshop. We make less, so each piece gets more care.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 34V18" />
        <path d="M20 18c-2-4-7-6-7-11a7 7 0 0 1 14 0c0 5-5 7-7 11z" />
        <path d="M14 28c0 0 3-2 6-2s6 2 6 2" />
      </svg>
    ),
    title: 'Naturally sourced',
    text: 'Botanicals, essential oils, and raw ingredients chosen for what they do — nothing for show.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 22c0-4 4-8 10-14 6 6 10 10 10 14a10 10 0 0 1-20 0z" />
        <path d="M16 24a4 4 0 0 0 8 0" />
      </svg>
    ),
    title: 'Made with care',
    text: 'No shortcuts, no rush. Cured slow, wrapped thoughtfully, sent when it is ready.',
  },
];

export function VelaePillars() {
  return (
    <section className="bg-[#F7F4EF] py-16 sm:py-24">
      <div
        className="mx-auto"
        style={{padding: '0 clamp(1.6rem, 3.5vw, 5rem)'}}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
          {pillars.map((p) => (
            <div key={p.title} className="text-center sm:text-left">
              <div className="text-[#9C6B4A] mb-4 flex justify-center sm:justify-start">
                {p.icon}
              </div>
              <h3
                className="text-[#1C1A17] text-sm uppercase tracking-[0.12em] mb-3"
                style={{fontFamily: '"Hanken Grotesk", sans-serif', fontWeight: 600}}
              >
                {p.title}
              </h3>
              <p
                className="text-[#1C1A17]/60 text-sm leading-relaxed max-w-[30ch] mx-auto sm:mx-0"
                style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
