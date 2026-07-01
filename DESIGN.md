# Design

## Visual Theme

Warm editorial minimalism (MYEL-inspired). Light, airy, cream-based. Not dark mode by default — the brand is soft/tactile (soap, fragrance, linen), not moody/tech.

## Color

Hardcoded hex in components (not yet tokenized in Tailwind config — `tailwind.config.js` only defines CSS-var-backed `primary`/`contrast`/`notice`/`shopPay`, unused by the newer Velae sections which inline hex directly).

- Cream (bg): `#F7F4EF`
- Dark (text/ink): `#1C1A17`
- Clay (accent, muted warm brown): `#9C6B4A`
- Amber (secondary accent, dark-scheme use): `#C08A5E`
- Warm panel bg (from theme-context, not yet ported to Hydrogen): `#ECE5DA`
- Dark warm scheme (from theme-context, not yet ported): bg `#211F1B`, text `#F2ECE2`

Strategy: restrained. Cream/dark neutrals carry the page; clay is the single accent (links, active states, eyebrows).

## Typography

- Display/headings: **Fraunces** (serif, weight 380 for editorial lightness, tight leading `1.1`), via `fonts.bunny.net`.
- Body/UI: **Hanken Grotesk** (sans), uppercase tracked (`0.1em`–`0.15em`) for eyebrows/labels/buttons.
- No Inter. No system-default sans for display text.

## Motion (target system — porting from Liquid theme per theme-context.md §14)

- Dials: DESIGN_VARIANCE ~6 (calm asymmetry), MOTION_INTENSITY ~7 (cinematic, restrained — no bounce/elastic), VISUAL_DENSITY ~3 (airy, gallery-like).
- Stack: **GSAP + ScrollTrigger** via `@gsap/react`'s `useGSAP()` hook. Optional **Lenis** for smooth scroll (desktop only, disabled on touch).
- Reveal grammar: fade-up on scroll, `start: 'top 85%', once: true`. Staggered children via `staggerChildren`/GSAP stagger, not manual delays.
- Animate only `transform`/`opacity`. Never layout properties (`top`/`left`/`width`/`height`).
- Reduced motion: `gsap.matchMedia()` with `(prefers-reduced-motion: reduce)` — must have a fully static fallback, not just slower.
- Perpetual/heavy animations isolated in their own client components to avoid parent re-renders.

## Layout

- Full-bleed fluid containers with `clamp()` gutters (not a fixed centered column).
- Triptych openers, zig-zag editorial splits (`VelaeEditorialSplit`), tight image galleries.
- Cards used sparingly — most sections are full-bleed media + text, not boxed.

## Components (current)

- `MotionHero` — boomerang canvas video loop hero.
- `VelaeTriptych`, `VelaeEditorialSplit` (×2), `VelaeBrandStory`, `VelaePillars`, `VelaeMarquee` (CSS `@keyframes`), `VelaeLookbook`, `VelaeNewsletter`.
- `ProductGallery` — PDP image gallery, 4:5 portrait, hero image capped `md:max-h-[70vh]`.
- Buttons: pill-shaped (`rounded-full`), dark fill primary, uppercase tracked label.
