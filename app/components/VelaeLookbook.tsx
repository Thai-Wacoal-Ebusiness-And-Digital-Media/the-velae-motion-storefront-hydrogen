export function VelaeLookbook() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative">
        <img
          src="/assets/lookbook.jpeg"
          alt="Shop the look — styled scene with clothing and products"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1C1A17]/15" />

        <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-16">
          <div className="text-center">
            <p
              className="text-[#F7F4EF] text-xs uppercase tracking-[0.2em] mb-3"
              style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
            >
              Shop the look
            </p>
            <h2
              className="text-[#F7F4EF] text-2xl sm:text-3xl md:text-4xl leading-[1.1]"
              style={{fontFamily: '"Fraunces", serif', fontWeight: 380}}
            >
              The everyday edit
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
