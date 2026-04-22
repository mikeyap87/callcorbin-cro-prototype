# Project Instructions

## Working Style

- Keep changes small and reversible.
- Explain product-facing changes in plain English.
- Do not modify the live Corbin & Co website from this prototype.
- Keep all prototype work inside this folder unless updating the parent workspace registry or port map.

## Git And Safety

- Use a feature branch for meaningful future work when this folder becomes a git repo.
- Do not commit generated experiments or unused assets unless they are referenced by the prototype or docs.
- Never add secrets to code or docs. This project currently does not use environment variables.

## Documentation

- Keep `docs/PROJECT.md` current when the conversion strategy, local URL, stack, or asset direction changes.
- Update `docs/IMAGE_GENERATION.md` when images are replaced or regenerated.
- Keep `README.md` practical for non-engineer review.

## QA

- Run `npm run check` after content or asset changes.
- Run `npm run build` before sharing.
- For UI changes, verify desktop and mobile layouts in a real browser.
