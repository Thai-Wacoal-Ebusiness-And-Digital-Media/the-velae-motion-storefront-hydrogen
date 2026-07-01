import {Link} from '@remix-run/react';

export function VelaeBrandStory() {
  return (
    <section className="bg-[#ECE5DA]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="relative overflow-hidden">
          <div className="aspect-[4/5] md:aspect-auto md:absolute md:inset-0">
            <video
              src="/assets/Woman_inspecting_handmade_soap_202607011602.mp4"
              className="w-full h-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Founder inspecting handmade soap in a Thai workshop"
            />
          </div>
        </div>

        <div
          className="flex items-center"
          style={{
            padding: 'clamp(2rem, 5vw, 5rem) clamp(1.6rem, 3.5vw, 5rem)',
          }}
        >
          <div className="max-w-lg">
            <p
              className="text-[#9C6B4A] text-xs uppercase tracking-[0.15em] mb-4"
              style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
            >
              Our Story
            </p>
            <h2
              className="text-[#1C1A17] text-2xl sm:text-3xl md:text-4xl leading-[1.15]"
              style={{fontFamily: '"Fraunces", serif', fontWeight: 380}}
            >
              Founded in Thailand,
              <br /> made with care
            </h2>
            <p
              className="mt-5 text-[#1C1A17]/70 text-sm sm:text-base leading-relaxed max-w-[45ch]"
              style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
            >
              The Velae began in a small workshop — weighing oils by hand,
              curing soap in wooden racks, choosing every ingredient with
              intention. We believe the things you use every day should be made
              slowly, honestly, and with warmth.
            </p>
            <blockquote
              className="mt-6 pl-4 border-l-2 border-[#9C6B4A]/40 text-[#1C1A17]/60 text-sm italic leading-relaxed"
              style={{fontFamily: '"Fraunces", serif'}}
            >
              "We wanted to make something you reach for not because you have
              to, but because it makes the ordinary feel a little more
              considered."
            </blockquote>
            <Link
              to="/pages/about"
              className="inline-block mt-8 text-[#1C1A17] text-xs uppercase tracking-[0.15em] border-b border-[#1C1A17]/30 pb-1 hover:border-[#1C1A17] transition-colors"
            >
              Read our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
