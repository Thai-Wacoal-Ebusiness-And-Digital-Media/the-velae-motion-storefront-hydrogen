import {useState} from 'react';

export function VelaeNewsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative bg-[#211F1B] py-20 sm:py-28 overflow-hidden">
      <div
        className="relative z-10 mx-auto text-center"
        style={{padding: '0 clamp(1.6rem, 3.5vw, 5rem)'}}
      >
        <p
          className="text-[#C08A5E] text-xs uppercase tracking-[0.2em] mb-4"
          style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
        >
          Stay close
        </p>
        <h2
          className="text-[#F2ECE2] text-2xl sm:text-3xl md:text-4xl leading-[1.1] max-w-lg mx-auto"
          style={{fontFamily: '"Fraunces", serif', fontWeight: 380}}
        >
          Join the Velae
        </h2>
        <p
          className="mt-4 text-[#F2ECE2]/60 text-sm leading-relaxed max-w-md mx-auto"
          style={{fontFamily: '"Hanken Grotesk", sans-serif'}}
        >
          New scents, small drops, and quiet updates — delivered gently to your
          inbox.
        </p>

        <form
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full sm:flex-1 bg-transparent border-b border-[#F2ECE2]/30 text-[#F2ECE2] text-sm py-3 px-1 placeholder:text-[#F2ECE2]/30 focus:border-[#C08A5E] focus:outline-none transition-colors"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#F2ECE2] hover:bg-[#F2ECE2]/90 text-[#1C1A17] text-xs uppercase tracking-[0.15em] font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
