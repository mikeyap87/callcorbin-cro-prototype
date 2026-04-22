# Corbin & Co CRO Prototype

## What This Is

This is a standalone local prototype for a more premium, more conversion-focused Corbin & Co website experience. It is not the live website and it does not modify `callcorbin.ca`.

## Who It Serves

The prototype is for Langley and Fraser Valley buyers and sellers who need clearer advice before making a high-stakes real estate decision.

## Main Problem It Solves

The current site has strong proof and useful content, but the conversion path is crowded. This prototype makes the first screen clearer, brings trust signals forward, separates buyer/seller paths, and gives not-ready visitors a softer research path.

## Core Conversion Strategy

- Primary CTA: get a 24-hour home value through the real Corbin & Co home evaluation page.
- Secondary CTA: search live listings through the real property search.
- Support CTA: call, text, email, browse resources, or read city guides.
- Main positioning: decision protection through local pricing, timing, competition, and negotiation advice.

## Main Sections

- Hero with clear offer, proof points, and primary/secondary CTAs.
- Intent cards for selling, buying, and researching.
- Strategy section explaining why visitors should call before they move.
- Seller and buyer pathway sections.
- Proof section using live-site credibility points.
- Area routing for Fraser Valley city/neighbourhood exploration.
- Objection-handling FAQ.
- Contact CTA using real phone, email, and live contact links.

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

The prototype generated five local JPEG assets:

- `assets/images/hero-langley-advisor.jpg`
- `assets/images/seller-prep.jpg`
- `assets/images/buyer-tour.jpg`
- `assets/images/market-strategy.jpg`
- `assets/images/team-process.jpg`

The art direction is realistic Fraser Valley real estate: premium but approachable, adult-only, no fake logos, no fake listing signs, no readable generated text, and no implication that generated people are real team members.

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
- Which CTA should be dominant for the final production homepage: home value, quick call, or live listings.
- Whether the final site should keep the current direct "no-BS" language or soften it for a more premium feel.
