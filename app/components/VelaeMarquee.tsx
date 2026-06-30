const phrases = [
  'Small batch',
  'Made slow',
  'Fairly priced',
  'Naturally sourced',
];

export function VelaeMarquee() {
  const repeated = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <section className="bg-[#1C1A17] py-5 sm:py-6 overflow-hidden">
      <div className="velae-marquee-track flex items-center gap-8 whitespace-nowrap">
        {repeated.map((phrase, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className="text-[#F7F4EF]/80 text-xs sm:text-sm uppercase tracking-[0.2em]"
              style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
            >
              {phrase}
            </span>
            <span className="text-[#9C6B4A]/60 text-xs">—</span>
          </span>
        ))}
      </div>
    </section>
  );
}
