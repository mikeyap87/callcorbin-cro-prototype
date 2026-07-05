# Corbin & Co CRO Prototype

## What This Is

This is a standalone local prototype for a more premium, more conversion-focused Corbin & Co website experience. It is not the live website and it does not modify `callcorbin.ca`.

## Who It Serves

The prototype is for Langley and Fraser Valley buyers and sellers who need clearer advice before making a high-stakes real estate decision.

## Main Problem It Solves

The current site has strong proof and useful content, but the conversion path is crowded. This prototype makes the first screen clearer, brings trust signals forward, separates buyer/seller paths, and gives not-ready visitors a softer research path.

## Core Conversion Strategy

- Primary CTA: start with a street address on the homepage, then move into a local seller page that opens the real Corbin & Co home evaluation form in a new tab.
- Secondary CTA: search live listings through the real property search.
- Support CTA: call, text, email, browse resources, or read city guides.
- Main positioning: clearer local pricing, timing, and next-step advice before someone lists, offers, or waits.

## Main Sections

- Homepage hero with an address-as-headline start, a named deliverable CTA, a Fraser Valley home exterior hero image, and a smaller Corbin trust strip.
- Intent cards for selling, buying, and researching.
- Strategy section about getting clearer advice before someone lists, offers, or waits.
- Seller and buyer pathway sections.
- Proof section using live-site credibility points.
- Area routing for Fraser Valley city/neighbourhood exploration.
- FAQ for common pre-contact questions.
- Contact CTA using real phone, email, and live contact links.
- Dedicated `home-evaluation/` seller page with a trust-first Corbin reviewer block, address-first CTA, optional extra details, and a clear handoff into the live Corbin form.

## Current Stack

- Static HTML, CSS, and JavaScript.
- Local Node static server with a fixed strict port.
- No framework and no runtime dependencies.
- Playwright is included as a dev-only browser QA dependency.
- No environment variables.

## Local Setup

```bash
npm install
npm run dev
```

Open:

`http://127.0.0.1:5197`

Hosted production:

`https://callcorbin-cro-prototype.vercel.app`

GitHub:

`https://github.com/mikeyap87/callcorbin-cro-prototype`

Run checks:

```bash
npm run check
npm run browser:check
npm run build
```

## Generated Image Direction

The prototype currently uses six local image assets:

- `assets/images/hero-fraser-valley-home-v2.jpg`
- `assets/images/corbin-signature-portrait-v2.jpg`
- `assets/images/seller-prep.jpg`
- `assets/images/buyer-tour.jpg`
- `assets/images/market-strategy.jpg`
- `assets/images/team-process.jpg`

The art direction is realistic Fraser Valley real estate: premium but approachable, local, no fake logos, no fake listing signs, no readable generated text, and no invented team claims. The Corbin trust-strip portrait is based on a live-site headshot reference and is used only inside this local prototype for homepage and seller-page trust moments.

See `docs/IMAGE_GENERATION.md` for prompts, source paths, and optimization notes.

## Deployment Notes

This prototype is configured for Vercel with `vercel.json`.

- Build command: `npm run build`
- Output directory: `dist`
- Runtime: static files only
- Production URL: `https://callcorbin-cro-prototype.vercel.app`
- GitHub integration: `mikeyap87/callcorbin-cro-prototype`

## Important Constraints

- Do not fake reviews, guarantees, listings, checkout, booking calendars, or brokerage claims.
- Keep outbound commerce and lead paths connected to the real Corbin & Co site.
- Do not modify the live website.
- Replace generated people/images with approved real photography before production use if the owner wants a fully authentic live design.

## What Still Needs Owner Approval

- Final headline and tone.
- Whether generated imagery is acceptable for a prototype review.
- Whether the address-as-headline homepage hero should remain in the final production build or settle into a simpler address-first handoff into the live valuation page.
- Whether the dedicated local seller page should stay as a cleaner pre-intake step or collapse more directly into the live Corbin form.
- Whether the final site should keep the current direct language or soften it for a more premium feel.
