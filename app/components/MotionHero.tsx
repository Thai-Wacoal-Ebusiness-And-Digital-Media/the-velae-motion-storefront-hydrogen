import {useState, useEffect, useRef} from 'react';
import {LogIn, UserPlus, Play, Sparkles, Menu, X} from 'lucide-react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import BoomerangVideoBg from './BoomerangVideoBg';
import {Link} from '@remix-run/react';

gsap.registerPlugin(useGSAP);

const BG_VIDEO = '/assets/hero-video.mp4';

export function MotionHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({defaults: {ease: 'expo.out'}});

        tl.set(
          [
            '.hero-headline',
            '.hero-subhead',
            '.hero-eyebrow',
            '.hero-blurb',
            '.hero-cta-row',
          ],
          {opacity: 0, y: 24},
        )
          .to('.hero-headline', {opacity: 1, y: 0, duration: 1})
          .to('.hero-subhead', {opacity: 1, y: 0, duration: 0.8}, '-=0.6')
          .to('.hero-eyebrow', {opacity: 1, y: 0, duration: 0.6}, '-=0.3')
          .to('.hero-blurb', {opacity: 1, y: 0, duration: 0.6}, '-=0.4')
          .to('.hero-cta-row', {opacity: 1, y: 0, duration: 0.6}, '-=0.4');
      });

      return () => mm.revert();
    },
    {scope},
  );

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    {href: '/collections', label: 'Fragrance'},
    {href: '/collections/body-soap', label: 'Body & Soap'},
    {href: '/collections/the-wardrobe', label: 'The Wardrobe'},
    {href: '/pages/about', label: 'About'},
  ];

  return (
    <section
      ref={scope}
      className="relative w-full min-h-screen sm:h-screen overflow-hidden"
    >
      <BoomerangVideoBg
        src={BG_VIDEO}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-[#1C1A17]/35 z-[1]" />

      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6">
        <div className="flex items-center gap-2 text-[#F7F4EF]">
          <Link
            to="/"
            className="text-lg sm:text-xl md:text-2xl tracking-tight"
            style={{fontFamily: '"Fraunces", serif', fontWeight: 380}}
          >
            The Velae
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1 bg-[#F7F4EF]/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-[#F7F4EF]/60">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm px-3 py-2 transition-colors ${
                i === 0
                  ? 'font-semibold text-[#1C1A17]'
                  : 'font-medium text-[#1C1A17]/70 hover:text-[#1C1A17]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/collections"
            className="ml-2 bg-[#1C1A17] hover:bg-[#1C1A17]/80 text-[#F7F4EF] text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Shop Now
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-[#F7F4EF]">
          <Link
            to="/account/register"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <UserPlus className="w-4 h-4" />
            Sign Up
          </Link>
          <Link
            to="/account/login"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-[#F7F4EF]/70 backdrop-blur-md border border-[#F7F4EF]/60 text-[#1C1A17] transition-all duration-300 hover:bg-[#F7F4EF]/90"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Menu
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen
                  ? 'opacity-0 rotate-90 scale-50'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-50'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#1C1A17]/40 backdrop-blur-sm" />
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-[#F7F4EF]/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold text-[#1C1A17] py-4 border-b border-[#1C1A17]/10 transition-all duration-500 ${
                  menuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div
            className={`mt-8 flex flex-col gap-4 transition-all duration-500 ${
              menuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-8 opacity-0'
            }`}
            style={{transitionDelay: menuOpen ? '450ms' : '0ms'}}
          >
            <Link
              to="/account/register"
              className="flex items-center gap-2 text-sm font-medium text-[#1C1A17]/70 sm:hidden"
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </Link>
            <Link
              to="/account/login"
              className="flex items-center gap-2 text-sm font-medium text-[#1C1A17]/70 sm:hidden"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link
              to="/collections"
              className="mt-2 text-center bg-[#1C1A17] hover:bg-[#1C1A17]/80 text-[#F7F4EF] text-sm font-semibold px-5 py-3 rounded-full transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6">
        <h1
          className="hero-headline leading-[0.95] text-[#F7F4EF] text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl"
          style={{
            fontFamily: '"Fraunces", serif',
            fontWeight: 380,
            letterSpacing: '-0.02em',
          }}
        >
          Warmth in{' '}
          <span className="text-[#C08A5E]">
            every
            <br className="hidden sm:block" /> small detail
          </span>
        </h1>
        <p className="hero-subhead mt-6 sm:mt-8 text-[#F7F4EF]/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md px-2">
          Soap, fragrance & clothing — crafted with care in Thailand, made to be
          part of your everyday ritual.
        </p>
      </div>

      {/* Bottom-left CTA block */}
      <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm">
        <div className="hero-eyebrow flex items-center gap-2 text-[#F7F4EF]/95 mb-3">
          <Sparkles className="w-4 h-4" />
          <span
            className="text-xs font-medium uppercase tracking-[0.15em]"
          >
            New Collection
          </span>
        </div>
        <p className="hero-blurb text-[#F7F4EF]/75 text-xs leading-relaxed mb-6 max-w-xs">
          Discover our latest pieces — small-batch soaps, natural fragrances,
          and effortless linen essentials.
        </p>
        <div className="hero-cta-row flex items-center gap-4 flex-wrap">
          <Link
            to="/collections"
            className="bg-[#F7F4EF] hover:bg-[#F7F4EF]/90 text-[#1C1A17] text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm uppercase tracking-wider text-xs"
          >
            Shop Now
          </Link>
          <Link
            to="/pages/about"
            className="text-[#F7F4EF] text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Bottom-right video link */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2 text-[#F7F4EF]/90 text-sm">
        <button className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F7F4EF]/20 backdrop-blur-sm hover:bg-[#F7F4EF]/30 transition-colors">
          <Play className="w-3 h-3 fill-[#F7F4EF] text-[#F7F4EF] ml-0.5" />
        </button>
        <span className="font-medium">Behind the craft</span>
        <span className="text-[#F7F4EF]/60">1:35</span>
      </div>
    </section>
  );
}
