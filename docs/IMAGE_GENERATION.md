# Image Generation Direction

This prototype uses generated imagery to create a cohesive visual direction for Corbin & Co. The live site remains the source of truth for brand substance, claims, contact details, and conversion paths.

## Art Direction

The visual system should feel like premium Fraser Valley real estate: direct, local, warm, and competent. Images should show modern homes, real neighborhood context, professional client guidance, and clear buyer/seller decision moments.

## Visual Rules

- Photorealistic, sharp, and natural.
- Adult people only.
- No readable text, logos, watermarks, listing signs, fake MLS details, fake brokerage marks, or distorted product labels.
- Avoid celebrity-like faces and avoid implying generated people are the real Corbin & Co team unless a specific image is intentionally derived from a live-site reference for prototype use.
- Natural skin texture, realistic hands, realistic anatomy.
- Color direction: deep charcoal, off-white, warm stone, Fraser Valley green, restrained sky blue.
- Lighting: natural West Coast daylight, clean interiors, soft contrast, credible editorial photography.
- Composition: enough negative space for web layouts; no clutter; strong foreground/background hierarchy.

## Generated Assets

1. `hero-fraser-valley-home-v2.jpg`
   - Current homepage hero image. Premium Fraser Valley detached home exterior at golden hour, with the house weighted right and cleaner negative space on the left for headline and form overlay.

2. `corbin-signature-portrait-v2.jpg`
   - Current homepage and seller-page trust portrait. Generated from the live-site Corbin headshot reference at `assets/reference/corbin-live-headshot.jpg`, then restaged as a warm in-home portrait for a smaller signed note below the homepage hero form and the reviewer block on the local seller page.

3. `seller-prep.jpg`
   - Seller preparation image: stylish living room, adult homeowner and advisor reviewing a simple prep checklist or room details, no readable text.

4. `buyer-tour.jpg`
   - Buyer pathway image: adult couple arriving at a townhome or detached home in a walkable Langley-style neighborhood with an advisor nearby.

5. `market-strategy.jpg`
   - Market strategy image: professional desk scene with neighborhood map shapes, home keys, tablet with abstract charts only, no readable text.

6. `team-process.jpg`
   - Team/process image: two or three adult real estate professionals in a bright office or property staging environment, candid planning moment, no logos.

7. `hero-langley-advisor.jpg`
   - Earlier homepage concept kept as a comparison asset from the first prototype pass. It is no longer the active hero image.

## Prompt Notes

Each prompt should specify:

- Use case: photorealistic-natural or product-mockup.
- Asset type: website section image.
- No readable text, fake logos, or watermarks.
- Real estate context should be recognizable but not claim to depict a real listing, client, or team member, unless a live-site portrait reference is being used for a clearly-labeled prototype trust image.
- Images should be generated with the requested OpenAI image model direction for `gpt-image-2` where available through the active image tool.

## Generation Status

Generated with the built-in image generation tool using the requested `gpt-image-2` model direction in the prompts. The most recent current-pass originals are stored under:

`/Users/michaelyap/.codex/generated_images/019f32a7-97e4-7dc1-94ee-2ca02fa4c0c6/`

The current selected images were copied into this project as optimized JPEG files:

| Asset | Local path | Dimensions | Size |
| --- | --- | ---: | ---: |
| Current hero home | `assets/images/hero-fraser-valley-home-v2.jpg` | 1600 x 900 | 323 KB |
| Corbin trust portrait | `assets/images/corbin-signature-portrait-v2.jpg` | 720 x 480 | 80 KB |
| Seller prep | `assets/images/seller-prep.jpg` | 1200 x 800 | 244 KB |
| Buyer tour | `assets/images/buyer-tour.jpg` | 1200 x 800 | 435 KB |
| Market strategy | `assets/images/market-strategy.jpg` | 1200 x 800 | 270 KB |
| Team process | `assets/images/team-process.jpg` | 1200 x 800 | 225 KB |
| Earlier consultation hero | `assets/images/hero-langley-advisor.jpg` | 1600 x 842 | 301 KB |

## Estimated Cost

The exact API metering for the built-in tool is not exposed in this environment. As an API-equivalent estimate, OpenAI's public pricing page lists `gpt-image-2` image output at `$30.00 / 1M tokens` and text input at `$5.00 / 1M tokens` as of this prototype date: https://openai.com/api/pricing/

The current asset set should be treated as a small image-generation expense; exact cost depends on output token count, size, and quality settings used by the image service.
