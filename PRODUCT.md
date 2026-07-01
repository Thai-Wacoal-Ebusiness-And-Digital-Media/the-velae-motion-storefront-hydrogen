# Product

## Register

brand

## Users

Shoppers in Thailand (THB currency) browsing fragrance, soap, and apparel. They are drawn to warm, minimal, editorial-feeling brands — think MYEL (myeldesign.com), not a typical e-commerce grid. They are in a browsing/discovery mindset, not just transactional lookup: scroll-driven storytelling, product photography, and pacing matter as much as the buy button.

## Product Purpose

The Velae storefront (Shopify Hydrogen) sells soap, fragrance, and clothing. It exists to feel like a small, warm, considered house brand rather than a mass-market shop. Success = the site reads as editorial and unhurried while still converting (add-to-cart, real Shopify checkout).

## Brand Personality

Warm, friendly, minimal. Cinematic but restrained motion — never flashy or bouncy. Calm asymmetry over rigid symmetry or chaotic maximalism. Airy, gallery-like density; content breathes.

## Anti-references

Not generic SaaS/AI-slop aesthetic (no purple glows, no gradient text, no bento-card grids, no stock "hero metric" patterns). Not a loud, high-density e-commerce grid (Amazon-style). Not bouncy/elastic motion — easing must feel unhurried, not playful-bouncy.

## Design Principles

- Editorial over transactional: layout, movement, and pacing borrow from MYEL's agency-built feel — full-bleed sections, triptych openers, zig-zag editorial splits.
- Motion is cinematic but restrained: fade-up reveals on scroll, staggered children, no bounce/elastic easing, transform/opacity only.
- Warmth through color and type, not decoration: cream/clay/amber palette, Fraunces serif display + Hanken Grotesk body, no hardcoded hex outside tokens.
- Calm asymmetry: enough variance to feel designed, not symmetric/generic, but never chaotic.
- Motion degrades gracefully: respects `prefers-reduced-motion`, works with JS disabled (progressive enhancement).

## Accessibility & Inclusion

Respect `prefers-reduced-motion` (motion must have a static fallback, per `theme-context.md` §5/§14). No explicit WCAG level stated by the merchant; default to WCAG AA — sufficient contrast on cream/dark/clay palette, keyboard-navigable interactive elements, no motion-only affordances.
