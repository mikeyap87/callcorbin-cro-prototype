# Corbin & Co CRO Prototype

A standalone local prototype for a more premium, conversion-focused Corbin & Co website experience.

This does not modify the live website. CTAs and important paths link back to the real Corbin & Co pages.

## Local URL

`http://127.0.0.1:5197`

## Run Locally

```bash
npm install
npm run dev
```

There are no runtime dependencies. Playwright is included as a dev-only browser QA dependency.

## Checks

```bash
npm run check
npm run browser:check
npm run build
```

`npm run check` verifies local image references, anchor links, alt text, image size limits, and the contact form mail action.
`npm run browser:check` verifies desktop/mobile loading, console/page errors, image loading, and key CTA presence while the local server is running.

## Project Shape

- `index.html` - single-page prototype.
- `styles.css` - responsive premium visual system.
- `script.js` - mobile navigation and mailto contact action.
- `vercel.json` - Vercel build/output settings for static deployment.
- `assets/images/` - generated and optimized local image assets.
- `docs/PROJECT.md` - plain-English product and strategy documentation.
- `docs/CRO_AUDIT.md` - discovery notes and conversion strategy.
- `docs/IMAGE_GENERATION.md` - image art direction, prompts, and generated asset notes.

## Rollback

Delete the `callcorbin-cro-prototype` folder and remove the project entry from the workspace registry files if this prototype is no longer needed.
